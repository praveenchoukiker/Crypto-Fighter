import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div>
        <img
          className=" h-[120px]"
          src="https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
          alt=""
        />
        <h5 className=" text-yellow-500 font-bold">btc -2.47%</h5>
        <h3 className=" text-white text-lg font-black">$5679567</h3>
      </div>
      <div>
        <img
          className=" h-[120px]"
          src="https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970"
          alt=""
        />
        <h5 className=" text-yellow-500 font-bold">btc -2.47%</h5>
        <h3 className=" text-white text-lg font-black">$5679567</h3>
      </div>
      <div>
        <img
          className=" h-[120px]"
          src="https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628"
          alt=""
        />
        <h5 className=" text-yellow-500 font-bold">btc -2.47%</h5>
        <h3 className=" text-white text-lg font-black">$5679567</h3>
      </div>
    </Slider>
  );
};

export default Carousel;
