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
import gsap from "gsap";
import { useEffect } from "react";
const Students = () => {
  return (
    <div className="h-screen -mt-3 text-center">
      <h1 className="py-12 text-5xl font-semibold text-white group bg-ineuron ">
        "Pure Hardwork, No Shortcuts!"
        <div className=" h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      <div className="flex justify-between mx-40 mt-20 card-container">
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

      <h1 className="text-5xl text-[#343434]  mt-28 group font-semibold py-12 ">
        "Hall of fame"
        <div className=" h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      <div className="flex items-center justify-between mx-40 mt-24 space-x-20 testimonial-card-container">
        <TestimonialCard
          image={person1}
          title="Johnas Sam"
          description="I was following Krish Sir YouTube channel for more than 2-3 year."
          dev={js}
        />
        <TestimonialCard
          image={person2}
          title="Richard"
          description="I was following Krish Sir YouTube channel for more than 2-3 year."
          dev={css}
        />
        <TestimonialCard
          image={person3}
          title="Alex Andres"
          description="I was following Krish Sir YouTube channel for more than 2-3 year."
          dev={ether}
        />
        <TestimonialCard
          image={person4}
          title="Amanda Richard"
          description="I was following Krish Sir YouTube channel for more than 2-3 year."
          dev={ts}
        />
      </div>
    </div>
  );
};

export default Students;
