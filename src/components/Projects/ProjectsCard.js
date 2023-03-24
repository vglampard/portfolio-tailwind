import React from "react";
import image from "./projectImage.png";
import { AnimatePresence } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import { motion } from "framer-motion";

export default function ProjectsCard({ project }) {
  return (
   
    <motion.div
    variants={fadeIn("down", "tween", 0.2, 1)}
    >
      <div className="bg-pink-300 m-5 p-4 rounded-lg drop-shadow-lg ">
        <img src={image} alt="project" />
        <h1>{project.description}</h1>
      </div>
    </motion.div>

  );
}