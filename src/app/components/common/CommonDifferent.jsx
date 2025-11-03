import React from "react";

const CommonDifferent = ({ icon, head, text }) => {
  return (
    <>
      <div className="w-[280px] h-[284px] bg-[#FFF9F1] hover:bg-[#FFEED8] border border-[#FFEED8] flex flex-col justify-center items-center">
        <div className="text-[88px] text-text-black">{icon}</div>
        <h2 className="text-[28px] text-cofee font-bold font-playfair mt-6 mb-2">
          {head}
        </h2>
        <p className="text-xl text-secoundary-text font-normal font-playfair w-[177px] text-center">
          {text}
        </p>
      </div>
    </>
  );
};

export default CommonDifferent;
