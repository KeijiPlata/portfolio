import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Projects({ name, image, link, description, tech }) {
  return (
    <div
      className="p-7 rounded-lg bg-customBlue grid grid-cols-2 m-2 w-5/6 h-80 cursor-pointer"
      data-aos="flip-up"
      data-aos-duration="1500"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="flex flex-col justify-between gap-5 font-Poppins text-white w-4/5">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-justify">{description}</p>
        </div>

        <div className="flex flex-row gap-2 font-Poppins text-customBlue">
          {tech.map((tag) => (
            <p className="bg-white p-2 rounded-md">{tag}</p>
          ))}
        </div>
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default Projects;
