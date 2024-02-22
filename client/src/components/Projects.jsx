import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Projects({ name, image, imageDark, link, description, tech, darkMode }) {
  return (
    <div
      className="group md:p-7 p-5 rounded-lg bg-customBlue dark:bg-customViolet transition-all duration-500 grid md:grid-cols-2 grid-cols-1 gap-5  w-5/6  cursor-pointer"
      data-aos="flip-up"
      data-aos-duration="1500"
      onClick={() => window.open(link, "_blank")}
    >
      <div className="order-2 md:order-1 flex flex-col justify-between gap-5 font-Poppins text-white lg:w-4/5 w-full">
        <div className="flex flex-col gap-3">
          <h2 className="lg:text-2xl text-xl font-bold">{name}</h2>
          <p className="text-justify lg:text-base text-sm">{description}</p>
        </div>

        <div className="flex flex-row gap-2 font-Poppins text-customBlue dark:text-customViolet transition-all duration-500 flex-wrap">
          {tech.map((tag) => (
            <p className="bg-white p-2 rounded-md text-sm md:text-base">{tag}</p>
          ))}
        </div>
      </div>
      <div className="order-1 md:order-2 flex flex-row justify-center items-center">
        <img src={darkMode ? imageDark : image} alt="" className="object-contain h-full w-full group-hover:scale-110 transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
}

export default Projects;
