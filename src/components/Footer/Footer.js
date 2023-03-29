import React from "react";

export default function Footer() {
  return (
    <footer
      class="bg-slate-100
             border-t-1
             fixed
             inset-x-0
             bottom-0
             "
    >
      <div class="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        {/* <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Victoria Lampard.</a>
    </span> */}
        <ul class="flex flex-wrap items-center justify-end mt-3 text-sm font-thin uppercase text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://github.com/vglampard"
              target="_blank"
              rel="noreferrer"
              class="mr-4 hover:underline md:mr-6 "
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vglampard"
              target="_blank"
              rel="noreferrer"
              class="mr-4 hover:underline md:mr-6 "
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
