import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Projects ({name, image, link}) {
    return(
        <div className="p-2 border-4 border-dashed rounded-lg border-customBlue m-2 relative group" data-aos="flip-up" data-aos-duration="1500">
        <div className="absolute inset-0 bg-black rounded-lg opacity-0 group-hover:opacity-50 transition-opacity cursor-pointer
        flex items-end justify-between">
            </div>
            <p className="absolute bottom-1 text-white lg:text-lg text-lg md:text-base font-bold md:m-2 lg:m-5 m-5 opacity-0 group-hover:opacity-100 transition-opacity">{name}</p>
            <a href={link} target="_blank">
                    <button className="absolute bottom-1 right-1 bg-white text-customBlue lg:w-20 md:w-16 md:h-8 h-10 w-20 py-1 px-4 lg:m-5 md:m-2 m-5 rounded hover:bg-customlightBlue
                    duration-500 hover:text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        Visit
                    </button>
                </a>
        <div style={{
                backgroundImage: `url(${image})`
            }} className="bg-cover bg-center h-52 w-full rounded-md"></div>
        </div>
    );
}

export default Projects