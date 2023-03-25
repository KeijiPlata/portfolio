import React from "react";
import background from "../images/hackermanDesign.png"
import { FaPython } from "react-icons/fa";
import Cards from "./Cards"

const Skills = () => {
    const data = [
        {icon: <FaPython />, name: "Python"},
        {icon: <FaPython />, name: "Java"},
        {icon: <FaPython />, name: "Python"},
        {icon: <FaPython />, name: "Python"},
        {icon: <FaPython />, name: "Python"},
        {icon: <FaPython />, name: "Python"},
        {icon: <FaPython />, name: "Python"},
        {icon: <FaPython />, name: "Python"},
        {icon: <FaPython />, name: "Python"},
        {icon: <FaPython />, name: "Python"},

    ]
    return(
        <div className="px-4">
            <h3 className="text-center text-customBlue font-bold text-xl">Languages</h3>
            <h2 className="text-center text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]">My Skills</h2>
            <div className="bg-customBlue rounded-md w-100 md:h-[375px] lg:h-[450px] h-[650px] mt-10 mb-24 grid md:grid-cols-3 grid-cols-1">
                <div className="col-span-2 grid md:grid-cols-5 grid-cols-2">
                    {data.map ((item, index) => (
                        <Cards key={index} icon={item.icon} name={item.name} />
                    ))}
                </div>
                <div className="md:flex md:justify-center hidden">
                <div style={{
                        backgroundImage: `url("${background}")`
                    }} className="lg:w-[22rem] md:w-[16rem] md:h-[21rem] lg:h-[25rem] hidden md:block bg-cover bg-center self-center" 
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Skills