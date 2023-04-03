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
import server from "../../icons/server.png";
import aws from "../../icons/aws.png";
import nostr from "../../icons/nostr.png";

export function SkillCard(area) {
  const [seeMore, setSeeMore] = useState(false);

  function handleSeeMore() {
    setSeeMore(!seeMore);
  }

  // Object containng images to be conditoinally rendered as the code below maps over the skills array
  const ICON_REF = {
    frontEnd: { javascript, html, css, react, typescript },
    backEnd: { sql, api, node, aws, server },
    toolsAndTest: { jest, cypress, git, jira, github },
    principles: { agile, pair, lead, trello, remote },
    learning: { java, javascript, redux, aws, nostr },
  };

  return (
    <div className="bg-slate-100  flex-col p-1 rounded drop-shadow-lg flex justify-center items-center w-full">
      <div className="">
        <h1
          onClick={handleSeeMore}
          className="text-base  hover:cursor-pointer w-full leading-tight inline-block  pb-2 pl-1  text-slate-900 "
        > SEE {" "}
          {area.skill.area}<span className="animate-pulse text-xl ">
          {seeMore ? " <<<" : " >>>"}</span>
        </h1>
        <div className="flex flex-row gap-2 m-1 w-full align-center justify-end">
          {area.skill.icons.map((icon) => {
            return (
              <img
                src={ICON_REF[area.skill.ref][icon]}
                alt={area.skill.ref}
                className="max-h-6"
              />
            );
          })}

      
        </div>
      </div>
      {seeMore && <p className="px-4 text-sm m-2 italic ">{area.skill.subskills}</p>}
    </div>
  );
}
