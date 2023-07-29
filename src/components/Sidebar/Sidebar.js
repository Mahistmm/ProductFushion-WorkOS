import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";
import Staging from "../Staging/Staging";

const initial = atom(0);
export const isOpen = atom("open");

export const Sidebar = () => {
  const [action, setAction] = useAtom(initial);
  const [open, setOpen] = useAtom(isOpen);

  const [stage, setStage] = useState(false);

  const clickRef = useRef();
  const sideRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const SidebarClose = (e) => {
      if (e.target === sideRef.current) {
        setOpen("open");
      }
    };
    document.body.addEventListener("click", SidebarClose);
    return () => document.body.removeEventListener("click", SidebarClose);
  });

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.target !== clickRef.current) {
        setStage(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav
      ref={sideRef}
      className={`h-screen w-1/5 p-6 bg-zinc-900 ${
        open === "open"
          ? " duration-1000 max-md:hidden"
          : "max-md:absolute w-60"
      }`}
    >
      <div className="text-white text-lg font-bold flex items-center justify-between mb-2">
        <h1>Remote hirez</h1>
        <i className="fa-solid fa-gear"></i>
      </div>
      <div
        ref={clickRef}
        onClick={() => setStage((prev) => !prev)}
        className="text-white border-slate-600 rounded-sm border-solid border-2 flex items-center justify-between mb-2 cursor-pointer"
      >
        <div className="flex items-center justify-start pl-2">
          <i className="fa-solid fa-cube "></i>
          <h1 className="pl-2 font-bold">Staging</h1>
        </div>
        <i className="fa-solid fa-angle-down pr-2"></i>
      </div>

      {stage ? (
        <>
          <Staging />
        </>
      ) : (
        <></>
      )}

      <div className="text-slate-200 mb-2 cursor-pointer">
        <div
          onClick={() => {
            setAction(0);
            navigate("/");
          }}
          className={
            action === 0
              ? "mb-2 flex items-center p-1 pl-2 bg-slate-700 rounded-sm font-bold "
              : " mb-2 flex items-center p-1 pl-2 hover:bg-slate-700 rounded-sm font-bold"
          }
        >
          <i className="fa-regular fa-bookmark"></i>
          <h1 className=" pl-2 hover:font-bold">Overview</h1>
        </div>

        <div
          onClick={() => {
            setAction(1);
            navigate("/organizations");
          }}
          className={
            action === 1
              ? "mb-2 flex items-center p-1 pl-2 bg-slate-700 rounded-sm font-bold"
              : "mb-2 flex items-center p-1 pl-2 hover:bg-slate-700 rounded-sm"
          }
        >
          <i className="fa-solid fa-layer-group"></i>
          <h1 className=" pl-2">Organization</h1>
        </div>

        <div className="mb-2 flex items-center p-1 pl-2  hover:bg-slate-700 rounded-sm ">
          <i className="fa-solid fa-sliders"></i>
          <h1 className=" pl-2">Configuration</h1>
        </div>

        <div className="mb-2 flex items-center p-1 pl-2  hover:bg-slate-700 rounded-sm ">
          <i className="fa-solid fa-angle-right"></i>
          <h1 className=" pl-2">Webhooks</h1>
        </div>

        <div className="mb-2 flex items-center p-1 pl-2  hover:bg-slate-700 rounded-sm">
          <i className="fa-solid fa-key"></i>
          <h1 className=" pl-2">API Keys</h1>
        </div>

        <div className="mb-2 flex items-center p-1 pl-2 hover:bg-slate-700 rounded-sm ">
          <i className="fa-solid fa-database"></i>
          <h1 className=" pl-2">APILogs</h1>
        </div>
      </div>
    </nav>
  );
};
