import React from "react";
import Carousel from "./Carousel";

const HeroSection = () => {

  return (
    <div>
      <div id="banner" className=" relative h-[70vh]">
        <h1 className=" text-white justify-center text-center pt-[4rem] text-5xl font-bold ">
          Crypto Hunter
        </h1>
        <p className="text-white justify-center text-center pt-3 ">
          Get All The Info Regarding Your Favorite Crypto Currency
        </p>
        <div className="w-[80%] left-0 right-0 mx-auto pt-10">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
