import React from "react";
// import css
import "../css/media.css";
import "./education.css";
// import icons
import { FaBook } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export const Education = () => {
  return (
    <div className="education" id="study">
      <hr />
      <div className="education-content">
        <h1>education</h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(230,230,250)",
            borderTop: "4px solid black",
          }}
          contentArrowStyle={{
            borderRight: "10px solid  rgb(230,230,250)",
            color: "black",
          }}
          date="2014-2016"
          iconStyle={{ background: "rgb(230,230,250)", color: "black" }}
          icon={<FaBook />}
        >
          <h3 className="vertical-timeline-element-title">10th CBSE</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Krishna Academy Dhargaon
          </h4>
          <p>Percent 5.8 CGPA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(230,230,250)",
            borderTop: "4px solid black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(230,230,250)",
            color: "black",
          }}
          date="2016-2018"
          iconStyle={{ background: "rgb(230,230,250)", color: "black" }}
          icon={<HiSquare3Stack3D />}
        >
          <h3 className="vertical-timeline-element-title">12th CBSE</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Krishna Academy Dhargaon
          </h4>
          <p>Percent 58%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(230,230,250)",
            borderTop: "4px solid black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(230,230,250)",
            color: "black",
          }}
          date="2019-2021"
          iconStyle={{ background: "rgb(230,230,250)", color: "black" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">B.sc</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Shri Kanwartara Science & Commerce College (affili. by DAVV
            University)
          </h4>
          <p>Percent 70%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(230,230,250)",
            borderTop: "4px solid black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  rgb(230,230,250)",
            color: "black",
          }}
          date="2021-2023"
          iconStyle={{ background: "rgb(230,230,250)", color: "black" }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title">MBA</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sage University
          </h4>
          <p>Percent 8 SGPA%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
