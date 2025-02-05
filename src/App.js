import "./App.css";
import { motion } from "framer-motion";
import github from "./icons/github-sign.png";
import linkedin from "./icons/linkedin-logo.png";
import wordpress from "./icons/wordpress-logo.png";
import profpic from "./assets/profilePicNoBg.png";
import { Link } from "react-router-dom";
import Projects from "./components/Projects/Projects"
import { text, icons } from "./constants/homePageData";
function App() {
  const sideVariants = {
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        duration: 3,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: -5000,
    },
    open: { x: 0 },
  };

  const IMAGES = { wordpress, github, linkedin };

  return (
    <div className="flex flex-col mt-10 md:mt-20 sm:mt-10 items-center justify-center ">
      <div className="flex flex-col items-center justify-center">
      <img src={profpic} alt="Victoria Lampard" className="rounded-full mt-14 md:mt-10 w-52 mb-2 border-2 border-black"/>
          <h2 className="text-3xl font-bold mt-1">Victoria Lampard</h2>
          <h5>Typescript | Angular | React </h5>
                <div className="p-5 text-justify lg:w-[75vw] md:w-[75vw]">
                    I'm a <span className="bg-amber-100">proactive problem-solver</span>, an <span
                    className="bg-amber-100">adept
                    communicator</span>, and committed
                    to rapid <span className="bg-amber-100">career development</span>. Currently, I help automotive dealers sell cars more efficiently as part of a startup-style team
                    developing a car sales and finance storefront that's self-serve for
                    dealerships. I've also volunteered with the <span className="bg-amber-100">Scottish Tech
                    Army</span>, am an active member of the <span className="bg-amber-100 font-bold"><a
                    href="https://www.glasgowjs.org/" target="_blank">Glasgow.js</a> </span> and
                    <span className="bg-amber-100 font-bold"><a
                        href="https://www.glasgowjs.org/" target="_blank"> Edinburgh.js</a></span> groups, and set up and
                    currently run the Scottish Technology Club <span className="bg-amber-100 font-bold"><a
                    href="https://www.scottishtechnology.club/mentoring"
                    target="_blank">mentorship programme.</a></span> <br/><br/>
                    I love finding little ways to make things faster.
                </div>
            </div>
      <div classname="flex flex-col justify-center">
          <Projects/>
      </div>
    </div>
  );
}

export default App;
