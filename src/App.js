import React, { Component } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import SocialLinks from "./components/SocialLinks";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
