import React from "react";
import SkillCard from "./SkillCard.js";
import { SKILLS } from "../../constants/skillsData";

export default function Skills() {
  return (
    <div className="flex flex-col  justify-center pt-14 items-center w-[80vw] lg:w-[45vw] md:w-[60vw] pb-[80px] ">
      <p className="m-3 text-xl"> 
        My{" "}
        <span className="font-bold text-2xl bg-slate-200 px-1">
          full stack software
        </span>{" "}
        training and experience covers a predominantly{" "}
        <span className="font-bold text-2xl bg-slate-200 px-1">PERN</span> stack in{" "}
        <span className="font-bold text-2xl bg-slate-200 px-1">JavaScript</span>.{" "}
      </p>
      <p className="m-3 text-sm text-justify">
        I've worked with the following tools and principles, and continue to consolidate and expand.
      </p>
      <div className=" justify-center grid grid-cols-1  w-full md:grid-cols-2 lg:grid-cols-2 gap-4  items-center ">
        {SKILLS.map((skill) => {
          return <SkillCard skill={skill} />;
        })}
      </div>
    </div>
  );
}
