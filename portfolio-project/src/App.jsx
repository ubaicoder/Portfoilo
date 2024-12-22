import { useState } from "react";
import Nav from "./components/Navbar/Nav";
import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/Project";
import Educcation from "./components/Education/Education";
import Skill from "./components/Skills/Skill";
import Interest from "./components/Interest/Interest";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Project />
      <Educcation />
      <Skill />
      <Interest />
      <Contact />
    </>
  );
}

export default App;
