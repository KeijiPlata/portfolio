import React from "react";
import { GiMineralHeart } from "react-icons/gi";
import background from "../images/keijiCutdesign.png"
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    const data = [
        {logo: <FaMobileAlt />, info: "09980752227"},
        {logo: <FaEnvelope />, info: "lordmiackykeijip"},
        {logo: <BsFillTelephoneFill />, info: "89971255"},
        
    ]
    return(
        <div className="bg-customBlue">
        <div className="grid lg:grid-cols-4 grid-cols-2">
           
            <div className="p-4 flex justify-center items-center">
                    <div>
                    <div style={{
                        backgroundImage: `url("${background}")`
                    }} className=" w-44 h-56 bg-cover bg-center self-center"></div>
                       
                    </div>
                </div>
            <div className=" text-white p-4 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-2xl
                    font-bold">
                    <div>
                        <GiMineralHeart />
                    </div>
                    <div className=" font-[Poppins]">
                        <h2>Plata.</h2>
                    </div>
                    </div>
                    <p className="text-justify text-sm md:text-base">This is my first portfolio website. Thank you for visiting!</p>
                </div>
                <div className=" text-white p-4 flex flex-col justify-start md:justify-center lg:items-center items-center">
                <div>
                    <h2 className="text-lg font-bold">Contact Me</h2>
                        <ul>
                            
                            {
                                data.map((data)=>(
                                    <li key={data.info} className="flex items-center gap-1 text-sm md:text-base">
                                        <span>{data.logo}</span>
                                        {data.info}
                                        </li>
                                )) 
                            }
                        </ul>
                </div>
            </div>
            <div className=" text-white p-4 flex flex-col justify-start md:justify-center items-center">
                <div>
                    <h2 className="text-lg font-bold mb-2">Follow Me</h2>
                    <div className="flex flex-row md:gap-3 gap-2 items-center text-3xl">
                            <a href="https://github.com/KeijiPlata" target="_blank" className="
                            duration-500 hover:text-customlightBlue"><BsGithub /></a>
                            <a href="https://www.facebook.com/lordmiackykeiji" target="_blank" className="
                            duration-500 hover:text-customlightBlue"><BsFacebook /></a>
                            <a href="https://www.linkedin.com/in/lord-miacky-keiji-plata/" target="_blank" className="
                            duration-500 hover:text-customlightBlue"><BsLinkedin /></a>
                        </div>  
                </div>
            </div>
           
        </div>
        <div className="p-2">
        <hr className="mx-auto my-2 bg-gray-100 border-1 rounded md:my-2"></hr>
            <h2 className="text-center text-white">Copyright © 2023 Plata</h2>
        </div>
        </div>
    )
}

export default Footer