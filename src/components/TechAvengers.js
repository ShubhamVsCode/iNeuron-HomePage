import hitesh from "../assets/techAvengersImages/hitesh.png";
import telusko from "../assets/techAvengersImages/telusko.png";
import amresh from "../assets/techAvengersImages/amresh.png";
import gauravSen from "../assets/techAvengersImages/gaurav-sen.png";
import Kiran from "../assets/techAvengersImages/Kiran.png";
import krish from "../assets/techAvengersImages/krish.png";
import mysirg from "../assets/techAvengersImages/mysirg.png";
import shudhanshu from "../assets/techAvengersImages/shudhanshu.png";
import Souranghsu from "../assets/techAvengersImages/Souranghsu.png";
import TechAvengerCard from "./TechAvengerCard";

const TechAvengers = () => {
  return (
    <div className={`pt-20 techAvengerBg my-20`}>
      <h1 className="text-5xl sm:text-3xl text-[#343434] mx-auto text-center group font-semibold ">
        "Tech Avengers"
        <div className=" h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      <div className="flex flex-wrap items-center justify-center mx-10 mt-28 gap-28 ">
        <TechAvengerCard
          image={hitesh}
          name="Hitesh Choudhary"
          post="cto"
          className=""
        />
        <TechAvengerCard
          image={telusko}
          name="Navin Reddy"
          post="senior vp"
          className=""
        />
        <TechAvengerCard
          image={krish}
          name="Krish Naik"
          post="CIO"
          className=""
        />

        <TechAvengerCard
          image={shudhanshu}
          name="Shudhanshu"
          post="AI engineer & ceo"
          className=""
        />

        <TechAvengerCard
          image={mysirg}
          name="Saurabh Sukla"
          post="Senior VP"
          className=""
        />

        <TechAvengerCard
          image={Kiran}
          name="Kiran Sahu"
          post="Mentor"
          className=""
        />
        <TechAvengerCard
          image={amresh}
          name="Amresh Bharti"
          post="VP Marketing"
          className=""
        />
        <TechAvengerCard
          image={gauravSen}
          name="Gaurav Sen"
          post="Senior VP"
          className=""
        />
        <TechAvengerCard
          image={Souranghsu}
          name="Souranghsu Pal"
          post="Mentor"
          className=""
        />
      </div>
    </div>
  );
};

export default TechAvengers;
