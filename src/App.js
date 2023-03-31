import "./App.css";
import { motion } from "framer-motion";

function App() {
  const sideVariants = {
    closed: {
      transition: {},
    },
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
  const links = [
    {
      name: "Victoria Lampard  > > >",
      id: 1,
      style:
        "text-[1.8rem]   leading-tight  w-[100%] flex justify-end items-center ",
    },
    {
      name: "Full Stack Developer  > > ",
      id: 2,
      style:
        "text-[1.5rem] font-thin  leading-tight  whitespace-pre rounded w-[100%] flex  items-center justify-end",
    },
    {
      name: "Welcome to my portfolio.  > ",
      id: 3,
      style:
        "text-[1rem] font-thin  leading-tight rounded w-[100%] flex justify-end flex-wrap items-center ",
    },
  ];

  return (
    <div className="flex w-[100vw] justify-center items-center h-[60vh]">
      <div className="flex items-center justify-center w-[80%] rounded drop-shadow">
        <motion.div
          className="container  flex flex-col"
          initial="closed"
          animate="open"
          variants={sideVariants}
        >
          {links.map(({ name, to, id, style }) => (
            <motion.p
              key={id}
              variants={itemVariants}
              transition={{
                duration: 2,
              }}
              className={style}
            >
              {name}
            </motion.p>
          ))}
          <img src="./icons/linkedin-logo.png" alt="linkedin" />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
