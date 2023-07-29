import React from "react";
import { useAtom } from "jotai";
import { isOpen } from "../Sidebar/Sidebar";

const Header = () => {
  const [open, setOpen] = useAtom(isOpen);

  return (
    <header>
      <div className=" flex items-center justify-between  bg-black text-stone-400">
        <div>
          <i
            onClick={() => {
              setOpen("close");
            }}
            className=" md:invisible max-md: visible fa-solid fa-bars ml-7 p-2 bg-zinc-800 "
          ></i>
        </div>

        <div className=" flex items-center justify-end p-3 bg-black text-stone-400">
          <div className="max-sm:ml-2 text-sm">
            <i className="fa-regular fa-circle-question mr-1"></i>
            <span>Help</span>
          </div>

          <div className=" ml-4 max-sm:ml-2 text-sm">
            <i className="fa-brands fa-envira mr-1"></i>
            <span>Feedback?</span>
          </div>

          <div className=" ml-4  max-sm:ml-2 text-sm">
            <i className="fa-solid fa-book mr-1"></i>
            <span>Docs</span>
          </div>

          <i className="fa-regular fa-moon ml-4  max-sm:ml-2 text-sm "></i>
          <span className="rounded-full bg-yellow-400 font-bold text-white  ml-4 w-6 text-center max-sm:ml-2">
            M
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
