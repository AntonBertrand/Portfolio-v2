import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "WebExpenses",
      title: "Software Engineer",
      duration: "January 2026 - Present",
      description: [
        "Implemented solutions using Java, Spring Boot, and React, with a focus on performance and scalability.",
        "Writing and maintaining automation tests using JUnit.",
        "Directly working with product owners to understand and propose business solutions.",
      ],
    },
    {
      company: "Atos (NS&I)",
      title: "Dev Ops Engineer",
      duration: "February 2023 - January 2026",
      description: [
        "Implemented features in Scala/Play and Java, containerised as Docker images, and managed Jenkins pipelines to promote through SIT, UAT, and Production.",
        "Wrote ScalaTest, Twirl view and JUnit tests to ensure most issues were caught before they reached the test team.",
        "Developed and executed SQL scripts to investigate and resolve customer support tickets.",
        "Monitored services using ElasticSearch and AWS CloudWatch, set up alerts, and leveraged dashboards to support incident response.",
      ],
    },
    {
      company: "Atos (NEST)",
      title: "Software Engineer",
      duration: "March 2022 - February 2023",
      description: [
        "Developed user stories with Pega and Java on the backend and React on the frontend.",
        "Configured various Pega components, including properties, data transforms, flow actions, and case types.",
        "Set up REST services and connectors based on project requirements to improve system integrations.",
        "Carried out unit testing to validate implemented rules and ensure system reliability.",
      ],
    },
    {
      company: "Atos (Internal)",
      title: "Software Engineer",
      duration: "November 2021 - March 2022",
      description: [
        "Contributed to an internal Atos project to improve and streamline the onboarding process for new hires.",
        "Delivering presentations to senior members that secured backing for the proposed solution.",
        "Worked with Java on the backend to create APIs for generating and managing PDF documents.",
        "Developed the frontend using React, building reusable components.",
      ],
    },
    {
      company: "KPMG",
      title: "Data Processor",
      duration: "October 2021 to November 2021",
      description: [
        "Conducted thorough quality assurance checks to ensure data accuracy and integrity.",
        "Performed testing in a pre-deployment test environment.",
        "Identifying issues and providing actionable feedback to management.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center pt-32 pb-8 md:pt-16 sm:pt-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto "
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <p className="text-lg font-bold text-gray-500">Work History</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Experience
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full md:w-3/4"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
              className="mb-8 p-6 bg-white/1 rounded-lg relative 
                       hover:translate-x-3 transition-transform duration-300 cursor-pointer
                       border border-gray-700"
            >
              <h3 className="text-2xl text-white mb-1">{exp.company}</h3>
              <h4 className="text-lg text-blue-500 mb-2">{exp.title}</h4>
              <span className="text-gray-500 text-sm block mb-4">
                {exp.duration}
              </span>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
