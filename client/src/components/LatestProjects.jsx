import React from "react";
import Projects from "./Projects";
import simple from "../images/project-mockup-design-simple.png";
import simpleDark from "../images/project-mockup-design-simple-dark.png";
import pilipinas from "../images/project-mockup-design.png";
import cafeteria from "../images/project-mockup-design-caf.png";
import rank from "../images/project-mockup-design-rank.png";
import glympse from "../images/project-mockup-design-glympse.png";
import pilipinasDark from "../images/project-mockup-design-dark.png";
import cafeteriaDark from "../images/project-mockup-design-caf-dark.png";
import rankDark from "../images/project-mockup-design-rank-dark.png";
import glympseDark from "../images/project-mockup-design-glympse-dark.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const LatestProject = ({ darkMode }) => {
  const data = [
    {
      name: "SimpleToDoApp",
      image: simple,
      imageDark: simpleDark,
      link: "https://simpletodoapp-sigma.vercel.app/login",
      description:
        "Built a full-stack MERN task management application with a clean and intuitive UI for efficient to-do list organization, enabling users to seamlessly add, update, and delete tasks.",
      tech: ["HTML", "CSS", "MongoDB", "ReactJS", "Tailwind"],
    },
    {
      name: "Pili-pinas",
      image: pilipinas,
      imageDark: pilipinasDark,
      link: "https://pili-pinas.onrender.com/",
      description:
        "Created an interactive, user-friendly website aimed at streamlining travel decisions in the Philippines, offering detailed insights about each location.",
      tech: ["HTML", "CSS", "MongoDB", "ReactJS", "Tailwind"],
    },
    {
      name: "PUP Cafeteria",
      image: cafeteria,
      imageDark: cafeteriaDark,
      link: "https://keijiplata.github.io/PUPCafeteria/",
      description:
        "Designed and implemented a static website for PUP Cafeteria, streamlining the food ordering process for students.",
      tech: ["HTML", "CSS", "Bootstrap"],
    },
    {
      name: "Photorank",
      image: rank,
      imageDark: rankDark,
      link: "https://keijiplata.github.io/photorank/",
      description:
        "Developed and deployed a dynamic static website catering to photography enthusiasts, offering a platform for showcasing and ranking photos.",
      tech: ["HTML", "CSS", "ReactJS", "Tailwind"],
    },
    {
      name: "Glympse",
      image: glympse,
      imageDark: glympseDark,
      link: "https://keijiplata.github.io/Glympse/",
      description:
        "Glympse is your ultimate destination for a seamless and memorable photobooth experience, offering a diverse range of services that capture and celebrate every moment with creativity and style.",
      tech: ["HTML", "CSS", "Bootstrap"],
    },
  ];
  return (
    <div className="md:px-4 my-20 flex flex-col gap-5" id="projects">
      <div className="flex flex-col">
        <h3
          className="text-center text-customBlue dark:text-customViolet transition-all duration-500 font-bold font-Poppins text-xl"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Portfolio
        </h3>
        <h2
          className="text-center text-4xl font-bold underline font-Poppins decoration-customBlue dark:decoration-customViolet transition-all duration-500 text-black dark:text-white
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
            imageDark={item.imageDark}
            name={item.name}
            link={item.link}
            description={item.description}
            tech={item.tech}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProject;
