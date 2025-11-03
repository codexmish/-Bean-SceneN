import React from "react";
import CommonHead from "./CommonHead";
import Image from "next/image";

const CommonFeedback = ({ img, icon, text, name, position }) => {
  return (
    <>
      <div className="w-full lg:w-[980px] lg:h-[524px] bg-[#FFF9F1] border border-[#F9C06A] px-7 py-13 relative">
        <h2 className="text-[100px] lg:text-[220px] text-cofee font-bold font-playfair leading-[112px]">
          {icon}
        </h2>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center lg:w-[780px] text-xs lg:text-[18px] text-secoundary-text font-semibold font-playfair">
            {text}
          </p>
          <CommonHead head={name} pp={position} />
        </div>

        <div className="img w-[112px] absolute -bottom-[60px] left-[50%] -translate-x-[50%]">
          <Image src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default CommonFeedback;
