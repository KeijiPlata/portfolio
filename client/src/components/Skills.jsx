import React from "react";
import background from "../images/hackermanDesign.png";
import backgroundDark from "../images/hackermanDesignDark.png";
import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaFigma,
  FaPhp,
  FaLaravel
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiServerless,
} from "react-icons/si";
import xanoLogo from "../images/cutbgxano.png";
import Cards from "./Cards";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skills = ({ darkMode }) => {
  const data = [
    {
      icon: <FaPython />,
      name: "Python",
      link: "https://www.python.org/doc/essays/blurb/",
    },
    {
      icon: <FaJava />,
      name: "Java",
      link: "https://www.java.com/en/download/help/whatis_java.html",
    },
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
      link: "https://blog.hubspot.com/website/react-js",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
      link: "https://laravel.com/docs/11.x#meet-laravel",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      link: "https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html",
    },
    { icon: <FaGitAlt />, name: "Git", link: "https://git-scm.com/" },
    {
      icon: <SiHtml5 />,
      name: "HTML",
      link: "https://www.w3schools.com/html/html_intro.asp",
    },
    {
      icon: <SiCss3 />,
      name: "CSS",
      link: "https://www.w3schools.com/css/css_intro.asp",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
      link: "https://blog.hubspot.com/website/what-is-tailwind-css",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      link: "https://www.mongodb.com/company/what-is-mongodb",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      link: "https://www.figma.com/ui-design-tool/",
    },
    {
      icon: <FaPhp />,
      name: "Php",
      link: "https://www.php.net/manual/en/index.php",
    },
    {
      icon: (
        <img src={xanoLogo} style={{ width: "4rem", height: "4rem" }} alt="" />
      ),
      name: "Xano",
      link: "https://www.xano.com/",
    },
  ];
  return (
    <div className="px-4 font-Poppins transition-all duration-500">
      <h3
        className="text-center text-customBlue dark:text-customViolet transition-all duration-500 font-bold text-xl"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Languages
      </h3>
      <h2
        className="text-center text-4xl font-bold underline decoration-customBlue dark:decoration-customViolet text-black dark:text-white transition-all duration-500
             decoration-4 underline-offset-[9px]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        My Skills
      </h2>
      <div className="bg-customBlue dark:bg-customViolet transition-all duration-500 rounded-md w-100 md:h-[525px] lg:h-[575px] h-[900px] mt-10 mb-24 grid md:grid-cols-3 grid-cols-1">
        <div className="col-span-2 grid md:grid-cols-5 grid-cols-3 lg:p-6 md:p-4">
          {data.map((item, index) => (
            <Cards
              key={index}
              icon={item.icon}
              name={item.name}
              link={item.link}
            />
          ))}
        </div>
        <div className="md:flex md:justify-center hidden">
          <div
            style={{
              backgroundImage: `url("${
                darkMode ? backgroundDark : background
              }")`,
            }}
            className="lg:w-[22rem] md:w-[16rem] md:h-[21rem] lg:h-[27rem] hidden md:block bg-cover bg-center self-center transition-all duration-500"
            data-aos="fade-up"
            data-aos-duration="1500"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
