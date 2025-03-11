import React, { useState } from "react";
import avatarImage from "/src/assets/images/FlatAvatar.png";

const Home = () => {
  const [copiedStates, setCopiedStates] = useState({
    phone: false,
    email: false,
    github: false,
  });

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedStates((prev) => ({ ...prev, [field]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [field]: false }));
    }, 1000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 pb-8 md:pt-16 sm:pt-20 px-4"
    >
      <div className="flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
          {/* Profile Details */}
          <div className="flex flex-col w-full md:w-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center md:text-left">
              Anton Bertrand
            </h1>
            <h2 className="text-white text-3xl md:text-4xl text-center md:text-left">
              Full Stack Developer
            </h2>

            {/* Contact Details */}
            <div className="w-full space-y-4 p-4 md:p-6 rounded-lg bg-[#1a1b26] border border-gray-700 mt-8">
              <div className="relative">
                <label className="text-gray-400 text-sm">Phone number</label>
                <div className="flex items-center justify-between bg-[#13141c] p-3 rounded-md hover:cursor-pointer hover:bg-[#13141cc9] transition-all duration-100">
                  <input
                    type="tel"
                    value="+44 7711289437"
                    readOnly
                    className="bg-transparent text-white w-full outline-none hover:cursor-pointer"
                  />
                  <button
                    onClick={() => handleCopy("+44 7711289437", "phone")}
                    className={`${
                      copiedStates.phone ? "text-purple-500" : "text-gray-400"
                    } hover:text-white transition-colors duration-200`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 hover:cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative">
                <label className="text-gray-400 text-sm">Email Address</label>
                <div className="flex items-center justify-between bg-[#13141c] p-3 rounded-md hover:cursor-pointer hover:bg-[#13141cc9] transition-all duration-100">
                  <input
                    type="text"
                    value="AntonBertrand@hotmail.com"
                    readOnly
                    className="bg-transparent text-white w-full outline-none hover:cursor-pointer "
                  />
                  <button
                    onClick={() =>
                      handleCopy("AntonBertrand@hotmail.com", "email")
                    }
                    className={`${
                      copiedStates.email ? "text-purple-500" : "text-gray-400"
                    } hover:text-white transition-colors duration-200`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 hover:cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="relative">
                <label className="text-gray-400 text-sm">GitHub</label>
                <div className="flex items-center justify-between bg-[#13141c] p-3 rounded-md hover:cursor-pointer hover:bg-[#13141cc9] transition-all duration-100">
                  <input
                    type="text"
                    value="AntonBertrand"
                    readOnly
                    className="bg-transparent text-white w-full outline-none hover:cursor-pointer"
                  />
                  <button
                    onClick={() => handleCopy("AntonBertrand", "github")}
                    className={`${
                      copiedStates.github ? "text-purple-500" : "text-gray-400"
                    } hover:text-white transition-colors duration-200`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 hover:cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative isolate">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur-[150px] w-[800px] h-[400px] md:h-[800px]" />
            </div>
            <img
              src={avatarImage}
              alt="Anton"
              className="w-[600px] rounded-4xl hover:cursor-pointer hover:scale-105 transition-all duration-300 relative"
            />
            <div className="absolute left-1/2 bottom-8 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-24 md:right-8 flex gap-6">
              <a
                href="https://www.linkedin.com/in/anton-bertrand/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1b26] p-3 rounded-full hover:bg-[#13141cc9] transition-all duration-200"
              >
                <svg
                  className="w-8 h-8 text-white hover:text-blue-500 transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/AntonBertrand"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1b26] p-3 rounded-full hover:bg-[#13141cc9] transition-all duration-200"
              >
                <svg
                  className="w-8 h-8 text-white hover:text-purple-500 transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
