import "../css/Hero.css";
import bg from "../assets/bg.png";
import hero from "../assets/hero.png";
import line from "../assets/line.png";
import { gsap } from "gsap";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({ ease: "power2" });
    tl.fromTo(
      "#heroImage",
      { opacity: 0, y: "0" },
      { opacity: 1, y: "20", duration: 0.2, ease: "power1" }
    );
    gsap.fromTo(
      "#heroHeading",
      { opacity: 0.6, x: "-30" },
      { opacity: 1, x: "0" }
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
    <div className="flex h-[86vh] items-center">
      <div className="ml-40">
        <p className="font-semibold text-lg text-[#2f2f2f]">
          Learn from the best of Industry
        </p>
        <div
          id="blueDiv"
          className="h-[12px] -mt-[14px] -ml-1 w-52  bg-[#1a2fce3f]"
        ></div>
        <h1
          className="text-6xl gradient-text relative -ml-[4px] my-5 font-bold  font-[Montserrat] leading-tight"
          id="heroHeading"
        >
          Highest in quality, affordable in Price
        </h1>
        <p className="text-xl leading-snug text-[#494949] w-[60%] mb-7">
          Digital entrepreneurs, Youtubers and content creators provide
          affordable courses across technologies.
        </p>
        <button
          id="getStartedBtn"
          className="duration-200 btn btn__primary hover:px-12"
        >
          <a href="#getStarted">Get Started</a>
        </button>
      </div>
      <div className="w-1/2 right-section">
        <img
          className="absolute top-0 right-0 h-full -z-10"
          id="backgroundImage"
          src={bg}
          alt=""
        />
        <img
          className="absolute top-60 right-20 w-[55%]"
          id="heroImage"
          src={hero}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
