import React from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skill />
      <Project />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
