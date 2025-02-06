import React from "react";
import { Link } from "react-router-dom";
import logo from "./lv.png";
//[text-shadow:_0_07px_0_rgb(254_243_199_/_100%)]
// drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
//drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
export default function Navbar({ fixed }) {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 outline outline-2 w-[100%] bg-yellow-100 mb-1 drop-shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex items-center gap-3 ">
              <a href="/"><img
                  src={logo}
                  alt="Victoria Lampard full stack developer"
                  className="h-[50px] drop-shadow-lg pb-1"
                />
              </a>
              <a className="text-lg  leading-4 inline-block mr-4 py-2  whitespace-nowrap uppercase text-slate-800 "
                href="/"
              >
              <p>
                    Victoria Lampard
                  <br></br>
                  <span className="text-base font-bold italic ">
                    Full Stack Dev
                  </span>
                </p>
              </a>
            </div>
          </div>
          <div>
            <ul className="flex text-base flex-col lg:flex-row list-none lg:ml-auto text-slate-800  uppercase">
              <li className="nav-item">
                <Link
                  to="contact"
                  className="px-3 py-2 flex items-center leading-snug "
                >
                  <p className="hover:bg-slate-800  hover:text-slate-50 px-1 px-1">
                    Contact
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
