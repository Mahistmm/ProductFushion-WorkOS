import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const Organizations = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full md:w-4/5 h-screen overflow-y-scroll ">
        <Header />
        <div>Organizations</div>
      </div>
    </div>
  );
};

export default Organizations;
