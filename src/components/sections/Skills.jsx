import React from "react";
import { CgWebsite, CgServer } from "react-icons/cg";
import { LuInfinity } from "react-icons/lu";
import { HiOutlineBolt } from "react-icons/hi2";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center pt-32 pb-8 md:pt-16 sm:pt-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-8 w-full max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-2"
        >
          <p className="text-lg font-bold text-gray-500">What I Know</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Technical skills
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full md:w-3/4"
        >
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="border border-gray-700 rounded-lg p-8 flex flex-col text-center gap-2 bg-white/1 hover:bg-white/2 transition-all duration-300"
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300">
                <CgWebsite className="text-4xl text-white" />
              </div>
              <p className="text-xl font-bold">Frontend</p>
            </div>
            <ul className="flex flex-col items-center justify-center gap-3 mt-4 text-lg">
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> HTML
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> CSS
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> JavaScript
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> TypeScript
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> React
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> TailWind
              </li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="border border-gray-700 rounded-lg p-8 flex flex-col text-center gap-2 bg-white/1 hover:bg-white/2 transition-all duration-300"
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300">
                <CgServer className="text-4xl text-white" />
              </div>
              <p className="text-xl font-bold">Backend</p>
            </div>
            <ul className="flex flex-col items-center justify-center gap-3 mt-4 text-lg">
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> Java
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> Pega
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> NodeJS
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> ExpressJS
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> MongoDB
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> SQL
              </li>
            </ul>
          </motion.div>

          {/* DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="border border-gray-700 rounded-lg p-8 flex flex-col text-center gap-2 bg-white/1 hover:bg-white/2 transition-all duration-300"
          >
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-[50px] h-[50px] flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 transition-all duration-300">
                <LuInfinity className="text-4xl text-white" />
              </div>
              <p className="text-xl font-bold">DevOps</p>
            </div>
            <ul className="flex flex-col items-center justify-center gap-3 mt-4 text-lg">
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> OpenShift
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> Jenkins
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> AWS
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineBolt className="text-blue-500" /> Azure
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
