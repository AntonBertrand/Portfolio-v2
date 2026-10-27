import React from "react";
import { CgWebsite, CgServer } from "react-icons/cg";
import {
  LuInfinity,
  LuMapPin,
  LuGraduationCap,
  LuBriefcase,
} from "react-icons/lu";
import { motion } from "framer-motion";

const facts = [
  { icon: LuMapPin, label: "Based in", value: "Northwest London" },
  { icon: LuGraduationCap, label: "Education", value: "BSc Computer Science" },
  { icon: LuBriefcase, label: "Experience", value: "ATOS, KPMG" },
];

const focusAreas = [
  {
    icon: CgWebsite,
    title: "Frontend",
    text: "HTML, CSS, JavaScript/TypeScript and React to craft user-friendly, visually appealing interfaces.",
  },
  {
    icon: CgServer,
    title: "Backend",
    text: "Node.js, Java and databases such as SQL and MongoDB to build scalable, efficient server-side solutions.",
  },
  {
    icon: LuInfinity,
    title: "DevOps",
    text: "OpenShift, Jenkins, AWS and Azure to automate deployments and keep workflows resilient.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-32 pb-8 md:pt-16 sm:pt-20 px-4"
    >
      <div className="flex flex-col items-center gap-12 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="rounded-full border border-gray-700 px-4 py-1 text-sm font-medium text-gray-400">
            Full-Stack Engineer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent pb-1">
            About Me
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-3 flex flex-col gap-6 rounded-2xl border border-gray-800 bg-white/[0.02] p-8"
          >
            <p className="text-lg leading-relaxed text-gray-400">
              I am a full-stack engineer based in Northwest London with a
              bachelor's in computer science. Since graduating, working at ATOS
              and KPMG has let me learn new skills and sharpen existing ones
              through hands-on experience with new tools and techniques.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              I'm eager to work with other development platforms and more than
              capable of picking up new languages and techniques in a timely
              manner.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-auto pt-6 border-t border-gray-800">
              {facts.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <Icon className="mt-1 text-xl text-blue-500 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      {label}
                    </p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Focus areas */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {focusAreas.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="group flex flex-1 items-start gap-4 rounded-2xl border border-gray-800 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.04]"
              >
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
