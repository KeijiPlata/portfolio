import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import { FaMobileAlt, FaEnvelope, FaCoffee } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [state, handleSubmit] = useForm("xgegejbo");
  if (state.succeeded) {
    toast.success("Sent Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  if (state.errors) {
    toast.error("Something went wrong ...", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  const data = [
    { logo: <FaMobileAlt />, info: "09980752227", title: "Mobile" },
    {
      logo: <FaEnvelope />,
      info: "lordmiackykeijip@gmail.com",
      title: "Email",
    },
    { logo: <BsFillTelephoneFill />, info: "89971255", title: "Telephone" },
    {
      logo: <FaCoffee />,
      info: "Cainta, Rizal, Philippines",
      title: "Meet me",
    },
  ];
  return (
    <div className="bg-customBlue dark:bg-customViolet transition-all duration-500">
      <ToastContainer />
      <div className="grid md:grid-cols-2 grid-cols-1 lg:p-10 md:p-8 p-6 md:gap-16 gap-14">
        <div className="flex gap-2 md:justify-end justify-center items-center">
          <div className="flex flex-col md:gap-10 gap-6 w-full">
            <div className="flex flex-col gap-1">
              <div className="bg-white w-28 rounded-lg flex justify-center items-center">
                <h3 className="text-customBlue dark:text-customViolet transtion-all duration-500 font-Poppins">
                  Get in Touch
                </h3>
              </div>

              <h2 className="text-white font-Poppins lg:text-5xl md:text-4xl text-3xl font-bold">
                Talk Or Meet With Me
              </h2>
            </div>
            <div className="flex flex-col gap-6 w-full font-Poppins">
              {data.map((item) => (
                <div className="flex flex-row lg:gap-4 md:gap-3 gap-2 w-full">
                  <div className="lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10 rounded-lg bg-white flex justify-center items-center">
                    <div className="lg:text-3xl text-xl text-customBlue dark:text-customViolet transition-all duration-500">
                      {item.logo}
                    </div>
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
                <h3 className="text-customBlue dark:text-customViolet transition-all duration-500 font-Poppins">
                  Estimate Project
                </h3>
              </div>

              <h2 className="text-white font-Poppins lg:text-5xl md:text-4xl text-3xl font-bold">
                Let Me Know Here
              </h2>
            </div>
            <form
              className="flex flex-col gap-3 font-Poppins"
              onSubmit={handleSubmit}
            >
              <input
                id="name"
                name="Name"
                type="text"
                placeholder="Name"
                className="p-3 rounded-md w-full"
                required
              />
              <ValidationError
                prefix="Name"
                field="text"
                errors={state.errors}
              />
              <input
                id="email"
                name="Email"
                type="email"
                placeholder="Email"
                className="p-3 rounded-md w-full"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea
                name="Description"
                id="description"
                rows="5"
                placeholder="Description"
                className="w-full p-3 rounded-md"
                required
              ></textarea>
              <ValidationError
                prefix="Description"
                field="description"
                errors={state.errors}
              />
              <input
                type="submit"
                value="Submit"
                disabled={state.submitting}
                className="bg-white text-customBlue dark:text-customViolet rounded-md p-2 font-bold w-1/3 hover:bg-customlightBlue dark:hover:bg-customlightViolet hover:text-white dark:hover:text-white transition-all duration-500"
              ></input>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-customBgblack py-7 md:py-4 px-8 md:px-5 grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="flex flex-row md:gap-3 gap-2 items-center text-3xl md:justify-start justify-center">
          <a
            href="https://github.com/KeijiPlata"
            target="_blank"
            className="
                            transition-all duration-500 hover:text-customlightBlue dark:hover:text-customlightViolet text-customBlue dark:text-white"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.facebook.com/lordmiackykeiji"
            target="_blank"
            className="
                            transition-all duration-500 hover:text-customlightBlue dark:hover:text-customlightViolet text-customBlue dark:text-white"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/lord-miacky-keiji-plata/"
            target="_blank"
            className="
                            transition-all duration-500 hover:text-customlightBlue dark:hover:text-customlightViolet text-customBlue dark:text-white"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className="flex flex-row items-center md:justify-end justify-center w-full">
          <div className="flex flex-row items-center md:justify-end justify-center w-4/5">
            <h2 className="font-Poppins text-sm text-center md:text-left text-black dark:text-white transition-all duration-500">
              Designed in{" "}
              <span className="font-bold text-customBlue dark:text-customViolet transtion-all duration-500">
                Figma
              </span>
              , Coded in{" "}
              <span className="font-bold text-customBlue dark:text-customViolet transtion-all duration-500">
                Visual Studio Code
              </span>
              , with{" "}
              <span className="font-bold text-customBlue dark:text-customViolet transtion-all duration-500">
                ReactJS
              </span>{" "}
              and{" "}
              <span className="font-bold text-customBlue dark:text-customViolet transtion-all duration-500">
                Tailwind CSS
              </span>
              , Deployed with{" "}
              <span className="font-bold text-customBlue dark:text-customViolet transtion-all duration-500">
                GitHub
              </span>
              .
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
