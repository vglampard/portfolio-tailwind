import "./App.css";
import { motion } from "framer-motion";


function App() {
  console.log("KEYS:", process.env.SERVICE_ID, process.env.TEMPLATE_ID, process.env.PUB_KEY)
  
  return (
    <div className="flex justify-center">
    
      <div className="flex items-center justify-center w-[70%] max-h-[60%] bg-slate-200 h-[70%] mt-20 rounded drop-shadow">
      <motion.div  initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}>

  
        <p className="p-4 font-thin text-sm leading-tight">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore
        </p>
        </motion.div>
      </div>
     
    </div>
  );
}

export default App;
