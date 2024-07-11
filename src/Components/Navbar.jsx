import React from "react";
import Drop from "./Drop";

const Navbar = () => {
  return (
    <nav class="bg-[#14161A] flex justify-around ">
      <h1 className=" text-[#EEBC1D] p-7 font-think font-bold text-xl">
        Crypto Hunter
      </h1>
      {/* <div>
        <select  className=' mt-6'name="" id="">Hello</select>
      </div> */}
      <Drop />
    </nav>
  );
};

export default Navbar;
