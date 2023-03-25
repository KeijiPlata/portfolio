import React from "react";

function Cards ({icon, name}) {
    return(
        <div className=" flex justify-center items-center">
        <div className="border-4 w-32 h-40 rounded-lg border-white flex flex-col justify-center items-center">
            <div className="text-white text-6xl">
               {icon}
            </div>
            <h3 className="text-white">{name}</h3>
        </div>
    </div>
    );
}
export default Cards