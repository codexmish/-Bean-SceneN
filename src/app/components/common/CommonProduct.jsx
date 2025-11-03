import Image from "next/image";
import React from "react";

const CommonProduct = ({ img, head, details, price }) => {
  return (
    <>
      <div className="w-[280px] h-[388px] bg-pink-bg relative border border-theme">
        <div className="img w-full h-[222px]">
          <Image src={img} alt="product image" />
        </div>
        <div className="pt-[15px] pb-[99px] flex flex-col items-center justify-center gap-2">
          <h2 className="text-[22px] text-cofee font-bold font-playfair">
            {head}
          </h2>
          <p className="text-base text-text-black font-normal font-playfair">
            {details}
          </p>
          <h2 className="text-[18px] text-cofee font-bold font-playfair">
            {price}
          </h2>
        </div>

        <div className="sin-button absolute cursor-pointer left-[50%] -translate-x-[50%]  bottom-[-22px] w-[134px] h-[49px] flex items-center justify-center bg-theme text-sm text-text-black font-medium font-playfair rounded-full">
          Order Now
        </div>
      </div>
    </>
  );
};

export default CommonProduct;
