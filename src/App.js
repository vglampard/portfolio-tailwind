import "./App.css";
import { motion } from "framer-motion";

function App() {
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 1,
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
   
    { name: "Victoria Lampard  > > >", id: 1, style: "text-[1.5rem] font-thin  leading-tight p-2 m-2 bg-slate-200 rounded w-[100%] flex  items-center h-20" },
    { name: "Full Stack Developer  > > ", id: 2, style: "text-[1.5rem] font-thin  leading-tight p-2 m-2 bg-slate-200 whitespace-pre rounded w-[100%] flex  items-center h-20" },
    { name: "Welcome to my portfolio.  > ", id: 3,style: "text-[1rem] font-thin  leading-tight p-2 m-2 bg-slate-200 rounded w-[100%] flex justify-end flex-wrap items-center h-20"  },
  ];

  return (
    <div className="flex w-[100vw] justify-center items-center h-[80vh]">
      <div className="flex items-center justify-center w-[80%] rounded drop-shadow">
        <motion.div
          className="container"
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
              }} className={style}
            >
              {name}
            </motion.p>
          ))}
        </motion.div>

       {/* <div className="bg-slate-200 h-10"><p className="font-thin text-xs leading-tight p-2 m-2 whitespace-pre">
  <span className="text-2xl">Victoria Lampard,</span> linguist turned <br></br><span className="text-4xl uppercase ">full stack developer</span>.<br></br>      Welcome to
  my portfolio.
  
  <span className="text-4xl"></span>
  <span className="text-4xl"></span>
</p>
      </div> */}
    </div>
    </div>
  );
}

export default App;
