import React from "react";

//  

const Research = () => {
  const papers = [
    {
      title: "Unveiling Ambivalence in Reviews: Using Sentence-BERT and K-NN for Airline Recommendations",
      journal: "Technical Journal, UET Taxila",
      link: "https://tj.uettaxila.edu.pk/index.php/technical-journal/article/view/2314",
    },
    {
      title: "An ANN Based Intelligent System for Measuring Customer Loyalty",
      journal: " KIET Journal of Computing and Information Sciences ",
      link: "https://kjcisjournal.kiet.edu.pk/index.php/kjcis/article/view/250",
    },
    {
      title: "Personality Prediction Of The Users Based On Their Tweets By Machine Learning Techniques",
      journal: "Journal of Computing & Biomedical Informatics",
      link: "https://jcbi.org/index.php/Main/article/view/796",
    },
    {
      title: "A DEEP LEARNING APPROACH FOR SECURING IOT SYSTEMS WITH CNN-BASED PREDICTION OF WORST-CASE RESPONSE TIME",
      journal: "Spectrum of Engineering Sciences",
      link: "https://thesesjournal.com/index.php/1/article/view/599",
    },
    {
      title: "Optimized Deep Convolutional Neural Network for Robust Occluded Facial Expression Recognition",
      journal: "The Asian Bulletin of Big Data Management ",
      link: "https://abbdm.com/index.php/Journal/article/view/365",
    },
    {
      title: "Predicting Customer Loyalty from E-Commerce Reviews Using Aspect-Based Sentiment Analysis and ANN",
      journal: "The Asian Bulletin of Big Data Management ",
      link: "https://abbdm.com/index.php/Journal/article/view/363",
    },
    {
      title: "Phishing Website URL Detection Using a Hybrid Machine Learning Approach",
      journal: "Journal of Computing & Biomedical Informatics",
      link: "https://jcbi.org/index.php/Main/article/view/989",
    },
    {
      title: "ONTOLOGY-BASED SENTIMENT ANALYSIS FOR REAL-TIME PRODUCT REPUTATION MODELING",
      journal: "Spectrum of Engineering Sciences",
      link: "https://thesesjournal.com/index.php/1/article/view/633",
    },
    {
      title: "LncRNAs Disease: A text mining Approach to Find the role of lncRNA in Aging",
      journal: " Journal of Computing & Biomedical Informatics",
      link: "https://jcbi.org/index.php/Main/article/view/1000",
    },
    {
      title: "Transforming Heart Disease Detection with BERT: Novel Architectures and Fine-Tuning Techniques",
      journal: " International Conference on Frontiers of Information Technology (FIT 2024) ",
      link: "https://ieeexplore.ieee.org/abstract/document/10838424",
    },
    {
      title: "Cutting-Edge Novel Method for Credit Card Fraud Detection: Using Data Science Techniques and Machine Learning Algorithms",
      journal: "  International Journal Of Intelligent Systems And Applications In Engineering (IJISAE) ",
      link: "https://ijisae.org/index.php/IJISAE/article/view/7248",
    },
    {
      title: "An Enhanced Predictive Model for Heart Disease Diagnoses Using Machine Learning Algorithms",
      journal: "Technical Journal, UET Taxila",
      link: "https://tj.uettaxila.edu.pk/index.php/technical-journal/article/view/1828",
    },
    {
      title: "An Enhanced Predictive Model for Heart Disease Diagnoses Using Machine Learning Algorithms",
      journal: "Technical Journal, UET Taxila",
      link: "https://tj.uettaxila.edu.pk/index.php/technical-journal/article/view/1828",
    },
    {
      title: "Unveiling the Ambivalence from the Airline Reviews: The Airline Recommendation System using CNNs",
      journal: " International Conference on Computing & Emerging Technologies (ICCET) - 2023 Conference",
      link: "https://link.springer.com/book/10.1007/978-3-031-77620-5",
    }
  ];

  return (
    <section
      id="research"
      className="max-w-6xl mx-auto px-2 py-16 bg-gray-50"
    >
      {/* Heading Animation */}
      <h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-indigo-600 text-center"
      >
        Research Papers
      </h2>

      {/* Paper Cards with Stagger Animation */}
      <ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
      >
        {papers.map((paper, i) => (
          <li
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              {paper.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{paper.journal}</p>
            <a
              href={paper.link}
              className="text-indigo-600 font-medium hover:underline"
            >
              View Paper →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Research;
