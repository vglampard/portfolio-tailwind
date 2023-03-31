import React, { useState } from "react";
import sql from "../../icons/sql-server.png";
import jest from "../../icons/jest.webp";
import javascript from "../../icons/javascript.png";
import html from "../../icons/html.png";
import css from "../../icons/css-3.png";
import react from "../../icons/atoms.png";
import typescript from "../../icons/typescript.png";
import agile from "../../icons/agile.png";
import api from "../../icons/api.png";
import java from "../../icons/java.png";
import node from "../../icons/node.png";
import pair from "../../icons/pair.png";
import lead from "../../icons/lead.png";
import redux from "../../icons/redux.png";
import cypress from "../../icons/cypress.png";
import git from "../../icons/git.png";
import jira from "../../icons/jira.png";
import github from "../../icons/github.png";
import trello from "../../icons/trello.png";
import remote from "../../icons/remote.png";
import server from  "../../icons/server.png";
import aws from  "../../icons/aws.png";
import nostr from  "../../icons/nostr.png";
export default function SkillCard(area) {
  const [seeMore, setSeeMore] = useState(false);

  function handleSeeMore() {
    setSeeMore(!seeMore);
  }

  const ICON_REF = {
    frontEnd: { javascript, html, css, react, typescript },
    backEnd: { sql, api, node, aws, server },
    toolsAndTest: { jest, cypress, git, jira, github },
    principles: { agile, pair, lead, trello, remote},
    learning: { java, javascript, redux, aws, nostr },
  };

  console.log("ICONS:", area.skill.icons);
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
        <div className="flex flex-row gap-2 m-1 w-full align-center justify-end">
          {area.skill.icons.map((icon) => {
            return (
          
              <img src={ICON_REF[area.skill.ref][icon]} alt="#"  className="max-h-6" />
            );
          })}

          {/* <img src={ICON_REF.frontEnd[icon]} alt="sql" className="h-7" /> */}
        </div>
      </div>
      {seeMore && <p className="px-2 text-sm">{area.skill.subskills}</p>}
    </div>
  );
}
