import React from "react";
const HeroSection = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <div
        id="HeroSection"
        className="max-w-[85rem] mx-auto my-20 px-4 sm:px-6 lg:px-8"
      >
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="block text-4xl font-bold text-gray-800 sm:text-4xl md:text-5xl xl:text-6xl dark:text-white">
              Rumah belajar LM
            </h1>
            <h5 className="block text-3xl font-bold text-pink-500 sm:text-3xl md:text-4xl xl:text-5xl dark:text-white">
              Unit Nagrak
            </h5>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Introducing a new way for your brand to reach the creative
              community.
            </p>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 justify-center lg:justify-normal">
              <div className="w-full sm:w-auto">
                <label htmlFor="hero-input" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-3 px-4 block w-full xl:min-w-72 shadow-xl border-2 border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Enter work email"
                />
              </div>
              <a
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Request demo
              </a>
            </div>
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-4 mt-10 lg:pt-0">
            <img
              className="w-full rounded-xl"
              src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
              alt="Image Description"
            />
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
};

export default HeroSection;
