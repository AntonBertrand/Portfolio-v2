import React, { useState, useRef } from "react";
import Project from "../Project";
import { motion } from "framer-motion";
import portfolio1 from "../../assets/images/portfolio1.png";
import portfolio2 from "../../assets/images/portfolio2.png";
import portfolio3 from "../../assets/images/portfolio3.png";
import portfolio4 from "../../assets/images/portfolio4.png";
import portfolio5 from "../../assets/images/portfolio5.png";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "QR Sharp",
      description:
        "QR Sharp is a SaaS (Software as a Service) product that allows users to sign up and create fully customizable QR Codes that will link to a URL of their choice. The user can then view detailed analytics to track who has scanned their QR Codes, which includes demographic analysis for Country, Browser, and Operating System of the visitors. The QR Codes generated are stored in the user's dashboard, where they can be downloaded/edited/deleted.",
      technologies: [
        "React",
        "Express",
        "NodeJS",
        "MongoDB",
        "TypeScript",
        "Firebase",
      ],
      githubUrl: "https://github.com/AntonBertrand/QRSharp",
      demoUrl: "https://www.qrsharp.com/",
      imageUrl: portfolio5,
    },
    {
      title: "ShopCart",
      description:
        "ShopCart is a full stack web application which allows users to create an account, view different headphones and add them to their shopping cart. When satisfied with their shopping basket, users can proceed to checkout where they're asked for payment details and shipping information. Upon validation, an order is created and stored in the database. Users can view their order history by navigating to their accounts profile page.",
      technologies: ["React", "Express", "NodeJS", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/AntonBertrand/Ecommerce",
      demoUrl: "https://ecommerce-frontend-blpu.onrender.com/",
      imageUrl: portfolio1,
    },
    {
      title: "VanquisBooking",
      description:
        "This is a simplified Booking.com clone I've named VanquisBooking. This is a full stack application I created to practice development using the MERN stack. Users can register and login to view properties filtered by destination, date range, visitors, and room quantity. Specific rooms can be booked at each property and will be unavailable to others for the dates booked for.",
      technologies: ["React", "Express", "NodeJS", "MongoDB"],
      githubUrl: "https://github.com/AntonBertrand/Booking-App",
      demoUrl: "https://booking-app-frontend-8uip.onrender.com/",
      imageUrl: portfolio2,
    },
    {
      title: "MyDiary",
      description:
        "MyDiary is a web application which allows users to create diary entries which they can use to capture their thoughts, moods, memories and anything else they would like to document. This is a full stack application built using the MERN stack. Users are able to signup and login to their own private dashboard in which they can view all their diary entries or search for specific ones.",
      technologies: ["React", "Express", "NodeJS", "MongoDB"],
      githubUrl: "https://github.com/AntonBertrand/Diary-App",
      demoUrl: "https://diary-app-35k5.onrender.com/",
      imageUrl: portfolio3,
    },
    {
      title: "WhatsOn",
      description:
        "WhatsOn is an Android application targeted towards Brunel University students who lived on Campus or in the nearby area. The application allows these students to view all the events available in the area, as well as the ability to create their own events for other users to see. This allows them to take advantages of all the facilities available to them and keep them updated on what events are soon to take place, giving them a great University experience.",
      technologies: ["Java", "Firebase", "Android Studio"],
      githubUrl: "https://github.com/AntonBertrand/CS3100CW",
      demoUrl: "https://www.youtube.com/watch?v=WcMdWl8wv2M",
      imageUrl: portfolio4,
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to the top of the projects section
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center pt-32 pb-8 md:pt-16 sm:pt-20 px-4 w-full gap-12"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-2"
      >
        <p className="text-lg font-bold text-gray-500">Personal Projects</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
          Projects
        </h1>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 gap-12 auto-rows-fr"
      >
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
            className="flex"
          >
            <Project {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white transition-colors duration-300`}
          >
            Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } transition-colors duration-300`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-700 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white transition-colors duration-300`}
          >
            Next
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
