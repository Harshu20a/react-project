import React, { useState } from "react";
// import links
import "./Layout.css";
import "../css/media.css";
// import images
import aboutimg from "../img/IMG20231228112915.jpg";
// import icons
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Menu } from "../menus/Menu";
import { Topbar } from "../components/Topbar";
import { About } from "../components/About";

export const Layout = () => {
  const [toggle, setToggle] = useState(true);
  const changeIcon = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className="container-fluid ">
        <div className="row">
          <div
            className={
              toggle == true
                ? "col-sm-3 left-side-bar"
                : "col-sm-2 left-side-bar hideicon"
            }
          >
            <div className="arrow-icon">
              <span onClick={changeIcon}>
                {toggle == true ? (
                  <MdOutlineKeyboardDoubleArrowLeft />
                ) : (
                  <MdOutlineKeyboardDoubleArrowRight />
                )}
              </span>
            </div>
            <div className="image">
              <img
                src={aboutimg}
                className={toggle == true ? "propic" : "propicmin hide"}
              ></img>
              <h1 className={toggle == true ? "name" : "namemin size"}>
                harsh patidar
              </h1>
            </div>
            <Menu iconvalue={toggle} />
          </div>
          <div
            className={
              toggle == true
                ? "col-sm-9 main-content"
                : "col-sm-10 main-content"
            }
          >
            <Topbar />
            <About />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Layout;
