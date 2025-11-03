import React from "react";
import bgImg from "../images/subBg.png";

const Subscribe = () => {
  return (
    <>
      <section
        className="main w-full h-[374px] bg-cover bg-top flex items-center relative px-6 lg:px-o"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-[18px] lg:text-[54px] text-white font-bold font-playfair">
            Subscribe to get the Latest News
          </h1>
          <p className="text-sm lg:text-[20px] text-white font-normal font-playfair mt-4 mb-7">
            Don't miss out on our latest news, updates, tips and special offers
          </p>

          <div className="w-full lg:w-[642px] h-[50px] lg:h-[66px] border border-theme rounded-[5px] flex items-center bg-white">
            <input
              className="border-none outline-none w-full pl-7 py-4 text-black placeholder:text-secoundary-text text-sm lg:text-[20px] font-normal font-playfair"
              type="text"
              placeholder="Enter your mail"
            />
            <button className="w-[100px] lg:w-[137px] h-full bg-theme text-sm lg:text-[22px] text-cofee font-bold font-playfair">
              Suscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
