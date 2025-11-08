"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Edit2,
  Trash2,
  Globe,
  DollarSign,
  Clock,
  MapPin,
  X,
  Save,
  Camera,
} from "lucide-react";
import { countryAPI } from "@/services/adminApi";
import toast from "react-hot-toast";

export default function CountriesTab() {
  const [countries, setCountries] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    flag: "",
    flagPreview: "", // Add this
    description: "",
    visaTypes: "",
    processingTime: "",
    visaFee: "",
    popularCities: "",
    language: "",
    currency: "",
    requirements: "",
    benefits: "",
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await countryAPI.getAll();
      setCountries(response.data || []);
    } catch (error) {
      toast(error.message || "Failed to fetch countries", "error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      flag: file,
      flagPreview: previewUrl,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      code: "",
      flag: "",
      flagPreview: "", // Add this
      description: "",
      visaTypes: "",
      processingTime: "",
      visaFee: "",
      popularCities: "",
      language: "",
      currency: "",
      requirements: "",
      benefits: "",
    });
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = new FormData();

      // Always append required fields
      form.append("name", formData.name);
      form.append("code", formData.code);
      form.append("description", formData.description);

      // Optional fields
      form.append("language", formData.language || "");
      form.append("currency", formData.currency || "");
      form.append("processingTime", formData.processingTime || "");
      form.append("visaFee", formData.visaFee || "");
      form.append("requirements", formData.requirements || "");
      form.append("benefits", formData.benefits || "");

      // Handle flag: file or existing URL
      if (formData.flag instanceof File) {
        form.append("flag", formData.flag);
      } else if (formData.flag) {
        form.append("flag", formData.flag); // existing URL
      }

      // Split and append arrays
      const visaTypes = formData.visaTypes
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
      visaTypes.forEach((type) => form.append("visaTypes[]", type));

      const popularCities = formData.popularCities
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean);
      popularCities.forEach((city) => form.append("popularCities[]", city));

      if (editingId) {
        await countryAPI.update(editingId, form, true);
        toast.success("Country updated successfully!");
      } else {
        await countryAPI.create(form, true);
        toast.success("Country created successfully!");
      }

      fetchCountries();
      resetForm();
    } catch (error) {
      toast.error(error.message || "Operation failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (country) => {
    setFormData({
      name: country.name || "",
      code: country.code || "",
      flag: country.flag || "",
      flagPreview: country.flag || "",
      description: country.description || "",
      visaTypes: country.visaTypes?.join(", ") || "",
      processingTime: country.processingTime || "",
      visaFee: country.visaFee || "",
      popularCities: country.popularCities?.join(", ") || "",
      language: country.language || "",
      currency: country.currency || "",
      requirements: country.requirements || "",
      benefits: country.benefits || "",
    });
    setEditingId(country._id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this country?")) return;

    try {
      await countryAPI.delete(id);
      toast("Country deleted successfully!", "success");
      fetchCountries();
    } catch (error) {
      toast(error.message || "Delete failed", "error");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Countries Management
          </h2>
          <p className="text-gray-600 mt-1">
            Manage visa destinations and country information
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          <Plus size={20} />
          Add Country
        </motion.button>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                {editingId ? "Edit Country" : "Add New Country"}
              </h3>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div>
              <div className="relative w-32 mb-10 h-32 mx-auto">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  required={!editingId && !formData.flagPreview}
                />
                <div className="w-full h-full rounded-full border-4 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden relative group">
                  {formData.flagPreview ? (
                    <img
                      src={formData.flagPreview}
                      alt="Flag preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                        <Camera size={20} className="text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-500">Upload Flag</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                    <Camera size={24} className="text-white" />
                  </div>
                </div>
              </div>
              {formData.flagPreview && (
                <p className="text-xs text-gray-500 text-center mt-2">
                  Click to change
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="United Kingdom"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country Code *
                </label>
                <input
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="GB"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <input
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  placeholder="English"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Currency
                </label>
                <input
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  placeholder="GBP"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Processing Time
                </label>
                <input
                  name="processingTime"
                  value={formData.processingTime}
                  onChange={handleChange}
                  placeholder="3-4 weeks"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visa Fee
                </label>
                <input
                  name="visaFee"
                  value={formData.visaFee}
                  onChange={handleChange}
                  placeholder="$500"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Visa Types (comma-separated)
                </label>
                <input
                  name="visaTypes"
                  value={formData.visaTypes}
                  onChange={handleChange}
                  placeholder="Student, Work, Tourist"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Popular Cities (comma-separated)
                </label>
                <input
                  name="popularCities"
                  value={formData.popularCities}
                  onChange={handleChange}
                  placeholder="London, Manchester, Edinburgh"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description about the country..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Visa requirements..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Benefits
                </label>
                <textarea
                  name="benefits"
                  value={formData.benefits}
                  onChange={handleChange}
                  placeholder="Benefits of studying/working in this country..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                disabled={isLoading}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
              >
                <Save size={20} />
                {isLoading
                  ? "Saving..."
                  : editingId
                  ? "Update Country"
                  : "Add Country"}
              </motion.button>
              <button
                onClick={resetForm}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country, index) => (
          <motion.div
            key={country._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
              <img
                src={country.flag}
                alt={country.name}
                className="h-20 w-auto object-contain"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {country.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-[#EE7A36]/10 text-[#EE7A36] rounded-full text-sm font-semibold">
                    {country.code}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {country.description}
              </p>

              <div className="space-y-2 mb-4">
                {country.processingTime && (
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-[#EE7A36]" />
                    <span className="text-gray-700">
                      {country.processingTime}
                    </span>
                  </div>
                )}
                {country.visaFee && (
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign size={16} className="text-[#EE7A36]" />
                    <span className="text-gray-700">{country.visaFee}</span>
                  </div>
                )}
                {country.language && (
                  <div className="flex items-center gap-2 text-sm">
                    <Globe size={16} className="text-[#EE7A36]" />
                    <span className="text-gray-700">{country.language}</span>
                  </div>
                )}
              </div>

              {country.visaTypes && country.visaTypes.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {country.visaTypes.slice(0, 3).map((type, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleEdit(country)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-all"
                >
                  <Edit2 size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(country._id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-semibold hover:bg-red-100 transition-all"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {countries.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <Globe size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No countries added yet</p>
          <p className="text-gray-500 text-sm">
            Click "Add Country" to get started
          </p>
        </div>
      )}
    </div>
  );
}
