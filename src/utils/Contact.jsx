import React from "react";
// import icons
import { FcGlobe, FcPhone, FcFeedback } from "react-icons/fc";
// import css
import "./contact.css";
import "../css/media.css";
import { Footer } from "../components/Footer";
export const Contact = () => {
  return (
    <div className="contact" id="personalinformation">
      <hr />
      <div className="contact-layout">
        <div className="contact-heading">
          <h1>contact</h1>
        </div>
        <div className="contact-text">
          <p>
            I hope this message finds you well. My name is [HARSH PATIDAR], and
            I am reaching out to you regarding you can tell me how you liked my
            portfolio by the email.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <div className="card contact-box">
              <div className="card-body contact-describtion">
                <div className="location">
                  <h4>
                    <a href="https://goo.gl/maps/pa3oDUtrQ4cF6pS46">
                      <FcGlobe />
                    </a>
                    location
                  </h4>
                  <p>
                    chitawad road, radhaswami nagar, navlakha indore , madhya
                    pradesh
                  </p>
                </div>
                <div className="location">
                  <h4>
                    <a href="https://hp5211804@gmail.com">
                      <FcFeedback />
                    </a>
                    email
                  </h4>
                  <p>hp5211804@gmail.com</p>
                </div>
                <div className="location">
                  <h4>
                    <a href="tel:+917745987468">
                      <FcPhone />
                    </a>
                    call
                  </h4>
                  <p>+91 7745987468</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
