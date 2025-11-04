import React from "react";
import CV from '../assets/CV.pdf'

const Cv = () => {
  return (
    <section id="cv" className="max-w-6xl mx-auto px-2 py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Curriculum Vitae</h2>
      <p className="text-gray-700 mb-4">
        Download my latest CV to learn more about my education, research, and experience.
      </p>
      <a
        href={CV}
        download
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        Download CV
      </a>
    </section>
  );
};

export default Cv;
