import "../css/Hero.css";
import hero from "../assets/hero.png";
import logo from "../assets/ineuron-logo.png";

import { gsap } from "gsap";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ ease: "power2" });

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

    // tl.fromTo(
    //   "#heroImage",
    //   {
    //     opacity: 0.8,
    //     y: "0",
    //     x: "20",
    //   },
    //   {
    //     opacity: 1,
    //     y: "0",
    //     x: "0",
    //     duration: 0.9,
    //     ease: "back",
    //   },
    //   "+=0.4"
    // );

    gsap.fromTo(
      "#heroHeading",
      { opacity: 0.6, y: "-10" },
      { opacity: 1, y: "0", duration: 0.3 },
      "-=1.2"
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
    <div className="flex items-center max-w-5xl mx-auto my-auto text-center ">
      <div className="">
        <p className="font-semibold  text-lg text-[#2f2f2f]">
          Learn from the best of Industry
          <div
            id="blueDiv"
            className="h-[12px] w-52 -mt-3 mx-auto bg-[#1a2fce3f]"
          ></div>
        </p>
        <h1
          className="text-7xl gradient-text relative -ml-[4px] my-5 font-bold  font-[Montserrat] leading-tight"
          id="heroHeading"
        >
          Highest in quality, affordable in Price
        </h1>
        <p className="text-lg w-2/3 mx-auto leading-snug text-[#494949] mb-7">
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
          <img src={logo} className="h-60" alt="" srcset="" />
        </div>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-ineuron black-box"></div>
      </div>
    </div>
  );
};

export default HeroSection;
