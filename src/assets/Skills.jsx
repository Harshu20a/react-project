import React from "react";
// import css
import "./skill.css";
import "../css/media.css";
// import icon
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa6";
import { BsFiletypeJson } from "react-icons/bs";

export const Skills = () => {
  return (
    <div className="tech" id="skill">
      <hr />
      <h1>skills</h1>
      <div className="row skillbg">
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <IoLogoHtml5 style={{ color: "orange", "font-weight": "700" }} />
            <h4 style={{ color: "black", }}>HTML 5</h4>
            <div className="card-body card-content">
              <p className="card-text skilltext">
              "Crafting the web with HTML magic"
Feel free to let me know if you have a specific context or theme in mind, and I can customize it further for you!
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <IoLogoCss3 style={{ color: "blue", "font-weight": "700" }} />
            <h4 style={{ color: "black" }}>CSS 3</h4>
            <div className="card-body card-content">
              <p className="card-text skilltext">
              Styling the web with elegance: The art of CSS.
Crafting pixel-perfect magic with Cascading Style Sheets.
Where design meets code: Unleashing the power of CSS.
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <FaBootstrap style={{ color: "purple", "font-weight": "700" }} />
            <h4 style={{ color: "black" }}>Bootstrap</h4>
            <div className="card-body card-content">
              <p className="card-text skilltext">
              Elevate your web design game with Bootstrap's responsive magic.
Crafting sleek and modern websites effortlessly with Bootstrap.
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <FaMobile style={{ color: "black", "font-weight": "700" }} />
            <h4 style={{ color: "black" }}>
              Mobile Responsive
            </h4>
            <div className="card-body card-content">
              <p className="card-text skilltext">
              Adapting seamlessly to every screen size where innovation meets mobility. 
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <TbBrandJavascript
              style={{ color: "darkorange", "font-weight": "700" }}
            />
            <h4 style={{ color: "black" }}>Javascript</h4>
            <div className="card-body card-content js">
              <p className="card-text skilltext">
              Unleashing the Power of JavaScript: Crafting Interactive and Dynamic Web Experiences.
              will i am using of javascript in calculator.
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <FaReact style={{ color: "#2962ff", "font-weight": "700" }} />
            <h4 style={{ color: "black" }}>React js</h4>
            <div className="card-body card-content rjs">
              <p className="card-text skilltext">
              Exploring the dynamic world of React and building immersive user interfaces.
              will i am using of react in react login application.
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <TbBrandRedux style={{ color: "#2962ff", "font-weight": "700" }} />
            <h4 style={{ color: "black" }}>Redux</h4>
            <div className="card-body card-content rd">
              <p className="card-text skilltext">
              Empower Your React App with Redux: Unleashing the Power of State Management  A Deep Dive into Redux for Enhanced Scalability and Predictable State Management.
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <FaLaptopCode style={{ color: "black", "font-weight": "700" }} />
            <h4 style={{ color: "black" }}>
              Reduxtoolkit
            </h4>
            <div className="card-body card-content rdt">
              <p className="card-text skilltext">
              Empower Your React Applications with Redux Toolkit: Streamlined State Management for Effortless Development.
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-4 my-3 content">
          <div className="card cardcss">
            <BsFiletypeJson
              style={{ color: "#1a0dab", "font-weight": "700" }}
            />
            <h4 style={{ color: "black" }}>RestAPI</h4>
            <div className="card-body card-content rapi">
              <p className="card-text skilltext">
              Explore the World of RESTful APIs: Unveiling the Power of Seamless Communication and Data .
              </p>
              <div className="progress">
                <div class="skills html"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
