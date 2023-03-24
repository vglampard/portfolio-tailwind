import React from 'react'
import ProjectsCard from './ProjectsCard';
import { PROJECTS } from '../../constants/projectsData';

export default function Projects() {

    return (
      <div className=" grid grid-cols-2 p-4 space-x-{10} w-3/4">
        {PROJECTS.map((project) => (
          <p className="text-sm">
           <ProjectsCard project={project}/>
          </p>
        ))}
      </div>
    );
  }
