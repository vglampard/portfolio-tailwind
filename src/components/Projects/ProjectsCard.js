import React from "react";
import password from "./projectImages/password.webp";
import amigo from "./projectImages/amigo.webp";
import nostrami from "./projectImages/nostrami.webp";
import payback from "./projectImages/payback.webp";
import weather from "./projectImages/weather.webp";
import otta from "./projectImages/otta.webp";
import pokepedia from "./projectImages/pokepedia.webp"

// Project card component containing a project image, a short description that drops down with a fade-in effect when the user clicks the project title, and a button that opens the top-level modal and passes the project data to it
export default function ProjectsCard({ project, MODAL_STATES }) {
  const [showMore, setShowMore] = React.useState(false);

  // Object used to conditionally render the correct project image
  const IMAGES = {
    password,
    amigo,
    nostrami,
    payback,
    weather,
    otta,
    pokepedia,
  };

  // Function to open modal AND close the 'see more' short description on the project card
  function handleOpenModal() {
    MODAL_STATES.setProject(project);

    MODAL_STATES.setShowModal(true);
    setShowMore(false);
  }

  return (
    <div>
      <div className="group relative bg-white m-2 w-7/8 rounded drop-shadow-lg transition duration-250 hover:scale-110">
        <img src={IMAGES[project.image]} alt="project" className="w-full object-cover rounded-t" />
        <div className="absolute top-1/3 bg-amber-100 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-between flex-col w-full py-3">
    
        <h1
            className="text-sm font-bold leading-tight inline-block mr-4 py-2 pl-2 text-slate-900 uppercase"
          >{project.title}{' > > >'}
          </h1>
           <div
              className="flex items-center justify-center pr-2 w-full "
            >
              <div className=" justify-center px-2 gap-2 items-center ">
                {/* Project description */}
                <p className=" text-sm font-thin leading-tight inline-block  text-slate-900 ease-linear">
                  {project.subtitle}
                </p>
                <div className="flex justify-end">
                  <p
                    className="text-slate-900 uppercase text-sm hover:cursor-pointer  hover:translate-y-0.5  outline-none justify-center focus:outline-none flex items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-yellow-100 my-1 px-3"
                    onClick={handleOpenModal}
                  >
                    Read more . . .
                  </p>
                </div>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
}
