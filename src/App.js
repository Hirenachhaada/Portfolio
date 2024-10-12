import React from "react";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
import Skills from "./Skills";
import ExtraCurricular from "./ExtraCurricular";
import Experience from "./Experience";
import Achievements from "./Achievements";
import "./css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Achhada Hiren Rajkumar</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#extra-curricular">Extra Curricular</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </header>

      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <ExtraCurricular />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
