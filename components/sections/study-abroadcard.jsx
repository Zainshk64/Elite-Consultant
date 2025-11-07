import { motion } from "framer-motion";
import React from "react";
import {DraggableCardDemo} from '../draggable-card'
const StudyAbroadcard = () => {
  return (
    <>
    <section className="py-16 md:pt-24 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-100 border border-orange-300 rounded-full mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-600 text-sm font-semibold tracking-wider">
              Study Abroad
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Your Global Education Journey <br /> Starts Here
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore world-class universities across 10 countries. From the
            bustling cities of Singapore to the scenic landscapes of New
            Zealand, find your perfect study destination.
          </p>
        </motion.div>
      </div>
    </section>
    <div className="mt-4" > 

        <DraggableCardDemo/>
    </div>
    </>

  );
};

export default StudyAbroadcard;
