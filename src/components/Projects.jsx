import Project_prop from "./project_prop";
import {
  GPT4,
  Portfolio,
  Rocket,
  WellBeing,
  Game,
} from "../constants/Constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Brain Tumor Classificaton from MRI scans"
            para="The goal is to provide medical professionals with a tool for accurate brain tumor identification and classification by using AI and ML to close the gap in healthcare and improve patient outcomes."
            img={Portfolio}
            text="Computer Vision • Deep Learning "
          />
          <Project_prop
            title="Invoice Management Application"
            para="It is an application that distinguishes between customers and owners, providing specific privileges for data
            modification"
            img={Rocket}
            text=".NET • MVC Architecture"
          />
          <Project_prop
            title="EASYMEDI PORTAL"
            para="In SSIP Hackathon Azadi ka Amrut Mahotsav, made one portal for doctors to help them to manage database of patient with help of Health-card"
            img={WellBeing}
            text="DJango • SQLite • Python • Bootstrap"
            
          />
          <Project_prop
            title="GRAPH THEORY LEARNING MODULE            "
            para="• This module helps to those who are not aware about graphs and its real life applications.It also have detailed explanation about various graphs
            and things related to graph.
            "
            img={GPT4}
            text="HTML • CSS • D3JS"
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
