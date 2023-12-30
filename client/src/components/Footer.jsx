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
      <div className="grid md:grid-cols-2 grid-cols-1 p-10 gap-3">
        <div className="flex gap-2 justify-center items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <div className="bg-white w-28 rounded-lg flex justify-center items-center">
                <h3 className="text-customBlue font-Poppins">Get in Touch</h3>
              </div>

              <h2 className="text-white font-poppins text-5xl font-bold">
                Talk Or Meet With Me
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {data.map((item) => (
                <div className="flex flex-row gap-6">
                  <div className="w-16 h-16 rounded-lg bg-white flex justify-center items-center">
                    <div className="text-4xl text-customBlue">{item.logo}</div>
                  </div>
                  <div className="flex flex-col">
                    {/* <div className="bg-white w-28 rounded-lg flex justify-center items-center"> */}
                      <h3 className="text-white font-bold text-lg font-Poppins ">
                        {item.title}
                      </h3>
                    {/* </div> */}

                    <h2 className="text-white font-Poppins text-3xl ">
                      {item.info}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="flex flex-col gap-1">
            <div className="bg-white w-36 rounded-lg flex justify-center items-center">
              <h3 className="text-customBlue font-Poppins">Estimate Project</h3>
            </div>

            <h2 className="text-white font-poppins text-4xl font-bold">
              Let Me Know Here
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
