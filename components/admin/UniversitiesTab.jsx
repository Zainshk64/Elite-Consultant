"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Edit2,
  Trash2,
  GraduationCap,
  MapPin,
  DollarSign,
  Calendar,
  X,
  Save,
  Globe,
  Camera,
} from "lucide-react";
import { universityAPI, countryAPI } from "@/services/adminApi";
import { toast } from "react-hot-toast";

export default function UniversitiesTab() {
  const [universities, setUniversities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    logo: "",
    logoPreview: "", // <-- NEW
    city: "",
    address: "",
    description: "",
    established: "",
    ranking: "",
    courses: "",
    tuitionFees: "",
    admissionRequirements: "",
    intakeMonths: "",
    scholarships: "",
    campusType: "",
    internationalStudents: "",
    website: "",
  });

  useEffect(() => {
    fetchUniversities();
    fetchCountries();
  }, []);

  const fetchUniversities = async () => {
    try {
      const response = await universityAPI.getAll();
      setUniversities(response.data || []);
    } catch (error) {
      toast(error.message || "Failed to fetch universities", "error");
    }
  };

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

  const resetForm = () => {
    setFormData({
      name: "",
      country: "",
      logo: "",
      logoPreview: "", // show it in preview
      city: "",
      address: "",
      description: "",
      established: "",
      ranking: "",
      courses: "",
      tuitionFees: "",
      admissionRequirements: "",
      intakeMonths: "",
      scholarships: "",
      campusType: "",
      internationalStudents: "",
      website: "",
    });
    setEditingId(null);
    setIsFormOpen(false);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const form = new FormData();

    // Required
    form.append("name", formData.name);
    form.append("country", formData.country);
    form.append("description", formData.description);

    // Location
    form.append("city", formData.city || "");
    form.append("address", formData.address || "");

    // Optional fields
    form.append("established", formData.established || "");
    form.append("ranking", formData.ranking || "");
    form.append("tuitionFees", formData.tuitionFees || "");
    form.append("admissionRequirements", formData.admissionRequirements || "");
    form.append("scholarships", formData.scholarships || "");
    form.append("campusType", formData.campusType || "");
    form.append("internationalStudents", formData.internationalStudents || "");
    form.append("website", formData.website || "");

    // Logo (file or URL)
    if (formData.logo instanceof File) {
      form.append("logo", formData.logo);
    } else if (formData.logo) {
      form.append("logo", formData.logo);
    }

    // Arrays
    const courses = formData.courses
      .split(",")
      .map(c => c.trim())
      .filter(Boolean);
    courses.forEach(c => form.append("courses[]", c));

    const intakeMonths = formData.intakeMonths
      .split(",")
      .map(m => m.trim())
      .filter(Boolean);
    intakeMonths.forEach(m => form.append("intakeMonths[]", m));

    // API Call
    if (editingId) {
      await universityAPI.update(editingId, form, true);
      toast.success("University updated successfully!");
    } else {
      await universityAPI.create(form, true);
      toast.success("University created successfully!");
    }

    fetchUniversities();
    resetForm();
  } catch (error) {
    console.error("Submit error:", error);
    toast.error(error.message || "Operation failed");
  } finally {
    setIsLoading(false);
  }
};

  const handleEdit = (university) => {
    setFormData({
      name: university.name,
      country: university.country?._id || university.country,
      logo: university.logo,
      logoPreview: university.logo, // show it in preview
      city: university.location?.city || "",
      address: university.location?.address || "",
      description: university.description,
      established: university.established || "",
      ranking: university.ranking || "",
      courses: university.courses?.join(", ") || "",
      tuitionFees: university.tuitionFees || "",
      admissionRequirements: university.admissionRequirements || "",
      intakeMonths: university.intakeMonths?.join(", ") || "",
      scholarships: university.scholarships || "",
      campusType: university.campusType || "",
      internationalStudents: university.internationalStudents || "",
      website: university.website || "",
    });
    setEditingId(university._id);
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this university?")) return;

    try {
      await universityAPI.delete(id);
      toast("University deleted successfully!", "success");
      fetchUniversities();
    } catch (error) {
      toast(error.message || "Delete failed", "error");
    }
  };

  //   const toast = (message, type) => {
  //     const toast = document.createElement('div')
  //     toast.className = `fixed top-4 right-4 px-6 py-4 rounded-xl shadow-lg z-50 ${
  //       type === 'success' ? 'bg-green-500' : 'bg-red-500'
  //     } text-white font-semibold animate-fade-in`
  //     toast.textContent = message
  //     document.body.appendChild(toast)
  //     setTimeout(() => toast.remove(), 3000)
  //   }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Universities Management
          </h2>
          <p className="text-gray-600 mt-1">
            Manage universities and educational institutions
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          <Plus size={20} />
          Add University
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
                {editingId ? "Edit University" : "Add New University"}
              </h3>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University Logo *
                </label>

                <div className="relative w-32 mb-6 h-32 mx-auto">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const preview = URL.createObjectURL(file);
                      setFormData((prev) => ({
                        ...prev,
                        logo: file,
                        logoPreview: preview,
                      }));
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    required={!editingId && !formData.logoPreview}
                  />

                  <div className="w-full h-full rounded-full border-4 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden relative group">
                    {formData.logoPreview ? (
                      <img
                        src={formData.logoPreview}
                        alt="Logo preview"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                          <Camera size={20} className="text-gray-500" />
                        </div>
                        <p className="text-xs text-gray-500">Upload Logo</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center">
                      <Camera size={24} className="text-white" />
                    </div>
                  </div>
                </div>

                {formData.logoPreview && (
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Click to change
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  University Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Harvard University"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country._id} value={country._id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Cambridge"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Established
                </label>
                <input
                  name="established"
                  value={formData.established}
                  onChange={handleChange}
                  placeholder="1636"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ranking
                </label>
                <input
                  name="ranking"
                  value={formData.ranking}
                  onChange={handleChange}
                  placeholder="#1 Global"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tuition Fees
                </label>
                <input
                  name="tuitionFees"
                  value={formData.tuitionFees}
                  onChange={handleChange}
                  placeholder="$50,000/year"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campus Type
                </label>
                <input
                  name="campusType"
                  value={formData.campusType}
                  onChange={handleChange}
                  placeholder="Urban"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  International Students
                </label>
                <input
                  name="internationalStudents"
                  value={formData.internationalStudents}
                  onChange={handleChange}
                  placeholder="25%"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://www.harvard.edu"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Massachusetts Hall, Cambridge, MA"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Courses (comma-separated)
                </label>
                <input
                  name="courses"
                  value={formData.courses}
                  onChange={handleChange}
                  placeholder="Business, Engineering, Medicine, Law"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intake Months (comma-separated)
                </label>
                <input
                  name="intakeMonths"
                  value={formData.intakeMonths}
                  onChange={handleChange}
                  placeholder="September, January, May"
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
                  placeholder="Brief description about the university..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admission Requirements
                </label>
                <textarea
                  name="admissionRequirements"
                  value={formData.admissionRequirements}
                  onChange={handleChange}
                  placeholder="Details about admission requirements..."
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Scholarships
                </label>
                <textarea
                  name="scholarships"
                  value={formData.scholarships}
                  onChange={handleChange}
                  placeholder="Available scholarship information..."
                  rows="2"
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
                  ? "Update University"
                  : "Add University"}
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
        {universities.map((university, index) => (
          <motion.div
            key={university._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="h-32 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center p-4">
              <img
                src={university.logo}
                alt={university.name}
                className="max-h-20 w-auto object-contain"
              />
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {university.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} className="text-[#EE7A36]" />
                  <span>{university.country?.name || "N/A"}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {university.description}
              </p>

              <div className="space-y-2 mb-4">
                {university.ranking && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Ranking:</span>
                    <span className="font-semibold text-[#EE7A36]">
                      {university.ranking}
                    </span>
                  </div>
                )}
                {university.tuitionFees && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Tuition:</span>
                    <span className="font-semibold text-gray-800">
                      {university.tuitionFees}
                    </span>
                  </div>
                )}
                {university.established && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Est:</span>
                    <span className="font-semibold text-gray-800">
                      {university.established}
                    </span>
                  </div>
                )}
              </div>

              {university.courses && university.courses.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {university.courses.slice(0, 3).map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleEdit(university)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-all"
                >
                  <Edit2 size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(university._id)}
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

      {universities.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
          <GraduationCap size={48} className="text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">No universities added yet</p>
          <p className="text-gray-500 text-sm">
            Click "Add University" to get started
          </p>
        </div>
      )}
    </div>
  );
}
