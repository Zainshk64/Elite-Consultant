// components/admin/ApplyBoard.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus, Edit2, Trash2, Eye, Save, X, MapPin, DollarSign,
  Clock, GraduationCap, BookOpen, Award, Globe, FileText
} from "lucide-react";
import toast from "react-hot-toast";

// Reusable Input Components
const InputField = ({ label, name, value, onChange, placeholder, required, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="block text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20 transition-all"
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, placeholder, rows = 3, required }) => (
  <div className="space-y-1.5">
    <label className="block text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE7A36] focus:ring-2 focus:ring-[#EE7A36]/20 resize-none transition-all custom-scrollbar"
    />
  </div>
);

const SectionHeader = ({ icon: Icon, title, color = "orange" }) => {
  const colorClasses = {
    orange: "bg-gradient-to-r from-orange-500 to-orange-600",
    blue: "bg-gradient-to-r from-blue-500 to-blue-600",
    green: "bg-gradient-to-r from-green-500 to-green-600",
    purple: "bg-gradient-to-r from-purple-500 to-purple-600"
  };

  return (
    <div className={`${colorClasses[color]} text-white px-4 py-3 rounded-t-xl flex items-center gap-2 sticky top-0 z-10 shadow-sm`}>
      <Icon size={20} />
      <h4 className="font-bold text-base">{title}</h4>
    </div>
  );
};

