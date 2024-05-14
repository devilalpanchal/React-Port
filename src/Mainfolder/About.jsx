import React from "react";
// import { logo } from "../assets/images.png";
import logo from './images.png'
const About = () => {
  return (
    <>
      <div className="about">
        <img className="userimage" src={logo} alt="" />
        <div className="infoabout">
          <h2>Devilal Panchal</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime numquam delectus voluptatum. Repellat, esse quidem. Dolores maxime vitae dolor?</p>
        </div>
      </div>
    </>
  );
};

export default About;
