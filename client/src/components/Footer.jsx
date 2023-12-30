import React from "react";
import { GiMineralHeart } from "react-icons/gi";
import background from "../images/keijiCutdesign.png";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaMobileAlt, FaEnvelope, FaCoffee } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  const data = [
    { logo: <FaMobileAlt />, info: "09980752227", title: "Mobile" },
    {
      logo: <FaEnvelope />,
      info: "lordmiackykeijip@gmail.com",
      title: "Email",
    },
    { logo: <BsFillTelephoneFill />, info: "89971255", title: "Telephone" },
    { logo: <FaCoffee/>, info: "Cainta, Rizal, Philippines", title: "Meet me" },

  ];
  return (
    <div className="bg-customBlue">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:p-10 md:p-8 p-6 md:gap-16 gap-14">
        <div className="flex gap-2 md:justify-end justify-center items-center">
          <div className="flex flex-col md:gap-10 gap-6 w-full">
            <div className="flex flex-col gap-1">
              <div className="bg-white w-28 rounded-lg flex justify-center items-center">
                <h3 className="text-customBlue font-Poppins">Get in Touch</h3>
              </div>

              <h2 className="text-white font-poppins lg:text-5xl md:text-4xl text-3xl font-bold">
                Talk Or Meet With Me
              </h2>
            </div>
            <div className="flex flex-col gap-6 w-full">
              {data.map((item) => (
                <div className="flex flex-row lg:gap-4 md:gap-3 gap-2 w-full">
                  <div className="lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10 rounded-lg bg-white flex justify-center items-center">
                    <div className="lg:text-3xl text-xl text-customBlue">{item.logo}</div>
                  </div>
                  <div className="flex flex-col">
                      <h3 className="text-white font-bold lg:text-lg md:text-base text-sm font-Poppins ">
                        {item.title}
                      </h3>
                    <h2 className="text-white font-Poppins lg:text-2xl md:text-lg text-base">
                      {item.info}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 md:justify-start justify-center items-center">
          <div className="flex flex-col md:gap-10 gap-6 w-full">
            <div className="flex flex-col gap-1">
              <div className="bg-white w-36 rounded-lg flex justify-center items-center">
                <h3 className="text-customBlue font-Poppins">Estimate Project</h3>
              </div>

              <h2 className="text-white font-poppins lg:text-5xl md:text-4xl text-3xl font-bold">
                Let Me Know Here
              </h2>
            </div>
            <form className="flex flex-col gap-3 font-Poppins">
                <input type="text" placeholder="Name" className="p-3 rounded-md w-full"/>
                <input type="email" placeholder="Email" className="p-3 rounded-md w-full"/>
                <textarea name="description" id="" rows="7" placeholder="Description" className="w-full p-3 rounded-md"></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
