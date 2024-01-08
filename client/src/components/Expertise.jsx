import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// icons
import { FaPaintBrush } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
AOS.init();

const Expertise = () => {
  return (
    <div
      className="w-100 lg:h-[700px] md:h-[800px] h-[1500px] md:mt-10 mt-1 md:mb-4 px-4 mb-10"
      id="experties"
    >
      <h3
        className="text-center font-Poppins text-customBlue font-bold text-xl"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Experties
      </h3>
      <h2
        className="text-center font-Poppins text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        What I do?
      </h2>

      <div
        className="grid md:grid-cols-2 gap-5 grid-cols-1 mt-10"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div
          className="bg-customBlue text-white rounded-md lg:p-7 md:p-5 p-4 flex flex-col gap-3 md:order-1 order-1"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-lg bg-white flex justify-center items-center">
              <div className="text-2xl text-customBlue">
                <FaPaintBrush />
              </div>
            </div>

            <h3 className="text-xl font-bold font-Poppins">
              Interactive User Experiences
            </h3>
          </div>
          <div className="text-justify font-Poppins">
            <p>
              With full stack expertise, I develop interactive web applications,
              prioritizing user-centric design and seamless functionality for
              compelling digital experiences. Combining creativity with
              technical precision, I craft immersive digital experiences that
              prioritize user-centric design and seamless functionality.
            </p>
          </div>
        </div>
        <div
          className="rounded-md border-4 border-dashed border-customBlue lg:p-7 md:p-5 p-4 flex flex-col gap-3 md:order-2 order-2"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-lg bg-customBlue flex justify-center items-center">
              <div className="text-2xl text-white">
                <FaCode />
              </div>
            </div>

            <h3 className="text-xl font-bold font-Poppins">
              Full Stack Development
            </h3>
          </div>
          <div className="text-justify font-Poppins">
            <p>
              As a full stack web developer, I specialize in crafting dynamic
              and responsive websites by seamlessly integrating both front-end
              and back-end technologies. My passion lies in creating robust and
              user-friendly applications that deliver a seamless digital
              experience.
            </p>
          </div>
        </div>

        <div
          className="rounded-md border-4 border-dashed border-customBlue lg:p-7 md:p-5 p-4 flex flex-col gap-3 md:order-3 order-4"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-lg bg-customBlue flex justify-center items-center">
              <div className="text-2xl text-white">
                <FaUser />
              </div>
            </div>

            <h3 className="text-xl font-bold font-Poppins">
              Collaborative Development
            </h3>
          </div>
          <div className="text-justify font-Poppins">
            <p>
              Fostering a collaborative environment, I excel in working within
              cross-functional teams to build web solutions that seamlessly
              blend functionality and aesthetics. With a keen eye for effective
              communication, I strive to create an inclusive atmosphere that
              enhances teamwork and propels project success.
            </p>
          </div>
        </div>
        <div
          className="bg-customBlue text-white rounded-md lg:p-7 md:p-5 p-4 flex flex-col gap-3 md:order-4 order-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-lg bg-white flex justify-center items-center">
              <div className="text-2xl text-customBlue">
                <FaCog />
              </div>
            </div>

            <h3 className="text-xl font-bold font-Poppins">
              Adaptable Development
            </h3>
          </div>
          <div className="text-justify font-Poppins">
            <p>
              Thriving in the ever-evolving landscape of web technologies, I
              bring adaptability to the forefront of my development approach. I
              easily navigate through emerging frameworks and tools, ensuring
              that my skill set is finely tuned to meet the dynamic demands of
              the digital realm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
