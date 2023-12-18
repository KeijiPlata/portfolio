import React from "react";
import background from "../images/graduationDesign.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutMe = () => {
  return (
    <div className="px-4" id="about">
      {/* parent */}
      <div className=" w-100 md:h-[515px] h-[600px] md:mt-10 mt-1 md:mb-3 mb-7 grid md:grid-cols-3 grid-cols-1">
        {/* first child */}
        <div className=" md:flex md:justify-center hidden">
          <div
            style={{
              backgroundImage: `url("${background}")`,
            }}
            className="lg:w-[18rem] md:w-[17rem] md:h-[23rem] lg:h-[25rem] hidden md:block bg-cover bg-center self-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          ></div>
        </div>
        {/* second child */}
        <div className="md:p-7 p-2 md:col-span-2">
          <div data-aos="fade-up" data-aos-duration="1500">
            <h3 className="text-customBlue font-bold text-xl text-center md:text-left">
              Discover
            </h3>
            <h2
              className="text-4xl text-center md:text-left font-bold underline
                         decoration-customBlue decoration-[4px] underline-offset-[9px]"
            >
              About Me
            </h2>
            <p className="text-justify mt-5">
              As a recent graduate with a Diploma in Information Communication
              Technology (DICT) and currently pursuing a Bachelor of Science in
              Information Technology (BSIT), I am a highly motivated and
              detail-oriented student. With a proven track record of strong
              communication and analytical skills, I am adept at quickly
              learning new technologies. I thrive in team environments and excel
              at problem-solving. My passion for technology drives me to seek
              challenging and dynamic work opportunities, where I can contribute
              effectively to the industry's growth and innovation.
            </p>
          </div>
          <div
            className="flex flex-row justify-center md:justify-start mt-4 gap-2 text-white"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="bg-customBlue rounded-md md:p-4 p-2">
              <h2 className="md:text-5xl text-4xl font-bold">12+</h2>
              <h3 className="text-sm md:text-base">Month of Experience</h3>
            </div>
            <div className="bg-customBlue rounded-md md:p-4 p-2">
              <h2 className="md:text-5xl text-4xl font-bold">6+</h2>
              <h3 className="text-sm md:text-base">Joined Competitions</h3>
            </div>
            <div className="bg-customBlue rounded-md md:p-4 p-2">
              <h2 className="md:text-5xl text-4xl font-bold">4+</h2>
              <h3 className="text-sm md:text-base">Projects Completed</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
