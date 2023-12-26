import React from "react";
import Nav from "../components/Nav";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import LatestProject from "../components/LatestProjects";
import Footer from "../components/Footer";
import Expertise from "../components/Expertise";

function Home() {
    return (
        <div>
            <Nav />
            <Introduction />
            <AboutMe />
            <Skills />
            <Expertise />
            <LatestProject />
            <Footer />
        </div>
    )
}

export default Home