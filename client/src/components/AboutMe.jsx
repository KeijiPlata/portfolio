import React from "react";
import background from "../images/graduationDesign.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutMe = () => {
    return(
        <div className="px-4" id="about">
            <div className=" w-100 md:h-[480px] h-[575px] md:mt-10 mt-1 md:mb-3 mb-7 grid md:grid-cols-3 grid-cols-1">
                <div className=" md:flex md:justify-center hidden">
                <div style={{
                        backgroundImage: `url("${background}")`
                    }} className="lg:w-[18rem] md:w-[17rem] md:h-[23rem] lg:h-[25rem] hidden md:block bg-cover bg-center self-center" 
                    data-aos="fade-up" data-aos-duration="1500"></div>
                </div>
                <div className="md:p-7 p-2 md:col-span-2">
                    <div data-aos="fade-up" data-aos-duration="1500">
                        <h3 className="text-customBlue font-bold text-xl text-center md:text-left">Discover</h3>
                        <h2 className="text-4xl text-center md:text-left font-bold underline
                         decoration-customBlue decoration-[4px] underline-offset-[9px]">About Me</h2>
                        <p className="text-justify mt-5">Highly motivated and detail-oriented ICT student with strong communication and analytical skills. Proven ability
                        to learn new technologies quickly, ability to work well in a team environment, and strong problem-solving skills.
                        Passionate about technology and eager to contribute to the industry through a challenging and dynamic work
                        environment.</p>
                    </div>
                    <div className="flex md:flex-row flex-col md:justify-between text-center md:text-left mt-4 md:mt-5
                    border-dashed gap-2 border-[4px] lg:p-8 p-4 rounded-lg border-customBlue lg:mt-8 md:text-base text-sm" data-aos="fade-up" data-aos-duration="1500">
                        <ul>
                            <li><span className="font-bold">Name:</span> Lord Miacky Keiji Plata</li>
                            <li><span className="font-bold">Age:</span> 21</li>
                            <li><span className="font-bold">Address:</span> Cainta, Rizal</li>
                            <li><span className="font-bold">Nationality:</span> Filipino</li>
                        </ul>
                        <ul>
                            <li><span className="font-bold">Sex:</span> Male</li>
                            <li><span className="font-bold">Phone:</span> 09980752227</li>
                            <li><span className="font-bold">Email:</span> lordmiackykeijip@gmail.com</li>
                            <li><span className="font-bold">Telephone:</span> 89971255</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe