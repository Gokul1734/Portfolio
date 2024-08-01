import React from "react";
import "../Header/header.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import insta from "../../images/insta.png";
import twitter from "../../images/twitter.png";
import { Nav, NavLink } from "reactstrap";
import resume from "../../resume.pdf";

// import { Popup } from "reactjs-popup";

const header = () => {
  return (
    <div className=" bg-black h-20 justify-center items-center block p-4">
      <Nav className=" justify-end p-4 py-6 mx-8 text-xl imprima-regular ">
        <div id="media" className="mr-auto w-90 py-8 px-12 mt-6 p-2  justify-start right-0 rounded-3xl flex gap-3">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/gokulpriyan-karthikeyan-078652200/"
          >
            <img
              className="hover:scale-110 transition-transform"
              alt=""
              href=""
              src={linkedin}
            />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Gokul1734"
          >
            <img
              className="hover:scale-110 transition-transform"
              alt=""
              src={github}
            />
          </a>
          <a href="https://www.instagram.com/Gokulpriyan_Karthikeyan/">
            <img
              className="hover:scale-110 transition-transform"
              alt=""
              src={insta}
            />
          </a>
          <a href="https://twitter.com/">
            <img
              className="hover:scale-110 transition-transform"
              alt=""
              src={twitter}
            />
          </a>
        </div>
        <NavLink id="nav" href="http://www.google.com">
          Home
        </NavLink>
        <NavLink
          id="nav"
          className=""
          onClick={() => {
            window.scrollTo({
              top: 888, // Adjust as necessary
              behavior: "smooth", // Add smooth scrolling effect
            });
          }}
        >
          Projects
        </NavLink>
        <NavLink
          id="nav"
          className=""
          onClick={() => {
            window.open(resume, "_blank");
          }}
        >
          Resume
        </NavLink>
      </Nav>
    </div>
  );
};

export default header;
