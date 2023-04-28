import React, { useState } from "react";

// Icon imports below - looks fishy to me.
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

// Component that takes in data from a specific skill area and renders a card
export default function SkillCard(area) {
  const [seeMore, setSeeMore] = useState(false);

  // Toggle skill card visibility
  function handleSeeMore() {
    setSeeMore(!seeMore);
  }

  // Object containg icons to be conditionally rendered on the card
  const ICON_REF = {
    frontEnd: { javascript, html, css, react, typescript },
    backEnd: { sql, api, node, aws, server },
    toolsAndTest: { jest, cypress, git, jira, github },
    principles: { agile, pair, lead, trello, remote },
    learning: { java, javascript, redux, aws, nostr },
  };

  return (
    <div className="bg-white flex-col outline-1  rounded drop-shadow-lg flex justify-center items-center w-full hover:scale-105 transition-transform ">
      <div className="w-full flex items-start bg-yellow-100 p-1">
        <h1
          onClick={handleSeeMore}
          className=" flex justify-start font-bold italic text-left uppercase leading-tight  text-slate-900 "
        >
          {" "}
          {area.skill.area}
        </h1>
      </div>

      {/* Rendering a list of subskills as handed down from the skills area object */}
      <p className="px-4 text-sm m-2 italic text-justify ">
        {area.skill.subskills}
      </p>

      {/* Icons are rendered here by matching the skill area handed down in the skill object with the icons stored in the Icon object defined above */}

      <div className="flex flex-row gap-2 p-1 m-1 w-full align-center justify-end">
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
  );
}
