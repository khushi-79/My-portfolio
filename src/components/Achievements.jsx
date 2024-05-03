"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ssip from "../assets/ssip.jpg";
import azure from "../assets/azure.png";
import yolo from "../assets/yolo.png";
import coursera from "../assets/coursera.png";
import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  logo,
  react,
} from "../constants/Constant";

const Achievements = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="achievements"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            ACHIEVEMENTS AND EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={yolo}
              title="Internship in Deep Learning"
              subtitle="Intern"
              date="August 2023 - February 2024"
              para="- In this internship my team was working on project given by client - Object Recognition and Invoice Generation for their own products"
            />
            <Exp_prop
              img={azure}
              title="AzureQuest: Microsoft Azure Fundamentals Challenge"
              subtitle="Certification"
              date="January 2024"
              para="- Completed full course of this module and collect knowledge about cloud."
            />
            <Exp_prop
              img={react}
              title="Internship in React js"
              subtitle="Trainee"
              date="May 2023 - July 2023"
              para="- In this internship I was learning react.js and node.js, and doing tasks given by senior in company (in Rajkot)"
            />
            <Exp_prop
              img={logo}
              title="Data Science Club"
              subtitle="Ex-General secretary"
              date="January 2023-June 2023"
              para="- Student club work for students by students only. Arrange various events to give knowledge of Data science related fields in my University."
            />
            <Exp_prop
              img={ssip}
              title="SSIP Hackathon 2023"
              subtitle="Finalist"
              date="January 2023"
              para="-  In SSIP Hackathon Azadi ka Amrut Mahotsav, made EASYMEDI PORTAL for doctors to help them to manage database of patient with help of Health-card"
            />
            <Exp_prop
              img={coursera}
              title="Certifications"
              subtitle="Python, Deep Learning, Machine Learning"
              date="January 2022 - September 2023"
              para="- Learnt basics of artificial intelligence from online platform for future word and understanding "
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Achievements;
