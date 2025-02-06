import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects"
function App() {

  return (
    <div className="flex flex-col mt-10 md:mt-5 sm:mt-5 items-center justify-center ">
    <AboutMe></AboutMe>
      <div className="flex flex-col justify-center">
        <Projects />
      </div>
    </div>
  );
}

export default App;
