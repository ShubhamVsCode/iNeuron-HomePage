import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";

import "../css/tab.css";
import NuemorphicCard from "./NeumorphicCard";

const WhatYouLearn = () => {
  return (
    <div className="dark:bg-darkBackgroundColor" id="getStarted">
      <h1 className="text-5xl dark:text-darkTextColor text-[#343434] pt-24 sm:mt-0 sm:text-3xl sm:pt-8 mx-auto text-center group font-semibold  ">
        "What you will learn"
        <div className=" h-[3px] w-32 transition-all duration-150 ease-in-out group-hover:w-56 bg-[#ef9516] mx-auto mt-2"></div>
      </h1>

      {/* flex items-center mx-auto justify-center bg-slate-300 */}

      <div className="flex justify-center mx-auto mt-10 dark:hidden dark:shadow-none sm:hidden">
        <div class="segmented-control dark:shadow-none ">
          <input type="radio" name="radio" id="tab-1" />
          <label htmlFor="tab-1" class=" segmented-control__1">
            <p>Live Programs</p>
          </label>

          <input type="radio" name="radio" id="tab-2" />
          <label htmlFor="tab-2" class="segmented-control__2">
            <p>One Neuron</p>
          </label>

          <input type="radio" name="radio" id="tab-3" />
          <label htmlFor="tab-3" class="segmented-control__3">
            <p>Test Series</p>
          </label>

          <div class="segmented-control__color"></div>
        </div>
      </div>

      <div className="flex mt-20 space-x-10 sm:mt-14 sm:space-x-0 sm:space-y-14 sm:mx-7 sm:flex-col card-container mx-28">
        <NuemorphicCard
          image={course1}
          title="DSA for FAANG preparation with Python and JavaScript"
          description="Anurag Tiwari"
          price="3,999"
        />
        <NuemorphicCard
          image={course2}
          title="Full Stack Web Development using Python"
          description="Navin Reddy"
          price="3,999"
        />
        <NuemorphicCard
          image={course3}
          title="Big Data Bootcamp with Job Guarantee"
          description="Shudhanshu Kumar"
          price="17,700"
        />
        <NuemorphicCard
          image={course4}
          title="Youtube Mastery Batch 2 in Hindi"
          description="Amresh Bharti"
          price="7000"
        />
      </div>
    </div>
  );
};

export default WhatYouLearn;
