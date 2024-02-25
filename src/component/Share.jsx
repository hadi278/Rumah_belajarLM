import React from "react";

const Share = () => {
  return (
    <>
      <div id="share">
        <div className="max-w-[80rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="sm:grid grid-cols-3 bg-[#FB90B7] rounded-xl ">
            <div className="py-10">
              <div className="relative sm:left-10 bg-sky-700 shadow-lg shadow-black py-12 mx-44 sm:py-11 sm:mx-40 rounded-full" />
              <div className="relative sm:right-32 bg-sky-700 shadow-lg shadow-black py-12 mx-44 sm:py-11 sm:mx-40 rounded-full" />
              <div className="relative sm:left-32 bg-sky-700 shadow-lg shadow-black py-12 mx-44 sm:py-11 sm:mx-40 rounded-full" />
              <div className="relative sm:right-10 bg-sky-700 shadow-lg shadow-black py-12 mx-44 sm:py-11 sm:mx-40 rounded-full" />
            </div>
            <div className="my-auto">
              <h1 className="text-center text-4xl uppercase font-semibold">
                Invite your Friend
              </h1>
              <p className="text-center py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione? <br />
                Lorem ipsum dolor sit amet.
              </p>
              <a href="http://">
                <button className="p-4 px-5 my-5 bg-[#D01257] rounded-md flex mx-auto font-semibold hover:text-white hover:bg-[#0F1021] duration-700 hover:duration-700 hover:ring-4 shadow-xl shadow-gray-800 hover:animate-bounce ">
                  Send and Invite
                </button>
              </a>
            </div>
            <div className="py-10 ">
              <div className="relative sm:left-44 bg-sky-700 shadow-lg shadow-black py-12 mx-44 sm:py-11 sm:mx-40 rounded-full" />
              <div className="relative sm:left-52 bg-sky-700 shadow-lg shadow-black py-12 mx-44 sm:py-11 sm:mx-40 rounded-full" />
              <div className="relative sm:right-32 bg-sky-700 shadow-lg shadow-black py-12 mx-44 sm:py-11 sm:mx-40 rounded-full" />
              <div className="relative sm:left-10 bg-sky-700 shadow-lg shadow-black py-12 mx-44 sm:py-11 sm:mx-40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
