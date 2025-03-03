import React from "react";
import Project from "../Project";

const Projects = () => {
  const projects = [
    {
      title: "ShopCart",
      description:
        "ShopCart is a full stack web application which allows users to create an account, view different headphones and add them to their shopping cart. When satisfied with their shopping basket, users can proceed to checkout where they're asked for payment details and shipping information. Upon validation, an order is created and stored in the database. Users can view their order history by navigating to their accounts profile page.",
      technologies: ["React", "Express", "NodeJS", "MongoDB", "TypeScript"],
      githubUrl: "https://github.com/AntonBertrand/Ecommerce",
      demoUrl: "https://ecommerce-frontend-blpu.onrender.com/",
      imageUrl: "src/assets/images/placeholder.png",
    },
    {
      title: "VanquisBooking",
      description:
        "This is a simplified Booking.com clone I've named VanquisBooking. This is a full stack application I created to practice development using the MERN stack. Users can register and login to view properties filtered by destination, date range, visitors, and room quantity. Specific rooms can be booked at each property and will be unavailable to others for the dates booked for.",
      technologies: ["React", "Express", "NodeJS", "MongoDB"],
      githubUrl: "https://github.com/AntonBertrand/Booking-App",
      demoUrl: "https://booking-app-frontend-8uip.onrender.com/",
      imageUrl: "src/assets/images/placeholder.png",
    },
    {
      title: "MyDiary",
      description:
        "MyDiary is a web application which allows users to create diary entries which they can use to capture their thoughts, moods, memories and anything else they would like to document. This is a full stack application built using the MERN stack. Users are able to signup and login to their own private dashboard in which they can view all their diary entries or search for specific ones.",
      technologies: ["React", "Express", "NodeJS", "MongoDB"],
      githubUrl: "https://github.com/AntonBertrand/Diary-App",
      demoUrl: "https://diary-app-35k5.onrender.com/",
      imageUrl: "src/assets/images/placeholder.png",
    },
    {
      title: "WhatsOn",
      description:
        "WhatsOn is an Android application targeted towards Brunel University students who lived on Campus or in the nearby area. The application allows these students to view all the events available in the area, as well as the ability to create their own events for other users to see. This allows them to take advantages of all the facilities available to them and keep them updated on what events are soon to take place, giving them a great University experience.",
      technologies: ["Java", "Firebase", "Android Studio"],
      githubUrl: "https://github.com/AntonBertrand/CS3100CW",
      demoUrl: "https://www.youtube.com/watch?v=WcMdWl8wv2M",
      imageUrl: "src/assets/images/placeholder.png",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-8 md:pt-16 sm:pt-20 px-4 w-full gap-12">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-bold text-gray-500">Personal Projects</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
          Projects
        </h1>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 gap-12">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
