import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 outline w-[100%] outline-1 bg-slate-100 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-thin leading-tight inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-900"
              href="/"
            > Victoria Lampard  <br></br>
            <span className="text-xs">Full Stack Dev</span></a>
              
           
            <button
              className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="projects"
                  className="px-3 py-2 flex items-center text-xs uppercase font-thin leading-snug text-slate-900 hover:opacity-75"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="skills"
                  className="px-3 py-2 flex items-center text-xs uppercase font-thin leading-snug text-slate-900hover:opacity-75"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="aboutme"
                  className="px-3 py-2 flex items-center text-xs uppercase font-thin leading-snug text-slate-900 hover:opacity-75"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className="px-3 py-2 flex items-center text-xs uppercase font-thin leading-snug text-slate-900 hover:opacity-75"
                >
                  Contact
                </Link>
              </li>{" "}
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
