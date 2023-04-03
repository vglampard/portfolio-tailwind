import "./App.css";
import { motion } from "framer-motion";
import github from "./icons/github-sign.png";
import linkedin from "./icons/linkedin-logo.png";
import wordpress from "./icons/wordpress-logo.png";
import pp from "./pp.jpg";
import { Link } from "react-router-dom";
import { text, icons } from "./constants/homePageData";
function App() {
  const sideVariants = {
    open: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
        duration: 5,
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
    <div className="flex flex-col  mt-20 items-center justify-center ">
      <div className="flex flex-col lg:justify-center lg:gap-5 lg:flex-row items-center justify-center">
        
        <motion.img src={pp}
        initial={{ x: -900 }}
        animate={{ x: 0 }}
        transition={{ duration: 3 }}
          alt="profile victoria lampard"
          className="w-[30%] md:w-[20%] lg:w-[20%] rounded-full  outline "
        >
       
          
        </motion.img>
        <motion.div
          className="container pt-2 sm:flex-col flex items-start  justify-center  lg:max-w-[40%] w-[60%] "
          initial="closed"
          animate="open"
          variants={sideVariants}
        >
          <div className="flex flex-wrap flex-col justify-end ">
            {text.map(({ name, to, id, style }) => (
              <motion.p
                key={id}
                variants={itemVariants}
                transition={{ duration: 2 }}
                className={style}
              >
                {name}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
      <div classname="flex flex-col justify-center">
        <div className="p-5 text-justify lg:w-[50vw] md:w-[50vw]">
          <motion.p
            target="_blank"
            variants={sideVariants}
            initial={{ x: 900 }}
            animate={{ x: 0 }}
            transition={{ duration: 3 }}
          >
            <span className="bg-slate-200 px-1 pb-1 text-lg">
              Linguist turned full stack developer,
            </span>{" "}
            I'm a proactive problem-solver, an adept communicator, and committed
            to rapid career development. Have a browse of my{" "}
            <Link to="projects" className="  bg-slate-200 px-1 pb-1 ">
              projects
            </Link>
            , see the{" "}
            <Link to="skills" className=" bg-slate-200 px-1 pb-1 ">
              skills
            </Link>{" "}
            I'm developing, and{" "}
            <Link to="contact" className=" bg-slate-200 px-1 pb-1 ">
              get in touch!
            </Link>
          </motion.p>
        </div>
        <div className="flex items-start gap-2 justify-center ">
          {icons.map((icon) => (
            <motion.a
              key={icon.name}
              src={IMAGES[icon.src]}
              href={icon.link}
              target="_blank"
              variants={sideVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
              className="w-10"
            >
              {" "}
              <img key={icon.name} src={IMAGES[icon.src]} alt={icon.name} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
