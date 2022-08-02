import React from "react";
import youtube from "../assets/youtube.png";
import linkedin from "../assets/linkedin.png";

const TechAvengerCard = ({ image, name, post, className }) => {
  return (
    <div
      className={`relative flex flex-col ${className} items-center justify-center h-56 rounded-lg group w-56`}
    >
      <img
        src={youtube}
        className="absolute z-10 duration-300 opacity-0 w-14 group-hover:translate-y-2 group-hover:translate-x-4 -left-10 -top-10 group-hover:opacity-90 "
        alt=""
      />
      <img
        src={linkedin}
        className="absolute z-10 duration-300 opacity-0 w-14 group-hover:-translate-x-4 group-hover:translate-y-4 -right-10 -top-10 group-hover:opacity-100 "
        alt=""
      />
      <img
        className="absolute top-0 w-56 duration-500 ease-in-out bg-purple-100 rounded-full shadow-md group-hover:-top-10 sm:shadow-purple-500 sm:-top-10 sm:bg-purple-300 group-hover:shadow-2xl group-hover:bg-purple-300 group-hover:shadow-purple-500 shadow-purple-400 "
        src={image}
        alt=""
      />
      <h1 className="absolute bottom-0 text-2xl font-semibold text-center duration-300 opacity-0 text-ineuron sm:opacity-100 group-hover:opacity-100 sm:translate-y-2 group-hover:translate-y-2">
        {name}
      </h1>
      <p className="absolute text-lg font-bold text-gray-500 uppercase duration-300 group-hover:text-gray-400 group-hover:font-semibold -bottom-10">
        {post}
      </p>
    </div>
  );
};

export default TechAvengerCard;
