import React from "react";
import logo from './images.png'

const Home = () => {
  return (
    <>
      <div className="home">
        <img className="userimage" src={logo} alt="" />
        <div className="infohome">
          <h2> Hello I'am Devilal Panchal</h2>
          <p className="infomationUser">
            I'm a passionate Frontend developer. My expertise is to create and
            website design, graphic design and assisted in the development of
            front-end components and features for web applications, gaining
            hands-on experience with HTML, CSS, JavaScript, and front-end
            frameworks many more...
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
