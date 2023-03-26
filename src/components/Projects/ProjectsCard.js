import React from "react";
import { motion } from "framer-motion";
import password from "./projectImages/password.png"
import amigo from "./projectImages/amigo.png"
import nostrami from "./projectImages/nostrami.png"
import payback from "./projectImages/payback.png"
import weather from "./projectImages/weather.png"
export default function ProjectsCard({ project, MODAL_STATES }) {

  const IMAGES = {
    password, amigo, nostrami, payback, weather
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-slate-50  m-2 rounded drop-shadow-lg">
          <img 
          // src={`./projectImages/${project.image}`}
          src={IMAGES[project.image]} alt="project" />
          <div className="flex justify-between">
            <h1>{}</h1>
            <button
              className="bg-slate-300 text-slate-900 m-3 active:bg-slate-50 uppercase text-sm rounded shadow hover:shadow-xl w-10 outline-none justify-center focus:outline-none flex items-center ease-linear transition-all duration-150"
              type="button"
              onClick={() => MODAL_STATES.setShowModal(true)}
            >
              +
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
