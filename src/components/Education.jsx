import React from "react";



const Education = () => {
  const degrees = [
    {
      degree: "MS (Computer Science)",
      institution: " Comsats University of Islambad, Sahiwal Campus ",
      year: "2020-2022",
      details: "Information and Communication Technologies (ICTs) ",
    },
    {
      degree: "BS (Computer Science) ",
      institution: "The Superior College of Lahore",
      year: "2014-2018",
      details: "Information and Communication Technologies (ICTs) ",
    },
    {
      degree: "B.ED (LEADERSHIP AND MANAGEMENT)",
      institution: "Allama Iqbal Open Univerity of Islamabad",
      year: "2019-2021",
      details: "Education",
    },
  ];

  return (
    <section
      id="education"
      className="max-w-5xl mx-auto px-2 py-16 text-center md:text-left"
    >
      {/* Section Title Animation */}
      <h2
        className="text-3xl font-bold mb-10 text-indigo-600 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </h2>

      {/* Education Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {degrees.map((deg, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {deg.degree}
            </h3>
            <p className="text-gray-600">
              {deg.institution} • {deg.year}
            </p>
            <p className="text-gray-500 mt-2">{deg.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
