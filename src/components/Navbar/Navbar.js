import React from "react";
import { Link } from "react-router-dom";
import logo from "./lv.png";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 outline w-[100%] bg-slate-100 mb-1">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex items-center gap-3">
              <a href="/">
                {" "}
                <img
                  src={logo}
                  alt="Victoria Lampard full stack developer"
                  className="h-[50px]"
                />
              </a>
              <a
                className="text-lg font-thin leading-4 inline-block mr-4 py-2  whitespace-nowrap uppercase text-slate-900"
                href="/"
              >
                {" "}
                Victoria Lampard <br></br>
                <span className="text-sm">Full Stack Dev</span>
              </a>
            </div>

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
                  className="px-3 py-2 pt-4 md:pt-2 lg:pt-2 flex items-center text-xs uppercase font-thin leading-snug text-slate-900 hover:opacity-75"
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
              {/* <li className="nav-item">
                <Link
                  to="aboutme"
                  className="px-3 py-2 flex items-center text-xs uppercase font-thin leading-snug text-slate-900 hover:opacity-75"
                >
                  About Me
                </Link>
              </li> */}
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
