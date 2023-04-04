import password from "../Projects/projectGifs/password.gif";
import amigo from "../Projects/projectGifs/amigo.gif";
import nostrami from "../Projects/projectGifs/nostrami.gif";
import otta from "../Projects/projectGifs/otta.gif";
import payback from "../Projects/projectGifs/payback.gif";
import weather from "../Projects/projectGifs/weather.gif";
import MarkdownText from "./ModalText";

export default function Modal({ MODAL_STATES }) {
  const project = MODAL_STATES.project;
  const GIFS = {
    password,
    amigo,
    nostrami,
    payback,
    weather,
    otta,
  };

  return (
    <>
      {MODAL_STATES.showModal ? (
        <>
         
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 h-[100%]  mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none  lg:w-[70vw]">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-thin leading-tight inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-900">
                      {project.title}
                    </h3>
                    {project.stack}
                  </div>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-0.5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => MODAL_STATES.setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
              
                <div className="relative p-6 pt-2  flex justify-center w-full ">
                  <div className="max-w-[469px] "> 
                  <p className="text-sm font-thin italic leading-tight inline-block mr-4 py-1 text-justify text-slate-900">
                    {project.description}{" "}
                  </p>
                  <div className="flex justify-center w-full">
                    <img
                      src={GIFS[project.image]}
                      alt="gif demo"
                      className="py-5 p-auto w-full"
                    />
                  </div>
                  <div className="">
                    <MarkdownText text={project.writeup} className="w-full" />
                  </div>
                  </div>
                </div>
                <div className="w-full flex leading-tight p-4 items-center justify-center  text-base uppercase whitespace-pre">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <p>| Live |</p>
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <p> GitHub |</p>
                  </a>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end py-2 px-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="background-transparent transition ease-in-out duration-300 hover:scale-140 hover:-translate-y-0.5  font-thin uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 "
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
