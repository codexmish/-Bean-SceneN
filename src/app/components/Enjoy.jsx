import React from "react";
import blast from "../images/coffee_blast.png";
import capachino from "../images/capachino.png";
import latte from "../images/latte.png";
import macchito from "../images/macchiato.png";
import expresso from "../images/expresso.png";
import CommonHead from "./common/CommonHead";
import CommonProduct from "./common/CommonProduct";
import Image from "next/image";

const Enjoy = () => {
  return (
    <>
      <div className="relative pb-[82px]">
        <div className="absolute left-0 top-[-200px] w-[300px] lg:w-[498px]">
          <Image src={blast} alt="" />
        </div>
        <div className="container">
          <CommonHead
            head={"Enjoy a new blend of coffee style"}
            pp={
              "Explore all flavours of coffee with us. There is always a new cup worth experiencing"
            }
          />

          <div className="products flex flex-wrap items-center justify-center gap-20 lg:gap-0 lg:justify-between mt-10 lg:mt-8">
            <CommonProduct
              img={capachino}
              head={"Cappuccino"}
              details={"Coffee 50% | Milk 50%"}
              price={"$8.50"}
            />

            <CommonProduct
              img={latte}
              head={"Chai Latte"}
              details={"Coffee 50% | Milk 50%"}
              price={"$8.50"}
            />

            <CommonProduct
              img={macchito}
              head={"Macchiato"}
              details={"Coffee 50% | Milk 50%"}
              price={"$8.50"}
            />

            <CommonProduct
              img={expresso}
              head={"Expresso"}
              details={"Coffee 50% | Milk 50%"}
              price={"$8.50"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Enjoy;
