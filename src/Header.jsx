import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import Home from "./Mainfolder/Home";
import About from "./Mainfolder/About";
import Services from "./Mainfolder/Services";
import Project from "./Mainfolder/Project";
import Contact from "./Mainfolder/Contact";
const Header = () => {
  return (
    <>
      <Router>
        <div className="header">
          <NavLink className="NavLink" to="/Home">
            <h4>Home</h4>
          </NavLink>
          <NavLink className="NavLink" to="/About">
            <h4>About</h4>
          </NavLink>
          <NavLink className="NavLink" to="/Services">
            <h4>Services</h4>
          </NavLink>
          <NavLink className="NavLink" to="/Project">
            <h4>Project</h4>
          </NavLink>
          <NavLink className="NavLink" to="/Contact">
            <h4>Contact</h4>
          </NavLink>
        </div>
      
        <Routes>
          <Route path="About" element={<About />} />
          <Route path="Home" element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="Project" element={<Project />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;
