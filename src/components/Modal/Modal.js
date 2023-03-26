import React from "react";
import password from "../Projects/projectGifs/password.gif";
import amigo from "../Projects/projectGifs/amigo.gif";
import nostrami from "../Projects/projectGifs/nostrami.gif";
import payback from "../Projects/projectGifs/payback.gif";
import weather from "../Projects/projectGifs/weather.gif";
export default function Modal({MODAL_STATES}) {
  const project = MODAL_STATES.project
  const GIFS = {
    password,
    amigo,
    nostrami,
    payback,
    weather,
  };
  return (
    <>
      
      {MODAL_STATES.showModal ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 h-[100%] mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex flex-col">
                  <h3   className="text-3xl font-thin leading-tight inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-900">
                   {project.title}
                  </h3>
                  {project.stack}
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => MODAL_STATES.setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 pt-2 flex-auto">
                  <p className="text-sm font-thin leading-tight inline-block mr-4 py-1 text-justify text-slate-900">
                    {project.description}     </p>
                    <img src={GIFS[project.image]} alt="gif demo" className="py-5 p-auto lg:w-[60%]"/>
                    <p className="text-sm font-thin leading-tight inline-block mr-4 py-2 text-justify text-slate-900">
                    {project.writeup}     </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end py-2 px-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="background-transparent font-thin uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => MODAL_STATES.setShowModal(false)}
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}