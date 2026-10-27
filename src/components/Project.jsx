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
import astroLogo from "../assets/astro.svg";
import postgresqlLogo from "../assets/postgresql.svg";

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
  Astro: astroLogo,
  PostgreSQL: postgresqlLogo,
  // Add more mappings as needed
};

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const Project = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imageUrl,
  date,
}) => {
  const isVideo = demoUrl && demoUrl.includes("youtube.com");

  return (
    <article className="group flex flex-col w-full h-full rounded-2xl border border-gray-800 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-blue-500/10">
      {/* Preview */}
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} - ${isVideo ? "watch demo" : "live demo"}`}
        className="relative block aspect-[16/10] overflow-hidden bg-[#111]"
      >
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {date && (
          <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-medium text-gray-200 border border-white/10">
            {date}
          </span>
        )}
      </a>

      {/* Content */}
      <div className="flex flex-col flex-grow gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-400 line-clamp-4">
            {description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="flex items-center gap-1.5 rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-gray-300"
            >
              {techLogos[tech] && (
                <img
                  src={techLogos[tech]}
                  alt=""
                  className={`w-3.5 h-3.5 ${
                    tech === "Express" ? "brightness-0 invert" : ""
                  }`}
                />
              )}
              {tech}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            {isVideo ? "Watch Demo" : "Live Demo"}
            <ArrowIcon />
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              <GithubIcon />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Project;
