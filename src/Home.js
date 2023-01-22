import { useState } from "react";

const Home = () => {
  return (
    <div className="home">
      <header
          className="w-full h-96 bg-[url('https://d7f8abd7d96060153809-eb270a82b567dac3c43fdc1125a9303e.ssl.cf3.rackcdn.com/2022/11/AdobeStock_203599298-2-770x404.jpg')] bg-cover bg-center flex justify-center items-center">
          <div className="flex flex-col justify-center items-center ">
              <h1 className=" text-center text-5xl text-gray-200 font-bold drop-shadow-lg"><span>Hand</span>
              <span className="text-secondary-300">2</span>
              <span>Move</span>
              </h1>
              <p className="mt-5 last:text-center text-xl text-gray-200 opacity-70">Get your stuff brought to you by drivers in your area</p>
              <div className="flex space-x-5">
                <a className="mt-8 px-12 py-3 bg-gradient-to-r bg-secondary-300 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                    href="#">Plan a delivery</a>
                <a className="mt-8 px-12 py-3 bg-gradient-to-r bg-secondary-600 hover:from-amber-600 hover:to-red-700 text-xl text-gray-200 font-semibold drop-shadow-lg rounded-full"
                    href="#">Become a driver</a>
              </div>
          </div>
      </header>
      <div className="flex flex-col min-h-screen justify-start items-center">
          <h1 className="text-4xl">Other Content</h1>
      </div>
    </div>
  );
}

export default Home;