import "../css/Hero.css";
import logo from "../assets/ineuron-logo.png";

import { gsap } from "gsap";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    gsap.to(".logo", {
      opacity: 0,
      y: "-100%",
      duration: 1,
      delay: 0.4,
      ease: "power1",
    });
    gsap.to(".black-box", {
      y: "100%",
      opacity: 0.6,
      duration: 0.3,
      ease: "power1",
      display: "none",
    });

    gsap.fromTo(
      "#heroHeading",
      { opacity: 0, y: "-10" },
      { opacity: 1, y: "0", duration: 0.3 },
      "-=0.9"
    );
    gsap.fromTo(
      "#getStartedBtn",
      { opacity: 0.6, x: "10" },
      { opacity: 1, x: "0" }
    );
    gsap.fromTo("#blueDiv", { opacity: 0.1, x: "10" }, { opacity: 1, x: "0" });

    return () => {};
  }, []);

  return (
    <div className="flex items-center max-w-6xl py-32 mx-auto my-auto text-center sm:py-10 ">
      <div className="mx-auto ">
        <p className="font-semibold text-lg sm:mb-4 text-[#2f2f2f]">
          Learn from the best of Industry
          <div
            id="blueDiv"
            className="h-[12px] w-52 -mt-3 mx-auto bg-[#1a2fce3f]"
          ></div>
        </p>
        <h1
          className="text-8xl gradient-text sm:leading-snug sm:font-bold sm:uppercase leading-none relative sm:text-5xl -ml-[4px] sm:m-auto my-5 font-bold  font-[Montserrat]"
          id="heroHeading"
        >
          Highest in quality, <br />
          <span className="text-7xl sm:text-5xl ">affordable in Price</span>
        </h1>
        <p className="text-lg sm:mt-5 sm:text-sm w-2/3 mx-auto leading-snug text-[#494949] mb-7">
          Digital entrepreneurs, Youtubers and content creators provide
          affordable courses across technologies.
        </p>
        <button
          id="getStartedBtn"
          className="mx-auto duration-200 btn btn__primary hover:px-12"
        >
          <a href="#getStarted">Get Started</a>
        </button>
      </div>

      <div className="right-section">
        <div className="absolute top-0 left-0 flex items-center justify-center bg-[#fff] w-full h-screen opacity-1 logo">
          <img
            src={logo}
            className="h-60 sm:h-auto sm:mx-10"
            alt=""
            srcset=""
          />
        </div>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-ineuron black-box"></div>
      </div>
    </div>
  );
};

export default HeroSection;
