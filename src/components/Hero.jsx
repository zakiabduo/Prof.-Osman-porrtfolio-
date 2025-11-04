import React from "react";
import profile_image from '../assets/profile_image.jpg'
// import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="text-center py-20 bg-linear-to-b from-indigo-50 to-white px-2"
    >
      {/* Profile Image */}
      <img
       src={profile_image}
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-lg border-4 border-white"
      />

      {/* Name */}
      <h2
        className="text-3xl md:text-4xl font-bold mt-6 text-gray-900"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Muhammad Usman Javeed 
      </h2>

      {/* Title */}
      <p
        className="text-lg md:text-xl text-indigo-600 mt-2 font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Lecturer | Researcher
      </p>

      {/* Description */}
      <p
        className="max-w-2xl mx-auto text-gray-700 mt-6 leading-relaxed text-base md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        I am a passionate educator and researcher currently serving as a Lecturer in the Department of Computer Science at the University of Okara, Pakistan, which is a public sector university. I hold an M.S. degree in Computer Science from COMSATS University Islamabad, Sahiwal Campus, with a strong academic and research background in Artificial Intelligence, Machine Learning, and Biomedical Image Processing. My research primarily focuses on developing intelligent systems and data-driven solutions for healthcare and cybersecurity applications. I have authored and co-authored several research papers published in reputed journals and conferences, covering topics such as heart disease prediction, phishing website detection, sentiment analysis, and brain tumor segmentation. With several years of teaching and research experience, I am committed to advancing innovation in AI and mentoring students to achieve academic and professional excellence.
      </p>

      {/* Subtle call-to-action button (optional) */}
      <a
        href="#contact"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition font-medium"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default Hero;
