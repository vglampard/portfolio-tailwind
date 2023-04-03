import React from "react";
import github from "../../icons/github.png"
import linkedin from "../../icons/linkedin-logo.png"

export default function Footer() {
  return (
    <footer
      class="bg-slate-100
             border-t-1
             fixed
             inset-x-0
             bottom-0 outline-1 outline 
             "
    >
      <div class="w-full mx-auto container md:p-4 p-4 md:flex md:items-center md:justify-between ">
     
        <ul class="flex flex-wrap items-center justify-end  gap-3 text-sm font-thin uppercase text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/vglampard"
              target="_blank"
              rel="noreferrer"
              class="mr-4 hover:underline md:mr-6 flex items-center "
            >
              <img src={github} alt=" Victoria Lampard github link" className="w-5"/>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vglampard"
              target="_blank"
              rel="noreferrer"
              class="mr-4 hover:underline md:mr-6 flex items-center"
            >
              <img src={linkedin} alt=" Victoria Lampard LinkedIn link" className="w-5"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
