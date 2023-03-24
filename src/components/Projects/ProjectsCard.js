import React from "react";
import image from "./projectImage.png";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

export default function ProjectsCard({ project }) {
  return (
   <div >
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>
<div className="bg-slate-50 m-5 p-4 rounded drop-shadow-lg">
        <img src={image} alt="project" />
        <h1>{project.description}</h1>
      </div>
    </motion.div>
    
      </div>

  );
}