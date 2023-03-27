import "./App.css";
import { motion } from "framer-motion";

function App() {


  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  const links = [
    { name: "Home", to: "#", id: 1 },
    { name: "About", to: "#", id: 2 },
    { name: "Blog", to: "#", id: 3 },
    { name: "Contact", to: "#", id: 4 }
  ];

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="flex items-center justify-center w-[80%] rounded drop-shadow">
        
        <motion.aside
   
      initial={{ x: -5000 }} 
      animate={{ x: 0 }}
    
  ><div className="bg-slate-200 h-10"><p className="font-thin text-xs leading-tight p-2 m-2 whitespace-pre">
  <span className="text-2xl">Victoria Lampard,</span> linguist turned <br></br><span className="text-4xl uppercase ">full stack developer</span>.<br></br>      Welcome to
  my portfolio.
  
  <span className="text-4xl"></span>
  <span className="text-4xl"></span>
</p></div></motion.aside>

<motion.div 
  className="container"
  initial="closed"
  animate="open"
  variants={sideVariants}
>
  {links.map(({ name, to, id }) => (
    <motion.a key={id} href={to} variants={itemVariants}>
      {name}
    </motion.a>
  ))}
</motion.div>

      </div>
    </div>
  );
}

export default App;
