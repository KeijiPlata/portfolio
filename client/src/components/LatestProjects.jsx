import React from "react";
import photorank from "../images/photorank.png";
import glympse from "../images/glympse.png";
import pupcafeteria from "../images/pupcafeteria.png";
import Projects from "./Projects";
import pilipinas from "../images/project-mockup-design.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const LatestProject = () => {
  const data = [
    {
      name: "Pili-pinas",
      image: pilipinas,
      link: "https://pili-pinas.onrender.com/",
      description:
        "Created an interactive, user-friendly website aimed at streamlining travel decisions in the Philippines, offering detailed insights about each location.",
      tech: [ "HTML", "CSS", "MongoDB", "ReactJS", "Tailwind"],
    },
    {
      name: "PUP Cafeteria",
      image: pilipinas,
      link: "https://keijiplata.github.io/PUPCafeteria/",
      description:
        "Designed and implemented a static website for PUP Cafeteria, streamlining the food ordering process for students.",
        tech: ["HTML", "CSS", "Bootstrap"],
    },
    {
      name: "Photorank",
      image: pilipinas,
      link: "https://keijiplata.github.io/photorank/",
      description:
        "Developed and deployed a dynamic static website catering to photography enthusiasts, offering a platform for showcasing and ranking photos.",
        tech: ["HTML", "CSS", "ReactJS"],
    },
    {
      name: "Glympse",
      image: pilipinas,
      link: "https://keijiplata.github.io/Glympse/",
      description:
        "Glympse is your ultimate destination for a seamless and memorable photobooth experience, offering a diverse range of services that capture and celebrate every moment with creativity and style.",
        tech: ["HTML", "CSS", "Bootstrap"],    },
  ];
  return (
    <div className="md:px-4 my-20 flex flex-col gap-5" id="projects">
      <div className="flex flex-col">
        <h3
          className="text-center text-customBlue font-bold text-xl"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Portfolio
        </h3>
        <h2
          className="text-center text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Latest Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 mt-10 gap-5 justify-items-center">
        {data.map((item, index) => (
          <Projects
            key={index}
            image={item.image}
            name={item.name}
            link={item.link}
            description={item.description}
            tech={item.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProject;
