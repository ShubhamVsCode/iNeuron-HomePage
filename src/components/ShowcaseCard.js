import React from "react";

const ShowcaseCard = ({ Heading, Description, Image }) => {
  return (
    <div className="card rounded-2xl shadow-xl hover:shadow-md duration-300 group">
      <img
        className="w-1/2 mx-auto group-hover:scale-105 duration-300 ease-in-out"
        src={Image}
        alt=""
      />
      <p className="text-5xl font-bold mt-5 mb-2 group-hover:scale-110 group-hover:-translate-y-2 duration-300 ease-in-outtext-gray-800 ">
        {Heading}
      </p>
      <p className="text-2xl mb-5 text-gray-500">{Description}</p>
    </div>
  );
};

export default ShowcaseCard;
