import React from "react";
// import css
import "./menu.css";
import "../css/media.css";
// import icons
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import {
  FcShop,
  FcManager,
  FcDocument,
  FcPhone,
  FcGraduationCap,
  FcPositiveDynamic,
  FcFeedback,
} from "react-icons/fc";
export const Menu = (props) => {
  return (
    <header id="sider">
      <div className="menu">
        <div className="icons">
          <ul>
            <li className="wp">
              <a href="https://bit.ly/3Rypswq" target="_blank">
                <FaWhatsappSquare />
              </a>
            </li>
            <li className="lin">
              <a href="https://www.linkedin.com/in/harsh-patidar-457851259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFAir%2FdqjThixd%2FfsOEizDQ%3D%3D" target="_blank">
                <FaLinkedin />
              </a>
            </li>
            <li className="git">
              <a href="https://github.com/Harshu20a" target="_blank">
                <FaGithubSquare />
              </a>
            </li>
            <li className="feed">
              <a href="https://hp5211804@gmail.com" target="_blank">
                <FcFeedback />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-bar">
          <div className="row">
            <div className="reacticon">
              {props.iconvalue == true ? (
                <ul>
                  <li>
                    <FcShop />
                    <a href="#topbar">home</a>
                  </li>
                  <li>
                    <FcManager />
                    <a href="#about">about</a>
                  </li>
                  <li>
                    <FcPositiveDynamic />
                    <a href="#skill">skills</a>
                  </li>
                  <li>
                    <FcDocument />
                    <a href="#projects">project</a>
                  </li>
                  <li>
                    <FcGraduationCap />
                    <a href="#study">education</a>
                  </li>
                  <li>
                    <FcPhone />
                    <a href="#personalinformation">contact</a>
                  </li>
                </ul>
              ) : (
                <ul className="hideli">
                  <li>
                    <FcShop />
                  </li>
                  <li>
                    <FcManager />
                  </li>
                  <li>
                    <FcPositiveDynamic />
                  </li>
                  <li>
                    <FcDocument />
                  </li>
                  <li>
                    <FcGraduationCap />
                  </li>
                  <li>
                    <FcPhone />
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
