import React from "react";
// import css
import "./projects.css";
import "../css/media.css";
// import image
import img1 from "../img/grandcoffeeweb.png";
import img2 from "../img/restroweb.png";
import img3 from "../img/calculator.png";
import img4 from "../img/Loginproject.png";
export const Projects = () => {
  return (
    <div className="project" id="projects">
      <hr />
      <h1>projects</h1>
      <div className="row project-content">
        <div className="col-sm-6 my-3 project-data">
          <div className=" project-box">
          <a href="https://grandcoffeeweb.netlify.app/" target="
            _blank">
            <img src={img1} />
          </a>
          <h4>grandcoffee website</h4>
          <div className="card-body project-describtion">
            <p className="card-text project-text">
              This website is a user interface based on coffee information.In this website using on html and css.
            </p>
          </div>
          </div>
        </div>
        <div className="col-sm-6 my-3 project-data">
          <div className=" project-box">
            <a href="https://restaurantwebis.netlify.app/" target="
            _blank">
              <img src={img2} />
            </a>
            <h4>restro website</h4>
            <div className="card-body project-describtion">
              <p className="card-text project-text">
                By using this website is know the more details in restaurant food .In this website using html css and bootstrap and it also mobile responsive.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-3 project-data">
          <div className=" project-box">
            <a href="https://digitalcalculatorprojects.netlify.app/" target="
            _blank">
              <img src={img3} />
            </a>
            <h4>calculator</h4>
            <div className="card-body project-describtion">
              <p className="card-text project-text">
                The using of calculator easy do plus , multiplication, divide, and substration and get easy output. In calculator makeing using javascript. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 my-3 project-data">
          <div className=" project-box">
            <a href="https://reactloginapplication.netlify.app/" target="
            _blank">
              <img src={img4} />
            </a>
            <h4>restaurant login</h4>
            <div className="card-body project-describtion">
              <p className="card-text project-text">
                In restaurant website i am using react js to login page with separate email password. From restaurant page you can add multiple data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
