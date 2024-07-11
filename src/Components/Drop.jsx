import React from 'react'

const Drop = () => {
  return (
    <div className=" mt-5">
      <div className="relative mt-2 shadow-sm">
        <div className=""></div>
        <div className=" inset-y-0 right-0 flex items-center text-white border-solid border-2 border-black-600">
          <select
            id="currency"
            name="currency"
            className="h-9 bg-black py-0 pl-2 pr-7  text-white  rounded-0 sm:text-sm "
          >
            <option >INR</option>
            <option >USD</option>
          </select>
        </div>
      </div>
    </div>
  );  
}

export default Drop
