import React from "react";
import beanMug from "../images/bean mug.png";
import Image from "next/image";

const Discover = () => {
  return (
    <>
      <section className="main">
        <div className="container px-6 lg:px-0 flex flex-wrap items-center justify-between pt-[50px] lg:pt-[150px] pb-[82px]">
          <div className="left w-full lg:w-auto">
            <h2 className="text-xl lg:text-[54px] text-cofee font-bold font-playfair">
              Discover the best coffee
            </h2>
            <p className="lg:w-[585px] text-sm lg:text-xl text-secoundary-text font-normal font-playfair py-[29px]">
              Bean Scene is a coffee shop that provides you with quality coffee
              that helps boost your productivity and helps build your mood.
              Having a cup of coffee is good, but having a cup of real coffee is
              greater. There is no doubt that you will enjoy this coffee more
              than others you have ever tasted.
            </p>
            <div className="sin-button w-[100px] lg:w-[134px] h-[38px] lg:h-[49px] flex items-center justify-center bg-theme text-xs lg:text-sm text-text-black font-medium font-playfair rounded-full">
              Learn More
            </div>
          </div>
          <div className="right w-full lg:w-[500px]">
            <Image src={beanMug} alt="BeanMug"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;