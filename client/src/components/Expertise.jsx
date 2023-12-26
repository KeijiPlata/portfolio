import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

// icons
import { FaTerminal } from "react-icons/fa";
AOS.init();

const Expertise = () => {
  return (
    <div
      className="w-100 md:h-[600px] h-[600px] md:mt-10 mt-1 md:mb-3 px-4 mb-20"
      id="experties"
    >
      <h3
        className="text-center text-customBlue font-bold text-xl"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Experties
      </h3>
      <h2
        className="text-center text-4xl font-bold underline decoration-customBlue
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
          className="bg-customBlue text-white rounded-md p-7 flex flex-col gap-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-lg bg-white flex justify-center items-center">
              <div className="text-2xl text-customBlue">
                <FaTerminal />
              </div>
            </div>

            <h3 className="text-xl font-bold font-Poppins">Development</h3>
          </div>
          <div className="text-justify font-Poppins">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div
          className="rounded-md border-4 border-dashed border-customBlue p-7 flex flex-col gap-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-lg bg-customBlue flex justify-center items-center">
              <div className="text-2xl text-white">
                <FaTerminal />
              </div>
            </div>

            <h3 className="text-xl font-bold font-Poppins">Development</h3>
          </div>
          <div className="text-justify font-Poppins">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div
          className="rounded-md border-4 border-dashed border-customBlue p-7 flex flex-col gap-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-lg bg-customBlue flex justify-center items-center">
              <div className="text-2xl text-white">
                <FaTerminal />
              </div>
            </div>

            <h3 className="text-xl font-bold font-Poppins">Development</h3>
          </div>
          <div className="text-justify font-Poppins">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div
          className="bg-customBlue text-white rounded-md p-7 flex flex-col gap-3"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="w-12 h-12 rounded-lg bg-white flex justify-center items-center">
              <div className="text-2xl text-customBlue">
                <FaTerminal />
              </div>
            </div>

            <h3 className="text-xl font-bold font-Poppins">Development</h3>
          </div>
          <div className="text-justify font-Poppins">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
