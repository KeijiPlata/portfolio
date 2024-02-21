import React, { useState } from "react";
import Nav from "../components/Nav";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import LatestProject from "../components/LatestProjects";
import Footer from "../components/Footer";
import Expertise from "../components/Expertise";
import Certificates from "../components/Certificates";
import Experience from "../components/Experience";
import ToggleDarkMode from "../components/ToggleDarkMode";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${darkMode && "dark"} ${
        darkMode ? "bg-customBgblack" : "bg-slate-50"
      } transition-all duration-500`}
    >
      <Nav />
      <ToggleDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Introduction darkMode={darkMode}/>
      <AboutMe darkMode={darkMode}/>
      <Skills />
      <Expertise />
      <Certificates />
      <Experience />
      <LatestProject />
      <Footer />
    </div>
  );
}

export default Home;
