import React from "react";

const Staging = () => {
  return (
    <div className="absolute top-22 left-6 text-white w-72 bg-zinc-900 md:w-96 ">
      <div className="  border-slate-600 rounded-sm border-solid border-2 ">
        <h1 className=" text-white font-bold p-2 border-b-2  border-gray-700">
          Environment Selection
        </h1>
        <div className="border-b-2  border-gray-700 p-2 flex gap-3 items-start">
          <i className="fa-solid fa-cube pt-1"></i>
          <div>
            <div className="flex justify-between items-center">
              <h1 className=" text-white font-bold ">Staging</h1>
              <i className="fa-solid fa-check"></i>
            </div>
            <p className=" text-gray-500 font-medium text-sm pr-3">
              Free environment for integration and testing. Storage and usage
              limits apply.
            </p>
          </div>
        </div>
        <div className="border-b-2  border-gray-700 p-2 flex gap-3 items-start">
          <i className="fa-solid fa-lock"></i>
          <div>
            <div>
              <h1 className=" text-white font-bold ">Production</h1>
              <p className=" text-gray-500 font-medium text-sm pr-3">
                Highly availably paid environment for Production application. To
                enable,<span>enter your billing information </span>
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center p-2">
          <p>Learn about pricing</p>
          <i className="fa-solid fa-arrow-trend-up pl-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Staging;
