import React, { useState } from "react";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Cards ({icon, name, link}) {
    const [animate, setAnimate] = useState(false);

    return(
        <a href={link} target="_blank">
        <div className=" flex justify-center items-center p-2" data-aos="fade-up" data-aos-duration="1500">
        <div onMouseEnter={() => setAnimate(true)} onMouseLeave={() => setAnimate(false)} className={`
        border-4 md:w-24 md:h-36 lg:w-40 lg:h-40 h-40 w-36 rounded-lg border-white border-dashed gap-2 flex flex-col justify-center items-center
        text-white font-bold hover:bg-white hover:text-customBlue cursor-pointer ${animate ? "animate__animated animate__tada": ""}`}>
            <div className="lg:text-6xl md:text-4xl text-5xl">
               {icon}
            </div>
            <h3 className="lg:text-lg md:text-base text-sm">{name}</h3>
        </div>
    </div>
    </a>
    );
}
export default Cards