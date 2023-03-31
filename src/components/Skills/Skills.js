import React from "react";
import SkillCard from "./SkillCard";
import { SKILLS } from "../../constants/skillsData";

export default function Skills() {
  return (
    <div className="flex flex-col justify-center gap-2 lg:w-[50%] w-[90%] items-center h-[100%] pt-14">
      {SKILLS.map((skill) => {
        return <SkillCard skill={skill} />;
      })}
    </div>
  );
}
