import React from "react";
import ProjectsCard from "./ProjectsCard";
import { PROJECTS } from "../../constants/projectsData";
import Modal from "../Modal/Modal";

export default function Projects() {
  const [showModal, setShowModal] = React.useState(false);
  const MODAL_STATES = { showModal, setShowModal };
  console.log("MS:", MODAL_STATES);
  return (
    <div className="flex justify-center items-center h-[100%]">
      <Modal MODAL_STATES={MODAL_STATES} />
      <div className="w-[90%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 space-x-{10}">
        {PROJECTS.map((project) => (
          <p className="text-sm">
            <ProjectsCard project={project} MODAL_STATES={MODAL_STATES} />
          </p>
        ))}
      </div>
    </div>
  );
}
