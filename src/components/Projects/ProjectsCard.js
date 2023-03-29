import React from "react";
import { motion } from "framer-motion";
import password from "./projectImages/password.png";
import amigo from "./projectImages/amigo.png";
import nostrami from "./projectImages/nostrami.png";
import payback from "./projectImages/payback.png";
import weather from "./projectImages/weather.png";
import otta from "./projectImages/otta.png";
export default function ProjectsCard({ project, MODAL_STATES }) {
  const [showMore, setShowMore] = React.useState(false);
  const IMAGES = {
    password,
    amigo,
    nostrami,
    payback,
    weather,
    otta,
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
            src={IMAGES[project.image]}
            alt="project"
          />
          <div className="flex justify-between">
            <h1
              onClick={handleSeeMore}
              className="text-sm border-b  leading-tight inline-block mr-4 py-2 pl-2 text-justify text-slate-900 uppercase"
            >
              {project.title}
              {showMore ? " <<<" : " >>>"}
            </h1>
            {showMore && (
              <motion.div initial={{x: -300}}
              animate={{x: 0}} transition={{
                type: "tween",
                duration: "0.5",
              
            }} className="flex flex-col items-end pr-2 pb-1">
                <p className="pt-2 text-xs font-thin leading-tight inline-block  text-slate-900 ease-linear">{project.subtitle}</p>
                <button
                  className="bg-slate-300 text-slate-900 active:bg-slate-50 uppercase text-sm rounded shadow hover:shadow-xl w-10 outline-none justify-center focus:outline-none flex items-center ease-linear transition-all duration-150 my-1"
                  type="button"
                  onClick={handleOpenModal}
                >
                  +
                </button>
                </motion.div>

            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
