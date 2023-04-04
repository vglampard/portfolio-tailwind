import React from "react";
import ProjectsCard from "./ProjectsCard";
import { PROJECTS } from "../../constants/projectsData";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";

//Component that pulls project data from file and dynamically renders one card for every project, alongside a single top level modal component to which different project data is sent depending on which card has been 'opened'.

export default function Projects() {
  const [showModal, setShowModal] = React.useState(false);
  const [project, setProject] = React.useState({});

  // State handed down to project card components so they can hand up the information needed to display in the modal
  const MODAL_STATES = { showModal, setShowModal, project, setProject };

  return (
    // fade-in effect for project tiles
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center h-[100%] lg:pt-14 md:pt-14 pt-6">
        <Modal MODAL_STATES={MODAL_STATES} />

        {/* Div into which the different project tiles are rendered */}
        <div className="w-[90%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 space-x-{10} gap-5 pb-20">
          {PROJECTS.map((project) => (
            <p className="text-sm">
              <ProjectsCard project={project} MODAL_STATES={MODAL_STATES} />
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
