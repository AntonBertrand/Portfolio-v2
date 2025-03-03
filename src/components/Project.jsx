import React from "react";

const Project = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col border border-gray-700 rounded-2xl flex-col bg-white/1 hover:bg-white/2 transition-all duration-300 gap-2 overflow-hidden">
      <div className="w-full overflow-hidden relative group">
        <img
          src={imageUrl}
          className="h-[300px] w-full object-cover rounded-t-2xl transition-all duration-300 group-hover:opacity-50"
          alt={title}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 md:bg-transparent md:opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
          >
            GitHub
          </a>
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
      <div className="flex flex-col gap-3 p-4">
        <p className="text-2xl font-bold">{title}</p>
        <p>{description}</p>
        <div className="flex flex-row gap-4 mt-3 text-xs md:text-base">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-lg border border-purple-600 p-2 text-purple-600"
            >
              <p>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
