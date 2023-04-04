import React from "react";
import { Link } from "react-router-dom";
import logo from "./lv.png";
//[text-shadow:_0_07px_0_rgb(254_243_199_/_100%)] 

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 outline w-[100%] bg-sky-900 mb-1 drop-shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex items-center gap-3">
              <a href="/">
                {" "}
                <img
                  src={logo}
                  alt="Victoria Lampard full stack developer"
                  className="h-[50px] drop-shadow-[0_5px_5px_rgba(254_243_199_/_100%)]"
                 />
              </a>
              <a
                className="text-lg  leading-4 inline-block mr-4 py-2  whitespace-nowrap uppercase text-slate-200 "
                href="/" 
              >
                {" "}<p><span className = "drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Victoria Lampard </span><br></br>
                <span className="text-base font-thin italic font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" >Full Stack Dev</span></p>
              </a>
          
            </div>

            <button
              className="text-yellow-100 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none 
      
              transition ease-in-out duration-300 hover:scale-140 hover:-translate-y-0.5 
              drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
              "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? "-" : "+"}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex text-base flex-col lg:flex-row list-none lg:ml-auto text-slate-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <li className="nav-item">
                <Link
                  to="projects"
                  className="px-3 py-2 pt-4 md:pt-2 lg:pt-2 flex items-center text-xs uppercase  leading-snug   "
                >
                  <p className="hover:bg-yellow-100  hover:text-slate-800 px-1 ">Projects</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  className="px-3 py-2 flex items-center text-xs uppercase  leading-snug "
                >
                     <p className="hover:bg-yellow-100 hover:text-slate-800  px-1">Skills</p>
                </Link>
              </li>
         
              <li className="nav-item">
                <Link
                  to="contact"
                  className="px-3 py-2 flex items-center text-xs uppercase  leading-snug "
                >
                   <p className="hover:bg-yellow-100 px-1 hover:text-slate-800 ">Contact</p>
                </Link>
              </li>{" "}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
