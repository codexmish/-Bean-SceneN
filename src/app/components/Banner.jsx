import React from "react";
import bgImg from "../images/banner-bg.png";
import overlay from "../images/overlay.png";

const Banner = () => {
  return (
    <>
      <section
        className="main w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        {/* overlay */}

        <div
          className="absolute z-0 bg-center bg-cover inset-0"
          style={{ backgroundImage: `url(${overlay.src})` }}
        ></div>

        <div className="container relative z-10 px-6 lg:px-0">
          <div className="pt-[150px] lg:pt-[183px] pb-[95px] flex flex-col justify-center gap-5">
            <h2 className="text-base lg:text-[22px] text-white font-playfair font-medium">
              We've got your morning covered with
            </h2>
            <h1 className="text-8xl lg:text-[220px] text-white font-normal font-clicker">
              Coffee
            </h1>
            <p className="text-sm lg:text-xl text-white font-normal font-playfair lg:w-[527px]">
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>

            <div className="sin-button w-[100px] lg:w-[134px] h-[38px] lg:h-[48px] flex items-center justify-center bg-theme text-xs lg:text-sm text-text-black font-medium font-playfair rounded-full">
              Order Now
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
