import React from "react";
import image from "../../images/password.png";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

export default function ProjectsCard({ project, MODAL_STATES }) {
  console.log("proj", project);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-slate-50  m-2 rounded drop-shadow-lg">
          <img src={project.image} alt="project" />
          <div className="flex justify-between">
            <h1>{project.title}</h1>
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
