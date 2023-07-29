import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";

const Overview = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full md:w-4/5 h-screen overflow-y-scroll ">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default Overview;
