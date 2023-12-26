import React from "react";
import photorank from "../images/photorank.png";
import glympse from "../images/glympse.png";
import pupcafeteria from "../images/pupcafeteria.png";
import Projects from "./Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const LatestProject = () => {
    const data = [
        {name: "PUP Cafeteria", image: pupcafeteria, link: "https://keijiplata.github.io/PUPCafeteria/" },
        {name: "Photorank", image: photorank, link: "https://keijiplata.github.io/photorank/" },
        {name: "Glympse", image: glympse, link: "https://keijiplata.github.io/Glympse/"},
    ]
    return(
        <div className="px-4 my-10" id="projects">
             <h3 className="text-center text-customBlue font-bold text-xl" 
             data-aos="fade-up" data-aos-duration="1500">Portfolio</h3>
            <h2 className="text-center text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]" 
             data-aos="fade-up" data-aos-duration="1500">Latest Projects</h2>

             <div className="grid md:grid-cols-3 grid-cols-1 mt-10">
                {data.map ((item, index) => (
                    <Projects key={index} image={item.image} name={item.name} link={item.link} />
                ))}
              
             </div>
        </div>
    )
}

export default LatestProject