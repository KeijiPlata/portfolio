import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// icons
import { LuFolder } from "react-icons/lu";
import { MdOpenInNew } from "react-icons/md";

const Certificates = () => {
  const data = [
    {title: "National Certificate III (Java)", description: "This is a description for the national certificate III. Design lang muna focus pero description yan bitch.", tags: ["TESDA", "Joysis"]}
  ]
  return (
    <div
      className="w-100 lg:h-[600px] md:h-[700px] h-[1375px] md:mt-10 mt-1 md:mb-4 px-4 mb-10"
      id="certificates"
    >
      <h3
        className="text-center text-customBlue font-bold text-xl"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Archive
      </h3>
      <h2
        className="text-center text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Certificates
      </h2>
      <div
        className="grid md:grid-cols-3 gap-4 grid-cols-1 mt-10"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {data.map ((item) => (
                  <div
                  className="bg-customBlue text-white rounded-md p-7 flex flex-col gap-3"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="flex flex-row justify-between items-center">
                    <div className="w-12 h-12 rounded-lg bg-white flex justify-center items-center">
                      <div className="text-3xl text-customBlue">
                        <LuFolder />
                      </div>
                    </div>
                    <div className="text-2xl text-white">
                      <MdOpenInNew />
                    </div>
                  </div>
        
                  <div className="flex flex-col gap-3 font-Poppins">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-justify">{item.description}</p>
                  </div>
        
                  <div className="flex flex-row gap-2 font-Poppins text-customBlue">
                      {item.tags.map((tag) => (
                         <p className="bg-white p-2 rounded-md">{tag}</p>
                      ))}
                  </div>
                </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
