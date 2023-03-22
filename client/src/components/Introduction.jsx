import React from "react";
import background from "../images/keijiCutdesign.png"
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return(
        <div className="px-4">
                {/* parent of two grids */}
                <div className="m-auto w-100 lg:h-[450px] md:h-[350px] h-[650px] bg-customBlue rounded-md mt-28 grid md:grid-cols-2 grid-cols-1 mb-44">

                {/* grid cols 1 */}
                <div className="text-white  flex flex-col gap-3 justify-center lg:pl-10 py-5 pl-5 order-last md:order-1">
                    <div>
                        <h2 className="lg:text-5xl text-4xl font-bold">Hi, I'm</h2>
                        <h2 className="lg:text-5xl text-4xl font-bold">Lord Miacky Keiji</h2>
                        <div className="lg:text-2xl text-xl"> <TypeAnimation
                                sequence={[
                                    'Web Developer', 
                                    2000, 
                                    'App Developer', 
                                    2000, 
                                    'Python Developer', 
                                    2000,
                                    'Java Developer', 
                                    2000,
                                    'Student', 
                                    2000,
                                    'President Lister', 
                                    2000,
                                    'I Love Programming!',
                                    2000,
                                ]}
                                wrapper="div"
                                cursor={true}
                                repeat={Infinity}
                                />
                        </div>
                       
                    </div>
                    <div className="flex flex-row gap-4">
                        <a href="../src/cv/Plata_resume.pdf" download>
                            <button className="bg-white text-customBlue py-1 px-4 rounded hover:bg-customlightBlue
                            duration-500 hover:text-white font-bold">
                                Download CV
                            </button>
                        </a>
                        <div className="flex flex-row gap-3 items-center text-3xl">
                            <a href="https://github.com/KeijiPlata" target="_blank" className="
                            duration-500 hover:text-customlightBlue"><BsGithub /></a>
                            <a href="https://www.facebook.com/lordmiackykeiji" target="_blank" className="
                            duration-500 hover:text-customlightBlue"><BsFacebook /></a>
                            <a href="https://www.linkedin.com/in/lord-miacky-keiji-plata/" target="_blank" className="
                            duration-500 hover:text-customlightBlue"><BsLinkedin /></a>
                        </div>  
                    </div>
                    
                </div>

                {/* grid cols 2 */}
                <div className=" order-2 font-Rubiks text-white lg:text-7xl text-6xl flex flex-nowrap justify-center flex-col truncate relative">
                    <div style={{
                        backgroundImage: `url("${background}")`
                    }} className="lg:w-96 md:h-full md:w-80 w-96 h-full bg-cover bg-center absolute self-center"></div>
                    <div><h2>LORD MIACKY KEIJI PLATA</h2></div>
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