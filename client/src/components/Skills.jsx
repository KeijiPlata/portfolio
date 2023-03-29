import React from "react";
import background from "../images/hackermanDesign.png"
import { FaPython, FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus, SiMysql, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";
import Cards from "./Cards"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skills = () => {
    const data = [
        {icon: <FaPython />, name: "Python", link: "https://www.python.org/doc/essays/blurb/"},
        {icon: <FaJava />, name: "Java", link: "https://www.java.com/en/download/help/whatis_java.html"},
        {icon: <IoLogoJavascript />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"},
        {icon: <FaReact />, name: "React", link: "https://blog.hubspot.com/website/react-js"},
        {icon: <SiCplusplus />, name: "C++", link: "https://www.w3schools.com/cpp/cpp_intro.asp"},
        {icon: <SiMysql />, name: "MySQL", link: "https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html"},
        {icon: <FaGitAlt />, name: "Git", link: "https://git-scm.com/"},
        {icon: <SiHtml5 />, name: "HTML", link: "https://www.w3schools.com/html/html_intro.asp"},
        {icon: <SiCss3 />, name: "CSS", link: "https://www.w3schools.com/css/css_intro.asp"},
        {icon: <SiTailwindcss />, name: "Tailwind", link: "https://blog.hubspot.com/website/what-is-tailwind-css"},
      

    ]
    return(
        <div className="px-4">
            <h3 className="text-center text-customBlue font-bold text-xl" data-aos="fade-up" data-aos-duration="1500">Languages</h3>
            <h2 className="text-center text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]" data-aos="fade-up" data-aos-duration="1500">My Skills</h2>
            <div className="bg-customBlue rounded-md w-100 md:h-[375px] lg:h-[425px] h-[720px] mt-10 mb-24 grid md:grid-cols-3 grid-cols-1">
                <div className="col-span-2 grid md:grid-cols-5 grid-cols-3 lg:p-6 md:p-4">
                    {data.map ((item, index) => (
                        <Cards key={index} icon={item.icon} name={item.name} link={item.link}/>
                    ))}
                </div>
                <div className="md:flex md:justify-center hidden">
                <div style={{
                        backgroundImage: `url("${background}")`
                    }} className="lg:w-[22rem] md:w-[16rem] md:h-[21rem] lg:h-[25rem] hidden md:block bg-cover bg-center self-center" 
                    data-aos="fade-up" data-aos-duration="1500"></div>
                </div>
            </div>
        </div>
    )
}

export default Skills