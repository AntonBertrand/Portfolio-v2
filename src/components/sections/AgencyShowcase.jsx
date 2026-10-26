import React from "react";
import { motion } from "framer-motion";
import uaConstruction from "../../assets/images/agency/ua-construction.png";
import berra from "../../assets/images/agency/berra.png";
import foundersHut from "../../assets/images/agency/foundershut.png";
import strivor from "../../assets/images/agency/strivor.png";
import bespokeDashboard from "../../assets/images/agency/bespoke-dashboard.png";
import spaceono from "../../assets/images/agency/spaceono.png";

const AGENCY_URL = "https://www.vanquish-digital.com";

const projects = [
  {
    title: "UA-Construction",
    image: uaConstruction,
    shortDescription: "Construction company website",
    slug: "ua-construction",
  },
  {
    title: "BERRA",
    image: berra,
    shortDescription: "Drylining & partitioning company site",
    slug: "berra",
  },
  {
    title: "Founders Hut",
    image: foundersHut,
    shortDescription: "Blueprint for building online businesses",
    slug: "foundershut",
  },
  {
    title: "Strivor Sports Academy",
    image: strivor,
    shortDescription: "Sports coaching academy website",
    slug: "strivor",
  },
  {
    title: "Bespoke Dashboard",
    image: bespokeDashboard,
    shortDescription: "Customizable personal tracking dashboard",
    slug: "bespoke-dashboard",
  },
  {
    title: "Spaceono",
    image: spaceono,
    shortDescription: "Hospitality cleaning and turnover website",
    slug: "spaceono",
  },
];

const AgencyShowcase = () => {
  return (
    <section
      id="agency"
      className="relative py-16 sm:py-24 overflow-hidden bg-black px-4"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(var(--color-primary-rgb),0.07)_0%,transparent_50%)] pointer-events-none"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-transparent bg-clip-text bg-linear-to-r from-white via-white/90 to-white/70">
            Vanquish Digital
          </h2>
          <div
            className="h-px w-24 rounded-full bg-linear-to-r from-transparent via-white/45 to-transparent mx-auto"
            aria-hidden
          />
          <p className="text-gray-400 max-w-2xl">
            Outside of my 9-5, I run Vanquish Digital, a freelance web design
            agency where I build fast, modern websites for small businesses
            using TypeScript and Next.js. Coding is more than a job for me. It
            is something I love, and this is some of the work I have delivered
            for clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={`${AGENCY_URL}/projects/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              className="group relative text-left rounded-lg overflow-hidden bg-zinc-900 border border-white/10 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="font-medium text-white group-hover:text-white">
                  {project.title}
                </span>
                <span className="text-white/60 group-hover:text-white transition-colors">
                  →
                </span>
              </div>

              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-white border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center"
                aria-hidden
              >
                <h3 className="font-bold text-black uppercase text-xl tracking-tight">
                  {project.title}
                </h3>
                <p className="text-black text-base leading-relaxed max-w-md mt-2">
                  {project.shortDescription}
                </p>
                <span className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-full text-base mt-4 cursor-pointer hover:bg-gray-800 transition-colors duration-200">
                  View Project
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={AGENCY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors"
          >
            Visit Vanquish Digital
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AgencyShowcase;
