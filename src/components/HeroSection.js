import "../css/Hero.css";
import bg from "../assets/bg.png";
import hero from "../assets/hero.png";
import line from "../assets/line.png";

const HeroSection = () => {
  return (
    <div className="flex h-[86vh] items-center">
      <div className="ml-40">
        <p className="font-semibold text-lg text-[#2f2f2f]">
          Learn from the best of Industry
        </p>
        <div className="h-[12px] -mt-[14px] -ml-1 w-52  bg-[#1a2fce3f]"></div>
        <h1 className="text-6xl gradient-text relative -ml-[4px] my-5 font-bold  font-[Montserrat] leading-tight">
          Highest in quality, affordable in Price
        </h1>
        <p className="text-xl leading-snug text-[#494949] w-[60%] mb-7">
          Digital entrepreneurs, Youtubers and content creators provide
          affordable courses across technologies.
        </p>
        <button className="btn btn__primary hover:px-12 duration-200">
          Get Started
        </button>
      </div>
      <div className="right-section w-1/2">
        <img className="absolute right-0 top-0 h-full -z-10" src={bg} alt="" />
        <img className="absolute top-60 right-20 w-[55%]" src={hero} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
