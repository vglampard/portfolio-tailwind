import React from "react";
import { motion } from "framer-motion";
import password from "./projectImages/password.png";
import amigo from "./projectImages/amigo.png";
import nostrami from "./projectImages/nostrami.png";
import payback from "./projectImages/payback.png";
import weather from "./projectImages/weather.png";
export default function ProjectsCard({ project, MODAL_STATES }) {
  const [showMore, setShowMore] = React.useState(false);
  const IMAGES = {
    password,
    amigo,
    nostrami,
    payback,
    weather,
  };

  function handleSeeMore(){
    setShowMore(!showMore); 
    MODAL_STATES.setProject(project)
  }

  function handleOpenModal(){
    MODAL_STATES.setShowModal(true);
    setShowMore(false)
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
            src={IMAGES[project.image]}
            alt="project"
          />
          <div className="flex justify-between">
            <h1
              onClick={handleSeeMore}
              className="text-sm font-thin leading-tight inline-block mr-4 py-2 pl-2 text-justify text-slate-900 uppercase"
            >
              {project.title}
              {showMore ? " <<<" : " >>>"}
            </h1>
            {showMore && (
              <div className="flex flex-col items-end pr-1">
                <p className="pt-2 text-xs font-thin leading-tight inline-block  text-slate-900 ">{project.subtitle}</p>
                <button
                  className="bg-slate-300 text-slate-900 active:bg-slate-50 uppercase text-sm rounded shadow hover:shadow-xl w-10 outline-none justify-center focus:outline-none flex items-center ease-linear transition-all duration-150 my-1"
                  type="button"
                  onClick={handleOpenModal}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
