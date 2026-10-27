import React from "react";
import { CgWebsite, CgServer } from "react-icons/cg";
import { LuInfinity } from "react-icons/lu";
import { motion } from "framer-motion";
import javascriptLogo from "../../assets/javascript.svg";
import typescriptLogo from "../../assets/typescript.svg";
import reactLogo from "../../assets/react.svg";
import tailwindLogo from "../../assets/tailwind.svg";
import javaLogo from "../../assets/java.svg";
import nodeLogo from "../../assets/node.svg";
import expressLogo from "../../assets/express.svg";
import mongoLogo from "../../assets/mongo.svg";
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css.svg";
import pegaLogo from "../../assets/pega.svg";
import sqlLogo from "../../assets/sql.svg";
import openshiftLogo from "../../assets/openshift.svg";
import awsLogo from "../../assets/aws.svg";
import azureLogo from "../../assets/azure.svg";
import jenkinsLogo from "../../assets/jenkins.svg";

const categories = [
  {
    title: "Frontend",
    description: "Building responsive, accessible interfaces.",
    icon: CgWebsite,
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React", logo: reactLogo },
      { name: "Tailwind", logo: tailwindLogo },
    ],
  },
  {
    title: "Backend",
    description: "Designing APIs and data layers that scale.",
    icon: CgServer,
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Pega", logo: pegaLogo },
      { name: "NodeJS", logo: nodeLogo },
      { name: "ExpressJS", logo: expressLogo, invert: true },
      { name: "MongoDB", logo: mongoLogo },
      { name: "SQL", logo: sqlLogo },
    ],
  },
  {
    title: "DevOps",
    description: "Automating builds, deployments and cloud infrastructure.",
    icon: LuInfinity,
    skills: [
      { name: "OpenShift", logo: openshiftLogo },
      { name: "Jenkins", logo: jenkinsLogo },
      { name: "AWS", logo: awsLogo },
      { name: "Azure", logo: azureLogo },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
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
            What I Know
          </span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent pb-1">
            Technical Skills
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {categories.map(({ title, description, icon: Icon, skills }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * (index + 1), duration: 0.6 }}
              className="group flex flex-col gap-6 rounded-2xl border border-gray-800 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2 pt-6 border-t border-gray-800">
                {skills.map(({ name, logo, invert }) => (
                  <li
                    key={name}
                    className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {logo ? (
                      <img
                        src={logo}
                        alt=""
                        className={`w-4 h-4 rounded-sm ${invert ? "brightness-0 invert" : ""}`}
                      />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
