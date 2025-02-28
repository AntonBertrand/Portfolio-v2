import React, { useState } from "react";

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
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Profile Details */}

          <div className="flex flex-col  px-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
              Anton Bertrand
            </h1>
            <h2 className="text-white text-3xl md:text-4xl">
              Full Stack Developer
            </h2>

            {/* Contact Details */}

            <div className="w-full max-w-md space-y-4 p-6 rounded-lg bg-[#1a1b26] border border-gray-700 mt-8">
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

          <div>
            <img
              src="src\assets\images\placeholder.png"
              alt="Anton"
              className="w-[500px] rounded-4xl hover:cursor-pointer hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
