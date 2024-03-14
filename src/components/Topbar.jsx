import React from "react";
// import css
import "./topbar.css";
import "../css/media.css";
// import icons
import { FcGallery, FcBookmark } from "react-icons/fc";
import TypewriterComponent from "typewriter-effect";
export const Topbar = () => {
  return (
    <div className="container" id="topbar">
      <div className="top">
        <div className="border size">
          <div className="typewritterbox">
            <h1>I am Harsh</h1>
            <TypewriterComponent
              options={{
                strings: ["", "front-end-devloper"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="btn">
            {/* <button className=" btn btn-primary portfolio">
              <FcGallery />
              <a href="">View Portfolio</a>
            </button> */}
            <button className="btn resume">
              <FcBookmark />
              <a href="https://drive.google.com/file/d/18GGNJsQakIQBPYONcbKha5mLG9JGMeui/view?usp=drivesdk">
                View Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
