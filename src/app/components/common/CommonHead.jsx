import React from "react";

const CommonHead = ({ head, pp }) => {
  return (
    <>
      <div className="px-6 lg:px-0">
        <h2 className="text-[30px] lg:text-[54px] text-cofee font-bold font-playfair text-center">
          {head}
        </h2>
        <p className="text-sm lg:text-xl text-secoundary-text font-normal font-playfair text-center">
          {pp}
        </p>
      </div>
    </>
  );
};

export default CommonHead;
