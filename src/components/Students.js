import courseImg from "../assets/online-study.png";
import globe from "../assets/table-globe.png";
import hat from "../assets/graduation-hat.png";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import css from "../assets/css.png";
import ether from "../assets/ether.png";

import TestimonialCard from "./TestimonialCard";
import ShowcaseCard from "./ShowcaseCard";

const Students = () => {
  return (
    <div className="my-0 text-center dark:bg-darkBackgroundColor ">
      <h1 className="py-16 text-5xl font-semibold dark:text-darkTextColor sm:text-3xl text-ineuron group ">
        "Pure Hardwork, No Shortcuts!"
        <div className="h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      <div className="flex justify-between mx-40 mt-10 sm:mt-5 sm:flex-col sm:mx-7 sm:gap-10 sm: card-container">
        <ShowcaseCard
          Heading="10000+"
          Description="Job Interview Cracked"
          Image={hat}
        />
        <ShowcaseCard
          Heading="400+"
          Description="Different Courses"
          Image={courseImg}
        />
        <ShowcaseCard
          Heading="70+"
          Description="Available Countries"
          Image={globe}
        />
      </div>

      <h1 className="text-5xl text-[#343434] dark:text-darkTextColor sm:text-3xl mt-28 group font-semibold py-12 ">
        "Hall of fame"
        <div className="h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      <div className="flex items-center justify-between mx-40 mt-24 space-x-20 sm:flex-col sm:mt-14 sm:mx-auto sm:space-x-0 sm:w-screen ">
        <TestimonialCard
          image={person1}
          title="Johnas Sam"
          description="I was following Krish Sir YouTube channel for more than 2-3 year."
          dev={js}
        />
        <TestimonialCard
          image={person2}
          title="Richard"
          description="A few days back I was scheduled for an interview at ECOLABS. Thanks to Naveen Reddy sir and his wonderful Youtube channel"
          dev={css}
        />
        <TestimonialCard
          image={person3}
          title="Alex Andres"
          description="I have enrolled for your ML course two years back ,Python you taught in that I have cracked about 5 interview and concepts were also so much cleared ."
          dev={ether}
        />
        <TestimonialCard
          image={person4}
          title="Amanda Richard"
          description="B. Tech Computer Science and Engineering from Bundelkhand University, Jhansi. I recently get placed in Wells Fargo for the position of Program Associate on 20 LPA package."
          dev={ts}
        />
      </div>
    </div>
  );
};

export default Students;
