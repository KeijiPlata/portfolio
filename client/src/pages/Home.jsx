import React from "react";
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
    return (
        <div>
            <Nav />
            <ToggleDarkMode/>
            <Introduction />
            <AboutMe />
            <Skills />
            <Expertise />
            <Certificates />
            <Experience />
            <LatestProject />
            <Footer />
        </div>
    )
}

export default Home