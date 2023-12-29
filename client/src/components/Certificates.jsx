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
        "Attained National Certificate III (Java) by mastering core Java concepts and executing projects integrating PHP as the database.",
      tags: ["TESDA", "Joysis"],
      link: "https://drive.google.com/file/d/1ExkIcwsmW_9qsKmS50XZWfjIQBXRzgE_/view?usp=sharing",
    },
    {
      title: "Creative Web Design",
      description:
        "Achieved Creative Web Design certification by mastering Photoshop, creating wireframes, and utilizing Bootstrap to develop a final project website.",
      tags: ["TESDA", "MindTech"],
      link: "https://drive.google.com/file/d/1iS0s7XcD9dEEZ-r6EWC_TJhXXnmWrjkw/view?usp=sharing",
    },
    {
      title: "Finalist: AIA Lifehackers 2022 Hackventure",
      description:
        "Received 'Finalist: AIA Lifehackers 2022 Hackventure' certification for pitching our innovative business idea in the competition.",
      tags: ["PUP", "AIA"],
      link: "https://drive.google.com/file/d/1BPOnaTI89FzfJ742EJTGzwGCrrHZm1dj/view?usp=sharing",
    },
    {
      title: "Finalist: Undergraduate Research Competition 2023",
      description:
        "Received 'Finalist: Undergraduate Research Competition 2023' for defending our capstone paper and presenting the prototype.",
      tags: ["PUP", "RIST"],
      link: "https://drive.google.com/file/d/1wHrwTGdQcBOl74Lq85tA0Z-NkyTMRYpj/view?usp=sharing",
    },
    {
      title: "Best Presenter: PUP ITECH Research Symposium",
      description:
        "Awarded 'Best Presenter: PUP iTech Research Symposium' for securing the Best Capstone recognition in the ITech department at PUP.",
      tags: ["PUP", "ITECH"],
      link: "https://drive.google.com/file/d/1uFpi2OTX-eqEK_to8F_fJizdsMwNCffR/view?usp=sharing",
    },
    {
      title: "President Lister",
      description:
        "Awarded 'President's Lister' for achieving a remarkable GPA of 1.30 and below.",
      tags: ["PUP"],
      link: "https://drive.google.com/file/d/1ECla_kiU8pgHITptYq3MX_EICWRL7AEs/view?usp=sharing",
    },
  ];
  return (
    <div
      className="w-100 lg:h-[800px] md:h-[950px] h-[1950px] md:mt-10 mt-16 md:mb-4 px-4 mb-10"
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
          <div
            className="cursor-pointer text-white "
            data-aos="fade-up"
            data-aos-duration="1500"
            onClick={() => window.open(item.link, "_blank")}
          >
            <div className=" flex flex-col justify-between gap-3 hover:-translate-y-2 bg-customBlue rounded-md lg:p-6 md:p-5 p-4 transition ease-in-out h-full duration-200">
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
      <h3
        className="text-center text-customBlue text-xl my-5 font-bold font-Poppins hover:underline"
        data-aos="fade-up"
        data-aos-duration="1500"
        onClick={() =>
          window.open(
            "https://drive.google.com/drive/folders/1y4AIc-ydoNfS413s02MD8zjGPLdy0Ltn?usp=drive_link",
            "_blank"
          )
        }
      >
        View More
      </h3>
    </div>
  );
};

export default Certificates;
