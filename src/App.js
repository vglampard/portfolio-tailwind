import "./App.css";
import { motion } from "framer-motion";

function App() {
  console.log(
    "KEYS:",
    process.env.SERVICE_ID,
    process.env.TEMPLATE_ID,
    process.env.PUB_KEY
  );

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="flex items-center justify-center w-[70%] rounded drop-shadow">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="p-2 font-thin text-xs leading-tight m-2">
            Victoria Lampard, linguist turned full stack developer. Welcome to
            my portfolio.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
