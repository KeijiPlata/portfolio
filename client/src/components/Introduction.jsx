import React, { useState } from "react";
import background from "../images/keijiCutdesign.png";
import backgroundDark from "../images/keijiCutdesignDark.png";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import cv from "../cv/Plata_Resume.pdf";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Introduction = ({darkMode}) => {
  const [animate, setAnimate] = useState(false);
  return (
    <div
      className="px-4 pt-24 md:mb-0 mb-16 "
      data-aos="fade-down"
      data-aos-duration="1500"
      id="intro"
    >
      {/* parent of two grids */}
      <div className=" w-100 lg:h-[450px] md:h-[350px] h-[650px] bg-customBlue dark:bg-customViolet transition-all duration-500 rounded-md grid md:grid-cols-2 grid-cols-1">
        {/* grid cols 1 */}
        <div className="text-white  flex flex-col gap-3 justify-center lg:pl-10 py-5 pl-5 order-last md:order-1">
          <div>
            <h2 className="lg:text-5xl text-4xl font-bold font-Poppins">
              Hi, I'm
            </h2>
            <h2 className="lg:text-5xl text-4xl font-bold font-Poppins">
              Lord Miacky Keiji
            </h2>
            <div className="lg:text-2xl text-xl font-Poppins">
              {" "}
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "App Developer",
                  2000,
                  "Python Developer",
                  2000,
                  "Java Developer",
                  2000,
                  "Student",
                  2000,
                  "President Lister",
                  2000,
                  "I Love Programming!",
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <a href={cv} download>
              <button
                className="bg-white text-customBlue dark:text-customViolet py-1 px-4 rounded hover:bg-customlightBlue dark:hover:bg-customlightViolet
                            duration-500 hover:text-white dark:hover:text-white font-bold font-Poppins"
              >
                Download CV
              </button>
            </a>
            <div className="flex flex-row md:gap-3 gap-2 items-center text-3xl">
              <a
                href="https://github.com/KeijiPlata"
                target="_blank"
                className="
                            duration-500 hover:text-customlightBlue dark:hover:text-customlightViolet"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.facebook.com/lordmiackykeiji"
                target="_blank"
                className="
                            duration-500 hover:text-customlightBlue dark:hover:text-customlightViolet"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/lord-miacky-keiji-plata/"
                target="_blank"
                className="
                            duration-500 hover:text-customlightBlue dark:hover:text-customlightViolet"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* grid cols 2 */}
        <div className=" order-2 font-Rubiks text-white lg:text-7xl text-6xl flex flex-nowrap justify-center flex-col truncate relative">
          <div
            style={{
              backgroundImage: `url("${darkMode? backgroundDark : background}")`,
            }}
            className="lg:w-96 md:h-full md:w-80 w-96 h-full bg-cover bg-center absolute self-center transition-all duration-500"
          ></div>
          <div
            onMouseEnter={() => setAnimate(true)}
            onMouseLeave={() => setAnimate(false)}
            className={`lg:w-28 lg:h-28 md:w-24 md:h-24 w-28 h-28 rounded-full absolute bg-white self-center lg:mr-72 md:mr-60 mr-44 mb-28 lg:text-xl md:text-lg text-xl text-customBlue dark:text-customViolet transition-all duration-500
                    flex items-center justify-center font-[Poppins] font-bold text-center -rotate-[17deg] ${
                      animate ? "animate__animated animate__shakeY" : ""
                    }`}
          >
            <h2>Hire me!</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
          <div>
            <h2>LORD MIACKY KEIJI PLATA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
