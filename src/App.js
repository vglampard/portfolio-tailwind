import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header >
        <Navbar/>
       
      </header>
   <body className="bg-white h-[100vh]">

   <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="projects" element={ <Projects/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes> 
      <Link to="projects">Previous projects</Link>
   </body>
  
      
    </div>
  );
}

export default App;
