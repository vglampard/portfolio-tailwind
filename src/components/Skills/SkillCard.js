import React, { useState } from "react";
import sql from "../../icons/sql-server.png";

export default function SkillCard(area) {
  const [seeMore, setSeeMore] = useState(false);

  function handleSeeMore() {
    setSeeMore(!seeMore);
  }
  return (
    <div className="bg-slate-200 flex-col w-[90%] p-2 rounded drop-shadow-lg flex text-justify">
      <div className="flex">
        <h1
          onClick={handleSeeMore}
          className="text-base w-[100%] uppercase border-b  leading-tight inline-block  py-2 pl-1  text-slate-900 "
        >
          {area.skill.area}
          {seeMore ? " <<<" : " >>>"}
        </h1>
        <div className="flex flex-row w-full align-center justify-end">
          <img src={sql} alt="sql" className="h-7" />
          <img src={sql} alt="sql" className="h-7" />
          <img src={sql} alt="sql" className="h-7" />
        </div>
      </div>
      {seeMore && <p className="px-2 text-sm">{area.skill.subskills}</p>}
    </div>
  );
}
