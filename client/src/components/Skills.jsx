import React from "react";

const Skills = () => {
    return(
        <div className="px-4">
            <h3 className="text-center text-customBlue font-bold text-xl">Skills</h3>
            <h2 className="text-center text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]">Languages</h2>
            <div className=" w-100 md:h-[500px] h-[650px] md:mt-10 mt-1 mb-24 grid md:grid-cols-3 grid-cols-1">
                <div className="bg-red-500 col-span-2"></div>
                <div className="bg-green-500"></div>
            </div>
        </div>
    )
}

export default Skills