export default function ApplyBoard() {
  const [universities, setUniversities] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [selectedUni, setSelectedUni] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeDetailTab, setActiveDetailTab] = useState("overview");

  const [formData, setFormData] = useState({
    // Basic Info
    uniImage: "",
    uniName: "",
    degreeTitle: "",
    description: "",
    tags: "",
    location: "",
    campus: "",
    tuitionFirstYear: "",
    applicationFee: "",
    duration: "",
    
    // Details
    thumbnail: "",
    overview: "",
    features: "",
    programs: "",
    
    // Admission Requirements
    minEducation: "",
    minGPA: "",
    ieltsScore: "",
    toeflScore: "",
    pteScore: "",
    duolingoScore: "",
    applicationProcessTime: "",
    
    // Cost & Duration
    costOfLiving: "",
    avgGrossTuition: "",
    programLevel: "",
    programLength: "",
    ancillaryFees: "",
    booksSuppliesFees: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({
      uniImage: "", uniName: "", degreeTitle: "", description: "", tags: "",
      location: "", campus: "", tuitionFirstYear: "", applicationFee: "", duration: "",
      thumbnail: "", overview: "", features: "", programs: "",
      minEducation: "", minGPA: "", ieltsScore: "", toeflScore: "", pteScore: "", duolingoScore: "",
      applicationProcessTime: "", costOfLiving: "", avgGrossTuition: "",
      programLevel: "", programLength: "", ancillaryFees: "", booksSuppliesFees: ""
    });
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      id: editingId || Date.now(),
      createdAt: editingId ? universities.find(u => u.id === editingId)?.createdAt : new Date().toISOString()
    };

    if (editingId) {
      setUniversities(universities.map(u => u.id === editingId ? data : u));
      toast.success("✅ University updated successfully!");
    } else {
      setUniversities([...universities, data]);
      toast.success("✅ University added successfully!");
    }
    resetForm();
  };

  const handleEdit = (uni) => {
    setFormData({ ...uni, tags: uni.tags.join(', ') });
    setEditingId(uni.id);
    setIsFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    setUniversities(universities.filter(u => u.id !== id));
    toast.success("🗑️ University deleted!");
  };

  const handleView = (uni) => {
    setSelectedUni(uni);
    setIsDetailOpen(true);
    setActiveDetailTab("overview");
  };

  return (
    <>
      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #EE7A36, #ff8c42);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #d96b2c, #ee7a36);
        }
      `}</style>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#EE7A36] to-orange-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              Apply Board
            </h2>
            <p className="text-gray-600 mt-1 ml-13">Manage university programs and applications</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold shadow-lg shadow-orange-200 hover:shadow-xl transition-all"
          >
            <Plus size={20} /> Add University
          </motion.button>
        </div>

        {/* Form Modal */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              {/* Sticky Header */}
              <div className="sticky top-0 z-20 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white px-6 py-4 flex justify-between items-center shadow-lg">
                <div>
                  <h3 className="text-2xl font-bold">
                    {editingId ? "✏️ Edit University" : "➕ Add New University"}
                  </h3>
                  <p className="text-orange-100 text-sm mt-0.5">Fill in the details below</p>
                </div>
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Form Content */}
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  
                  {/* Section 1: Basic Information */}
                  <div className="border border-orange-200 rounded-xl overflow-hidden">
                    <SectionHeader icon={FileText} title="Basic Information" color="orange" />
                    <div className="p-5 bg-orange-50/50 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField
                          label="University Name"
                          name="uniName"
                          value={formData.uniName}
                          onChange={handleChange}
                          placeholder="e.g., Harvard University"
                          required
                        />
                        <InputField
                          label="Degree Title"
                          name="degreeTitle"
                          value={formData.degreeTitle}
                          onChange={handleChange}
                          placeholder="e.g., Computer Science"
                          required
                        />
                        <InputField
                          label="Location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g., Cambridge, MA"
                        />
                        <InputField
                          label="Campus"
                          name="campus"
                          value={formData.campus}
                          onChange={handleChange}
                          placeholder="e.g., Main Campus"
                        />
                        <InputField
                          label="University Image URL"
                          name="uniImage"
                          value={formData.uniImage}
                          onChange={handleChange}
                          placeholder="https://example.com/image.jpg"
                          required
                        />
                        <InputField
                          label="Thumbnail URL"
                          name="thumbnail"
                          value={formData.thumbnail}
                          onChange={handleChange}
                          placeholder="https://example.com/thumb.jpg"
                        />
                        <InputField
                          label="Tags (comma-separated)"
                          name="tags"
                          value={formData.tags}
                          onChange={handleChange}
                          placeholder="top, STEM, scholarship"
                        />
                        <InputField
                          label="Duration"
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          placeholder="e.g., 4 Years"
                        />
                      </div>
                      <TextAreaField
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Brief description of the program..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Section 2: Program Details */}
                  <div className="border border-blue-200 rounded-xl overflow-hidden">
                    <SectionHeader icon={BookOpen} title="Program Details" color="blue" />
                    <div className="p-5 bg-blue-50/50 space-y-4">
                      <TextAreaField
                        label="Overview"
                        name="overview"
                        value={formData.overview}
                        onChange={handleChange}
                        placeholder="Detailed program overview..."
                        rows={4}
                      />
                      <TextAreaField
                        label="Key Features"
                        name="features"
                        value={formData.features}
                        onChange={handleChange}
                        placeholder="List key features and benefits..."
                        rows={3}
                      />
                      <TextAreaField
                        label="Available Programs"
                        name="programs"
                        value={formData.programs}
                        onChange={handleChange}
                        placeholder="List of programs offered..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Section 3: Admission Requirements */}
                  <div className="border border-green-200 rounded-xl overflow-hidden">
                    <SectionHeader icon={Award} title="Admission Requirements" color="green" />
                    <div className="p-5 bg-green-50/50 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField
                          label="Minimum Education"
                          name="minEducation"
                          value={formData.minEducation}
                          onChange={handleChange}
                          placeholder="e.g., High School Diploma"
                        />
                        <InputField
                          label="Minimum GPA"
                          name="minGPA"
                          value={formData.minGPA}
                          onChange={handleChange}
                          placeholder="e.g., 3.0"
                        />
                        <InputField
                          label="IELTS Score"
                          name="ieltsScore"
                          value={formData.ieltsScore}
                          onChange={handleChange}
                          placeholder="e.g., 6.5"
                        />
                        <InputField
                          label="TOEFL Score"
                          name="toeflScore"
                          value={formData.toeflScore}
                          onChange={handleChange}
                          placeholder="e.g., 90"
                        />
                        <InputField
                          label="PTE Score"
                          name="pteScore"
                          value={formData.pteScore}
                          onChange={handleChange}
                          placeholder="e.g., 58"
                        />
                        <InputField
                          label="Duolingo Score"
                          name="duolingoScore"
                          value={formData.duolingoScore}
                          onChange={handleChange}
                          placeholder="e.g., 105"
                        />
                        <InputField
                          label="Application Process Time"
                          name="applicationProcessTime"
                          value={formData.applicationProcessTime}
                          onChange={handleChange}
                          placeholder="e.g., 4-6 weeks"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Costs & Fees */}
                  <div className="border border-purple-200 rounded-xl overflow-hidden">
                    <SectionHeader icon={DollarSign} title="Costs & Fees" color="purple" />
                    <div className="p-5 bg-purple-50/50 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField
                          label="Tuition (First Year)"
                          name="tuitionFirstYear"
                          value={formData.tuitionFirstYear}
                          onChange={handleChange}
                          placeholder="e.g., $50,000"
                        />
                        <InputField
                          label="Application Fee"
                          name="applicationFee"
                          value={formData.applicationFee}
                          onChange={handleChange}
                          placeholder="e.g., $100"
                        />
                        <InputField
                          label="Average Gross Tuition"
                          name="avgGrossTuition"
                          value={formData.avgGrossTuition}
                          onChange={handleChange}
                          placeholder="e.g., $45,000/year"
                        />
                        <InputField
                          label="Cost of Living"
                          name="costOfLiving"
                          value={formData.costOfLiving}
                          onChange={handleChange}
                          placeholder="e.g., $15,000/year"
                        />
                        <InputField
                          label="Ancillary Fees"
                          name="ancillaryFees"
                          value={formData.ancillaryFees}
                          onChange={handleChange}
                          placeholder="e.g., $2,000"
                        />
                        <InputField
                          label="Books & Supplies"
                          name="booksSuppliesFees"
                          value={formData.booksSuppliesFees}
                          onChange={handleChange}
                          placeholder="e.g., $1,500"
                        />
                        <InputField
                          label="Program Level"
                          name="programLevel"
                          value={formData.programLevel}
                          onChange={handleChange}
                          placeholder="e.g., Undergraduate"
                        />
                        <InputField
                          label="Program Length"
                          name="programLength"
                          value={formData.programLength}
                          onChange={handleChange}
                          placeholder="e.g., 4 years"
                        />
                      </div>
                    </div>
                  </div>

                </form>
              </div>

              {/* Sticky Footer */}
              <div className="sticky bottom-0 z-20 bg-white border-t border-gray-200 px-6 py-4 flex gap-3 shadow-lg">
                <motion.button
                  type="submit"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Save size={20} /> {editingId ? "Update University" : "Add University"}
                </motion.button>
                <motion.button
                  type="button"
                  onClick={resetForm}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* University Grid */}
        {!isFormOpen && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {universities.map((uni) => (
                <motion.div
                  key={uni.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-200 overflow-hidden group transition-all duration-300"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={uni.uniImage || "https://via.placeholder.com/400x300?text=University"}
                      alt={uni.uniName}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{uni.uniName}</h3>
                      <p className="text-sm text-gray-600 line-clamp-1">{uni.degreeTitle}</p>
                    </div>

                    {uni.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} className="text-[#EE7A36]" />
                        <span>{uni.location}</span>
                      </div>
                    )}

                    {/* Tags */}
                    {uni.tags && uni.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {uni.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-orange-100 text-[#EE7A36] text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {uni.tags.length > 3 && (
                          <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            +{uni.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Info Grid */}
                    <div className="space-y-2 text-sm pt-2 border-t border-gray-100">
                      {uni.tuitionFirstYear && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 flex items-center gap-1">
                            <DollarSign size={14} /> Tuition
                          </span>
                          <span className="font-semibold text-gray-800">{uni.tuitionFirstYear}</span>
                        </div>
                      )}
                      {uni.applicationFee && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 flex items-center gap-1">
                            <DollarSign size={14} /> App Fee
                          </span>
                          <span className="font-semibold text-gray-800">{uni.applicationFee}</span>
                        </div>
                      )}
                      {uni.duration && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 flex items-center gap-1">
                            <Clock size={14} /> Duration
                          </span>
                          <span className="font-semibold text-gray-800">{uni.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleView(uni)}
                        className="flex-1 py-2.5 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all"
                      >
                        <Eye size={16} /> View
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEdit(uni)}
                        className="flex-1 py-2.5 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 hover:bg-blue-100 transition-all"
                      >
                        <Edit2 size={16} /> Edit
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDelete(uni.id)}
                        className="px-3 py-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all"
                      >
                        <Trash2 size={16} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {universities.length === 0 && !isFormOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-gray-300"
          >
            <GraduationCap size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Universities Yet</h3>
            <p className="text-gray-600 mb-6">Get started by adding your first university program</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white rounded-xl font-semibold shadow-lg"
            >
              <Plus size={20} /> Add First University
            </motion.button>
          </motion.div>
        )}

        {/* Detail View Modal */}
        <AnimatePresence>
          {isDetailOpen && selectedUni && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setIsDetailOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-[#EE7A36] to-orange-500 text-white p-6 flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-1">{selectedUni.uniName}</h2>
                    <p className="text-orange-100">{selectedUni.degreeTitle}</p>
                    {selectedUni.location && (
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <MapPin size={16} />
                        <span>{selectedUni.location}</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setIsDetailOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-lg transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 bg-gray-50 px-6">
                  <div className="flex gap-2 overflow-x-auto">
                    {["overview", "admission", "costs"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveDetailTab(tab)}
                        className={`px-4 py-3 font-semibold capitalize transition-all ${
                          activeDetailTab === tab
                            ? "text-[#EE7A36] border-b-2 border-[#EE7A36]"
                            : "text-gray-600 hover:text-gray-800"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)] custom-scrollbar">
                  {activeDetailTab === "overview" && (
                    <div className="space-y-4">
                      {selectedUni.overview && (
                        <div>
                          <h3 className="font-bold text-lg mb-2">Overview</h3>
                          <p className="text-gray-700 whitespace-pre-line">{selectedUni.overview}</p>
                        </div>
                      )}
                      {selectedUni.features && (
                        <div>
                          <h3 className="font-bold text-lg mb-2">Features</h3>
                          <p className="text-gray-700 whitespace-pre-line">{selectedUni.features}</p>
                        </div>
                      )}
                      {selectedUni.programs && (
                        <div>
                          <h3 className="font-bold text-lg mb-2">Programs</h3>
                          <p className="text-gray-700 whitespace-pre-line">{selectedUni.programs}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeDetailTab === "admission" && (
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg mb-3">Admission Requirements</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedUni.minEducation && (
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="text-sm text-gray-600">Min Education</div>
                            <div className="font-semibold">{selectedUni.minEducation}</div>
                          </div>
                        )}
                        {selectedUni.minGPA && (
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="text-sm text-gray-600">Min GPA</div>
                            <div className="font-semibold">{selectedUni.minGPA}</div>
                          </div>
                        )}
                        {selectedUni.ieltsScore && (
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="text-sm text-gray-600">IELTS</div>
                            <div className="font-semibold">{selectedUni.ieltsScore}</div>
                          </div>
                        )}
                        {selectedUni.toeflScore && (
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="text-sm text-gray-600">TOEFL</div>
                            <div className="font-semibold">{selectedUni.toeflScore}</div>
                          </div>
                        )}
                        {selectedUni.pteScore && (
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="text-sm text-gray-600">PTE</div>
                            <div className="font-semibold">{selectedUni.pteScore}</div>
                          </div>
                        )}
                        {selectedUni.duolingoScore && (
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="text-sm text-gray-600">Duolingo</div>
                            <div className="font-semibold">{selectedUni.duolingoScore}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {activeDetailTab === "costs" && (
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg mb-3">Costs & Fees</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedUni.tuitionFirstYear && (
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="text-sm text-gray-600">Tuition (1st Year)</div>
                            <div className="font-semibold">{selectedUni.tuitionFirstYear}</div>
                          </div>
                        )}
                        {selectedUni.applicationFee && (
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="text-sm text-gray-600">Application Fee</div>
                            <div className="font-semibold">{selectedUni.applicationFee}</div>
                          </div>
                        )}
                        {selectedUni.avgGrossTuition && (
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="text-sm text-gray-600">Avg Gross Tuition</div>
                            <div className="font-semibold">{selectedUni.avgGrossTuition}</div>
                          </div>
                        )}
                        {selectedUni.costOfLiving && (
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="text-sm text-gray-600">Cost of Living</div>
                            <div className="font-semibold">{selectedUni.costOfLiving}</div>
                          </div>
                        )}
                        {selectedUni.ancillaryFees && (
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="text-sm text-gray-600">Ancillary Fees</div>
                            <div className="font-semibold">{selectedUni.ancillaryFees}</div>
                          </div>
                        )}
                        {selectedUni.booksSuppliesFees && (
                          <div className="p-3 bg-orange-50 rounded-lg">
                            <div className="text-sm text-gray-600">Books & Supplies</div>
                            <div className="font-semibold">{selectedUni.booksSuppliesFees}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}