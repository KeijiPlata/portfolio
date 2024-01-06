import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//icons
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <div className="flex flex-col gap-14 font-Poppins lg:py-10 md:py-14">
      <div>
        <h3
          className="text-center text-customBlue font-bold text-xl"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Qualification
        </h3>
        <h2
          className="text-center text-4xl font-bold underline decoration-customBlue
             decoration-4 underline-offset-[9px]"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          My Journey
        </h2>
      </div>
      <div data-aos="fade-up" data-aos-duration="1500">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - Present"
            iconStyle={{ background: "rgb(150,185,208)", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Bachelor of Science in Information Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-justify">
              Polytechnic University of the Philippines
            </h4>
            <p className="text-justify">
              I'm currently studying again at PUP to get a bachelor degree.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: "rgb(150,185,208)", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Diploma in Information Communication Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-justify">
              Polytechnic University of the Philippines
            </h4>
            <p className="text-justify">
              I graduated from PUP, consistently earning the title of
              President's Lister and receiving the Best Capstone Award.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2023 - July 2023"
            iconStyle={{ background: "rgb(150,185,208)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Back-end Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-justify">
              AHG Lab
            </h4>
            <p className="text-justify">
              Developed and maintained APIs for seamless front and backend
              communication, actively participating in Agile processes,
              including sprint planning and daily stand-ups, and adeptly
              diagnosing and resolving complex bugs in backend code.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August 2022 - November 2022"
            iconStyle={{ background: "rgb(150,185,208)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              App Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-justify">
              Hacktiv Colab Inc
            </h4>
            <p className="text-justify">
              Engaged in cross-functional collaboration with project managers
              and QA engineers, addressing bug fixes and enhancing application
              performance, while actively participating in code reviews and
              daily stand-up meetings to uphold program quality.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2019 - January 2020"
            iconStyle={{ background: "rgb(150,185,208)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              IT Support
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-justify">
              Municipality of Cainta
            </h4>
            <p className="text-justify">
              Delivered prompt technical support to municipal employees by
              resolving hardware and software issues, swiftly addressing
              internet connectivity issues through troubleshooting, and
              proactively conducting routine checks on UTP cables to identify
              and repair potential issues.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2015 - February 2020"
            iconStyle={{ background: "rgb(150,185,208)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Photobooth Attendant
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-justify">
              LikeLoveMyPix Photobooth
            </h4>
            <p className="text-justify">
              Provide event photo booth services, including equipment setup and
              disassembly, operation with technical issue troubleshooting, and
              customization of photo layouts and prints as requested.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
