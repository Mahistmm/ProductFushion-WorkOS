import React from "react";

const Container2 = () => {
  return (
    <div className=" pt-6 pb-6 border-b-2  border-gray-700 w-11/12 mx-auto ">
      <h1 className=" text-xl text-white font-bold ">
        Get the most out of WorkOS
      </h1>

      <div className="flex w-2/4 gap-4 items-center mt-5 p-2 hover:bg-gray-800 rounded-md max-sm:w-4/5 max-md:w-3/5">
        <img
          src="https://workos.imgix.net/docs/icons/sso-20220915.png"
          alt="icon"
          className=" w-20 h-20"
        />

        <div>
          <h1 className=" text-base text-white font-bold ">
            Invite your teammats
          </h1>
          <p className="text-sm text-white">
            Developers, support, and customer success teams can use WorkOS to
            better serve your enterprise customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container2;
