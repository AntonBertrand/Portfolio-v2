import React from "react";
// Import logos (you'll need to add these to your project)
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import javascriptLogo from "../assets/javascript.svg";
import tailwindLogo from "../assets/tailwind.svg";
// New imports
import androidLogo from "../assets/android.svg";
import expressLogo from "../assets/express.svg";
import firebaseLogo from "../assets/firebase.svg";
import javaLogo from "../assets/java.svg";
import mongoLogo from "../assets/mongo.svg";
import nodeLogo from "../assets/node.svg";
// Add TypeScript import
import typescriptLogo from "../assets/typescript.svg";
import nextjsLogo from "../assets/nextjs.svg";
import clerkLogo from "../assets/clerk.svg";
import sentryLogo from "../assets/sentry.svg";
import stripeLogo from "../assets/stripe.svg";

// Add this object at the top of your component or in a separate config file
const techLogos = {
  React: reactLogo,
  Vite: viteLogo,
  JavaScript: javascriptLogo,
  Tailwind: tailwindLogo,
  "Android Studio": androidLogo,
  Express: expressLogo,
  Firebase: firebaseLogo,
  Java: javaLogo,
  MongoDB: mongoLogo,
  NodeJS: nodeLogo,
  TypeScript: typescriptLogo,
  NextJs: nextjsLogo,
  Clerk: clerkLogo,
  Sentry: sentryLogo,
  Stripe: stripeLogo,
  // Add more mappings as needed
};

const Project = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col border border-gray-700 rounded-2xl bg-white/1 hover:bg-white/2 transition-all duration-300 gap-2 overflow-hidden h-full">
      <div className="w-full overflow-hidden relative group">
        <img
          src={imageUrl}
          className="h-[300px] w-full object-cover rounded-t-2xl transition-all duration-300 group-hover:opacity-50"
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 md:bg-transparent md:opacity-0 group-hover:opacity-100 transition-all duration-300">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
            >
              GitHub
            </a>
          )}
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
          >
            Live Demo
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 flex-grow">
        <div className="flex flex-col gap-3 pb-4">
          <p className="text-2xl font-bold">{title}</p>
          <p>{description}</p>
        </div>
        <div className="flex flex-row gap-4 mt-auto text-xs md:text-base overflow-x-auto pb-2 hide-scrollbar">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-full bg-[#1a1a1a] px-4 py-1.5 text-white border border-gray-700 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-200 cursor-pointer flex-shrink-0"
            >
              {techLogos[tech] && (
                <img
                  src={techLogos[tech]}
                  alt=""
                  className={`w-4 h-4 ${
                    tech === "Express" ? "brightness-0 invert" : ""
                  }`}
                />
              )}
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
