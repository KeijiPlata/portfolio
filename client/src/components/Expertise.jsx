import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Expertise = () => {
    return(
        <div className='px-4 mb-20' id="experties">
             <h3 className="text-center text-customBlue font-bold text-xl" 
             data-aos="fade-up" data-aos-duration="1500">Experties</h3>
            <h2 className="text-center text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]" 
             data-aos="fade-up" data-aos-duration="1500">What I do?</h2>
        </div>
    )
}

export default Expertise;