import React from "react";
import CommonHead from "./common/CommonHead";
import CommonDifferent from "./common/CommonDifferent";
import { PiCoffeeBean } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { BsCupHot } from "react-icons/bs";
import { MdOutlinePriceCheck } from "react-icons/md";
import blast from "../images/coffee_blast_right.png";
import Image from "next/image";

const Different = () => {
  return (
    <>
      <section className="relative w-full pb-21">
        <div className="absolute right-0 top-[-200px]">
          <Image src={blast} alt="" />
        </div>
        <div className="main mt-15 lg:mt-20 container px-6 lg:px-o">
          <CommonHead
            head={"Why are we different?"}
            pp={"We don't just make your coffee, we make your day!"}
          />

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-0 lg:justify-between mt-8 mb-8">
            <CommonDifferent
              icon={<PiCoffeeBean />}
              head={"Supreme Beans"}
              text={"Beans that provides great taste"}
            />

            <CommonDifferent
              icon={<LiaCertificateSolid />}
              head={"High Quality"}
              text={"We provide the highest quality"}
            />

            <CommonDifferent
              icon={<BsCupHot />}
              head={"Extraordinary "}
              text={"Coffee like you have never tasted"}
            />

            <CommonDifferent
              icon={<MdOutlinePriceCheck />}
              head={"Affordable Price"}
              text={"Our Coffee prices are easy to afford"}
            />
          </div>

          <div className="flex flex-col items-center">
            <CommonHead
              pp={
                "Great ideas start with great coffee, Lets help you achieve that"
              }
            />
            <CommonHead head={"Get started today."} />
            <div className="mt-6 lg:mt-10 sin-button cursor-pointer w-[100px] h-[45px] flex items-center justify-center bg-theme text-sm text-text-black hover:text-white font-medium font-playfair rounded-full">
              Join Us
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Different;
