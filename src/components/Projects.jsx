import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "AI-based Disease Prediction System",
      description: "Developed a model that predicts diseases from patient data using ML algorithms.",
      tech: "React, TensorFlow, Flask",
    },
    {
      title: "Smart IoT Home Automation",
      description: "Built a React Native + IoT project for automated lighting and energy tracking.",
      tech: "IoT, Node.js, React Native",
    },
  ];

  return (
    <section id="projects" className="max-w-3xl mx-auto px-2 py-12">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">{proj.title}</h3>
            <p className="text-gray-600 mt-2">{proj.description}</p>
            <p className="text-sm text-gray-500 mt-1"><b>Tech:</b> {proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
