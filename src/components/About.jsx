import React from "react";
// import image
import aboutimg from "../img/profile.jpeg";
// import css
import "./about.css";
import "../css/media.css";
import { Skills } from "../assets/Skills";
import { Projects } from "../assets/Projects";
import { Education } from "../utils/Education";
import { Contact } from "../utils/Contact";
export const About = () => {
  return (
    <div className="container" id="about">
      <hr />
      <div className="aboutus">
        <h2 className="animate__bounceOut wow">About us</h2>
        <div className="about-content">
          <div className="about-left">
            <div className="about-text">
              <p className="animate__animated animate__bounceInLeft">
                I am a graduate who is seeking to find the opportunity to work
                in a fun and challenging working enviornment that will encourage
                me to improve and learn new and necessary skills as well as be
                motivated by the company to do my best for the sake of helping
                myself and company advancement.
              </p>
            </div>
          </div>
          <div className="about-right">
            <div className="about-image">
              <img
                className="animate__animated animate__zoomInDown wow"
                src={aboutimg}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};
