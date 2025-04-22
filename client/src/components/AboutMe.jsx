import React from "react";
import background from "../images/graduationDesign.png";
import backgroundDark from "../images/graduationDesignDark.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutMe = ({ darkMode }) => {
  const data = [
    { months: "12+", info: "Months of Experience" },
    { months: "6+", info: "Joined Competitions" },
    { months: "4+", info: "Projects Completed" },
  ];
  return (
    <div
      className="md:px-4 px-2  font-Poppins flex flex-col md:mt-12 mt-3 md:mb-3 mb-7"
      id="about"
    >
      {/* parent */}
      <div className=" grid md:grid-cols-3 grid-cols-1 transition-all duration-500">
        {/* first child */}
        <div className=" md:flex md:justify-center hidden">
          <div
            style={{
              backgroundImage: `url("${
                darkMode ? backgroundDark : background
              }")`,
            }}
            className="lg:w-[18rem] md:w-[17rem] md:h-[23rem] lg:h-[25rem] hidden md:block bg-cover bg-center self-center transition-all duration-500"
            data-aos="fade-up"
            data-aos-duration="1500"
          ></div>
        </div>
        {/* second child */}
        <div className="md:p-7 p-2 md:col-span-2">
          <div data-aos="fade-up" data-aos-duration="1500">
            <h3 className="text-customBlue dark:text-customViolet font-bold text-xl text-center md:text-left">
              Discover
            </h3>
            <h2
              className="text-4xl text-center md:text-left font-bold underline text-black dark:text-white
                         decoration-customBlue dark:decoration-customViolet decoration-[4px] underline-offset-[9px]"
            >
              About Me
            </h2>
            <p className="text-justify mt-5 text-black dark:text-white">
              As a recent graduate with a Bachelor of Science in Information
              Technology (BSIT) and a prior Diploma in Information Communication
              Technology (DICT), I am a highly motivated and detail-oriented
              developer with a strong foundation in web development. Over the
              course of my studies, I have enhanced my skills in building
              modern, responsive web applications using technologies like
              ReactJS, Laravel, and MongoDB. I have a proven ability to learn
              quickly, communicate effectively, and solve complex problems in
              collaborative environments. Driven by a passion for technology and
              continuous improvement, I am eager to contribute to innovative
              projects and help create impactful digital solutions.
            </p>
          </div>
          <div
            className="flex flex-row justify-center md:justify-start mt-4 gap-2 text-white"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {data.map((item) => (
              <div className="bg-customBlue dark:bg-customViolet rounded-md md:p-4 p-2 shadow-md transition-all duration-500">
                <h2 className="md:text-5xl text-3xl font-bold">
                  {item.months}
                </h2>
                <h3 className="text-sm md:text-base">{item.info}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
