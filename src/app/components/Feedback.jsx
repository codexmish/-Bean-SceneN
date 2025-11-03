import React from "react";
import CommonHead from "./common/CommonHead";
import CommonFeedback from "./common/CommonFeedback";
import person from "../images/person.png";
import leftBlast from "../images/bottom-left-blast.png";
import rightBlast from "../images/coffee_blast_right.png";
import Image from "next/image";

const Feedback = () => {
  return (
    <>
      <section className="mt-20 mb-42 px-6 lg:px0 relative">
        <div className="container">
          <CommonHead
            head={"Our coffee perfection feedback"}
            pp={"Our customers has amazing things to say about us"}
          />

          <div className="mt-31 lg:mt-11 flex justify-center">
            <CommonFeedback
              img={person}
              icon={"“"}
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."
              }
              name={"Jonny Thomas"}
              position={"Project Manager"}
            />
          </div>
        </div>
        <div className="absolute left-0 bottom-[-230px] lg:bottom-[-100px]">
          <Image src={leftBlast} alt="" />
        </div>

        <div className="absolute right-0 top-[90px]">
          <Image src={rightBlast} alt="" />
        </div>
      </section>
    </>
  );
};

export default Feedback;
