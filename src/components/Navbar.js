import "../css/btn.css";
import "../css/dropdown.css";
import "../css/search.css";

import logo from "../assets/ineuron-logo.png";
import dropdown from "../assets/dropdown.png";
import { useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      "#searchBox",
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power1" }
    );
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between py-6 pl-6 mx-32 navbar">
        <img className="h-10" id="logo" src={logo} alt="" />

        <div id="searchBox" className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.8477 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.8477 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.8477 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z"
                fill="#233C7B"
              />
              <path
                d="M19.7619 18.6121L15.1006 13.9509C14.783 13.6332 14.2686 13.6332 13.951 13.9509C13.6334 14.2682 13.6334 14.7831 13.951 15.1005L18.6122 19.7617C18.771 19.9205 18.9789 19.9999 19.1871 19.9999C19.3949 19.9999 19.603 19.9205 19.7619 19.7617C20.0795 19.4444 20.0795 18.9295 19.7619 18.6121Z"
                fill="#233C7B"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            className="pl-2 w-[14vw] search__input placeholder:overflow-visible py-1 rounded-full focus-visible:outline-none"
            placeholder="What do you want to learn?"
          />
        </div>
        <div className="flex nav__buttons space-x-7">
          <button className="btn btn__secondary">Sign Up</button>
          <button className="btn btn__primary">Sign in</button>
        </div>
      </div>
      <ul className="flex items-center justify-between m-auto navbar__2 text-ineuron space-x-14 max-w-fit">
        <li className="flex items-center drop">
          Courses <img className="w-3 h-3 ml-1" src={dropdown} alt="" />
          <div className="dropdownContain">
            <div className="dropOut">
              <div className="triangle"></div>
              <ul>
                <li>AR VR</li>
                <li>Devops</li>
                <li>Blockchain</li>
                <li>Web Developement</li>
                <li>Mobile Developement</li>
              </ul>
            </div>
          </div>
        </li>
        <li>One Neuron</li>
        <li>Job Portal</li>
        <li>Internship Portal</li>
        <li>Become an affiliate</li>
        <li>Hall of fame</li>
        <li>Blog</li>
        <li className="flex items-center drop">
          Company <img className="w-3 h-3 ml-1" src={dropdown} alt="" />
          <div className="dropdownContain">
            <div className="dropOut">
              <div className="triangle"></div>
              <ul>
                <li>About Us</li>
                <li>Hackathon</li>
                <li>Job Guarantee</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
