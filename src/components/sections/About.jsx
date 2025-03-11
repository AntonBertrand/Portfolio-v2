import React from "react";
import { CgWebsite, CgServer } from "react-icons/cg";
import { LuInfinity } from "react-icons/lu";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-32 pb-8 md:pt-16 sm:pt-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center text-gray-400 text-lg md:text-xl"
        >
          <p>
            I am a full-stack engineer based in Northwest London with a
            bachelor's in computer science. Since graduating, through working at
            ATOS and KPMG I've been able to learn new skills and enhance my
            existing skills through hands-on experience with new tools and
            techniques. I am very eager to work with other development platforms
            and are more than capable enough of picking up new languages and
            techniques in a timely manner.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 mt-8"
        >
          <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-2 bg-white/1 hover:bg-white/2 transition-all duration-300 ">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300">
              <CgWebsite className="text-3xl text-white" />
            </div>
            <p className="text-lg font-bold">Frontend</p>
            <p className="text-gray-400">
              My proficiency in HTML, CSS, JavaScript/TypeScript, and React
              enables me to craft user-friendly and visually appealing
              interfaces.
            </p>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-2 bg-white/1 hover:bg-white/2 transition-all duration-300 ">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300">
              <CgServer className="text-3xl text-white" />
            </div>
            <p className="text-lg font-bold">Backend</p>
            <p className="text-gray-400">
              My expertise in Node.js, Java, and databases such as SQL and
              MongoDB empower me to build scalable and efficient server-side
              solutions.
            </p>
          </div>
          <div className="border border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-2 bg-white/1 hover:bg-white/2 transition-all duration-300 ">
            <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300">
              <LuInfinity className="text-3xl text-white" />
            </div>
            <p className="text-lg font-bold">DevOps</p>
            <p className="text-gray-400">
              My experience with OpenShift, Jenkins, AWS, and Azure enables me
              to automate deployments, and ensure scalable, resilient DevOps
              workflows.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
