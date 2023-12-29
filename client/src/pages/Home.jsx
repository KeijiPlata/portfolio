import React from "react";
import Nav from "../components/Nav";
import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import LatestProject from "../components/LatestProjects";
import Footer from "../components/Footer";
import Expertise from "../components/Expertise";
import Certificates from "../components/Certificates";

function Home() {
    return (
        <div>
            <Nav />
            <Introduction />
            <AboutMe />
            <Skills />
            <Expertise />
            <Certificates />
            <LatestProject />
            <Footer />
        </div>
    )
}

export default Home