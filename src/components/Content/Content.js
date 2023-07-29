import React from "react";
import List from "../List/List";
import Container2 from "./Container2";
import Container3 from "./Container3/Container3";

const Content = () => {
  return (
    <section className=" bg-black pt-10  overflow-hidden snap-y scroll-smooth ">
      <div className=" bg-black w-11/12 mx-auto gap-10 items-center pb-8 border-b-2  border-gray-700 flex-warp md:flex ">
        <div className="w-2/4 max-md:w-3/5 max-sm:w-4/5">
          <h1 className=" text-white font-bold text-2xl mb-4">
            Let's get started
          </h1>
          <div className=" p-6 border-2 border-solid rounded border-gray-700">
            <div className="text-white">
              <div>
                <h1 className=" font-bold mb-2">
                  Staging environment variables
                </h1>
              </div>

              <div className="mb-2 text-gray-400 font-medium">
                <span>Client ID</span>
                <div className=" bg-gray-900 text-white font-thin  p-1 border-2 border-solid rounded border-gray-700 flex flex-row items-center justify-between">
                  <span>client_KJF09DKJD90409K</span>
                  <i className="fa-regular fa-copy"></i>
                </div>
              </div>

              <div className=" text-gray-400 font-medium">
                <span>API Key</span>
                <div className=" bg-gray-900 text-white font-thin  p-1 border-2 border-solid rounded border-gray-700 flex flex-row items-center justify-between">
                  <span>client_KJF09DKJD90409K</span>
                  <i className="fa-regular fa-copy"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white pt-10 md:pt-0">
          <List
            num={1}
            Content={
              "Copy the Staging environmental variables and store them on your server. "
            }
            mark={""}
          />
          <List
            num={2}
            Content={"coming from WorkOS back to you application. "}
            mark={"Configure redirect URIs "}
          />
          <List
            num={3}
            Content={"and add connections are directories for your customer. "}
            mark={"Create an organization "}
          />
        </div>
      </div>
      <Container2 />
      <Container3 />
    </section>
  );
};

export default Content;
