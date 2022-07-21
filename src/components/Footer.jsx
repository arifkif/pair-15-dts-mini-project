import React from "react";
import bg from "../assets/footer-bg.jpg";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        className="relative py-[6rem] px-[2rem] bg-top bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full text-white">
          <div className="flex justify-center items-center mb-5 ">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-[100px]" />
            </NavLink>
          </div>
          <div className="flex justify-around items-center ">
            <div className="flex flex-col items-center">
              <NavLink to="/">Audio and Subtitles</NavLink>
              <NavLink to="/">Media Center</NavLink>
              <NavLink to="/">Security</NavLink>
              <NavLink to="/">Contact Us</NavLink>
            </div>
            <div className="flex flex-col items-center">
              <NavLink to="/">Audio Description</NavLink>
              <NavLink to="/">Investor Relations</NavLink>
              <NavLink to="/">Legal Provisions</NavLink>
            </div>
            <div className="flex flex-col items-center">
              <NavLink to="/">Help center</NavLink>
              <NavLink to="/">Jobs</NavLink>
              <NavLink to="/">Cookie Preferences</NavLink>
            </div>
            <div className="flex flex-col items-center">
              <NavLink to="/">Gift Cards</NavLink>
              <NavLink to="/">Terms of Use</NavLink>
              <NavLink to="/">Corporate Information</NavLink>
            </div>
          </div>
          <NavLink to="/">
            <button className="border py-2 px-4 mb-5">Service Code</button>
          </NavLink>
          <p>© Pair 55, All Right Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
