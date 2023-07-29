import React from "react";

const Section3 = ({ slide, head, detail }) => {
  return (
    <div>
      <div className="flex w-11/12 gap-4 items-center mt-5 p-2 hover:bg-gray-800 rounded-md">
        <img src={slide} alt="icon" className=" w-20 h-20" />
        <div>
          <h1 className=" text-base text-white font-bold ">{head}</h1>
          <p className="text-sm text-white">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
