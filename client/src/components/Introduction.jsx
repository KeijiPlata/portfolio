import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Introduction = () => {
    return(
        <div className="px-4">
            {/* <div className="m-auto lg:w-[1150px] lg:h-[400px] md:w-[800px] md:h-[300px] 
            w-100 h-96 bg-gray-200 rounded-md mt-28 grid md:grid-cols-2 grid-cols-1"> */}
                <div className="m-auto w-100 lg:h-[420px] md:h-[350px] h-[300px] bg-customBlue rounded-md mt-28 grid md:grid-cols-2 grid-cols-1">
                <div className="text-white  flex flex-col gap-3 justify-center lg:pl-10 md:pl-5 pl-5 order-last md:order-1">
                    <div>
                        <h2 className="lg:text-5xl text-4xl font-bold">Hi, I'm</h2>
                        <h2 className="lg:text-5xl text-4xl font-bold">Lord Miacky Keiji</h2>
                        <p className="lg:text-xl md:text-lg">Web and app developer</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <a href="../src/cv/Plata_resume.pdf" download>
                            <button className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-400
                            duration-500">
                                Download CV
                            </button>
                        </a>
                        <div className="flex flex-row gap-2 items-center text-2xl">
                            <a href="https://github.com/KeijiPlata" target="_blank"><BsGithub /></a>
                            <a href="https://www.facebook.com/lordmiackykeiji" target="_blank"><BsFacebook /></a>
                            <a href="https://www.linkedin.com/in/lord-miacky-keiji-plata/" target="_blank"><BsLinkedin /></a>
                        </div>  
                    </div>
                    
                </div>
                <div className=" order-2 font-Rubiks text-white text-6xl flex flex-nowrap flex-col truncate relative">
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
                </div>
                
            </div>
        </div>
    )
}

export default Introduction