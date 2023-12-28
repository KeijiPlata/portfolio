import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// icons
import { LuFolder } from "react-icons/lu";
import { MdOpenInNew } from "react-icons/md";

const Certificates = () => {
  const data = [
    {
      title: "National Certificate III (Java)",
      description:
        "This is a description for the national certificate III. Design lang muna focus pero description yan bitch.",
      tags: ["TESDA", "Joysis"],
      link: "https://drive.google.com/file/d/1ExkIcwsmW_9qsKmS50XZWfjIQBXRzgE_/view?usp=sharing",
    },
    {
      title: "Creative Web Design",
      description:
        "This is a description for the national certificate III. Design lang muna focus pero description yan bitch.",
      tags: ["TESDA", "MindTech"],
      link: "https://drive.google.com/file/d/1iS0s7XcD9dEEZ-r6EWC_TJhXXnmWrjkw/view?usp=sharing",
    },
    {
      title: "Finalist: AIA Lifehackers 2022 Hackventure",
      description:
        "This is a description for the national certificate III. Design lang muna focus pero description yan bitch.",
      tags: ["PUP", "AIA"],
      link: "https://drive.google.com/file/d/1BPOnaTI89FzfJ742EJTGzwGCrrHZm1dj/view?usp=sharing",
    },
    {
      title: "Finalist: Undergraduate Research Competition 2023",
      description:
        "This is a description for the national certificate III. Design lang muna focus pero description yan bitch.",
      tags: ["PUP", "RIST"],
      link: "https://drive.google.com/file/d/1wHrwTGdQcBOl74Lq85tA0Z-NkyTMRYpj/view?usp=sharing",
    },
    {
      title: "Best Presenter: PUP ITECH Research Symposium",
      description:
        "This is a description for the national certificate III. Design lang muna focus pero description yan bitch.",
      tags: ["PUP", "ITECH"],
      link: "https://drive.google.com/file/d/1uFpi2OTX-eqEK_to8F_fJizdsMwNCffR/view?usp=sharing",
    },
    {
      title: "President Lister",
      description:
        "This is a description for the national certificate III. Design lang muna focus pero description yan bitch.",
      tags: ["PUP"],
      link: "https://drive.google.com/file/d/1ECla_kiU8pgHITptYq3MX_EICWRL7AEs/view?usp=sharing",
    },
  ];
  return (
    <div
      className="w-100 lg:h-[750px] md:h-[850px] h-[1750px] md:mt-10 mt-16 md:mb-4 px-4 mb-10"
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
        {data.map((item) => (
          <div className="cursor-pointer text-white " 
          data-aos="fade-up"
          data-aos-duration="1500"
          onClick={() => window.open(item.link, "_blank")}
          >
          <div
            className=" flex flex-col justify-between gap-3 hover:-translate-y-2 bg-customBlue rounded-md lg:p-6 md:p-5 p-4 transition ease-in-out delay-150 h-full"
           
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
