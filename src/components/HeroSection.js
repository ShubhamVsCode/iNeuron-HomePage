import "../css/Hero.css";
import bg from "../assets/bg.png";

const HeroSection = () => {
  return (
    <div className="flex">
      <div className=" mt-52 ml-40 h-[70vh] space-y-5">
        <p>Learn from the best of Industry</p>
        <h1 className="text-4xl font-bold  font-[Montserrat]">
          Highest in quality, affordable in Price
        </h1>
        <p className="text-xl w-[70%]">
          Digital entrepreneurs, Youtubers and content creators provide
          affordable courses across technologies.
        </p>
        <button className="btn btn__primary">Get Started</button>
      </div>
      <div className="right-section w-1/2">
        {/* <img className="absolute right-0 top-0 h-full -z-10" src={bg} alt="" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
