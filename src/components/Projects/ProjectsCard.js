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

  function handleSeeMore() {
    setShowMore(!showMore);
    MODAL_STATES.setProject(project);
  }

  function handleOpenModal() {
    MODAL_STATES.setShowModal(true);
    setShowMore(false);
  }

  return (
    <div>
     
        <div className="bg-slate-50 py-2 m-2 rounded drop-shadow-lg">
          <img src={IMAGES[project.image]} alt="project" className="rounded-t"  />
          <div className="flex justify-between  flex-col">
            <h1
              onClick={handleSeeMore}
              className="text-sm  hover:cursor-pointer leading-tight inline-block mr-4 py-2 pl-2 transition ease-in-out duration-300 hover:-translate-y-0.5   text-slate-900 uppercase"
            > See {" "}
              {project.title}{" "}
              <span className="animate-pulse text-xl ">
                {showMore ? " <<<" : " >>>"}
              </span>
            </h1>
            {showMore && (
              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{
                  type: "tween",
                  duration: "0.5",
                }}
                className="flex items-center justify-center pr-2 "
              >
                <div className=" justify-center px-2 gap-2 items-center ">
                <p className=" text-sm font-thin leading-tight inline-block  text-slate-900 ease-linear">
                  {project.subtitle}
                </p>
                <div className="w-full flex justify-end">
                <p
                  className=" text-slate-900 uppercase text-sm   hover:cursor-pointer transition ease-in-out duration-300 hover:scale-140 hover:-translate-y-0.5  outline-none justify-center focus:outline-none flex items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-yellow-100 my-1 px-3 w-[120px]"
                 
                  onClick={handleOpenModal}
                >
                Read more...
                </p>
                </div>
                 </div>
              </motion.div>
            )}
          </div>
        </div>
     
    </div>
  );
}
