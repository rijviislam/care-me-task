import React from "react";

export default function PopularCategories() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1040px] my-10  md:px-0 px-4">
        <h2 className="text-[#450000] font-extrabold text-[32px] text-center md:text-start ">
          Popular Categories to Sell Online
        </h2>
        <div className=" grid lg:grid-cols-4 gap-5 md:gap-10 md:grid-cols-3 grid-cols-1 place-items-center mt-10 overflow-x-hidden  place-content-center text-center md:text-start">
          <div className="flex flex-col gap-5  w-[230px]">
            <p className="text-[18px] text-gray-600">Sell Sarees Online</p>
            <p className="text-[18px] text-gray-600">Sell Jewellery Online</p>
          </div>
          <div className="flex flex-col gap-5  w-[230px]">
            <p className="text-[18px] text-gray-600">Sell Tshirts Online</p>
            <p className="text-[18px] text-gray-600">Sell Shirts Online</p>
          </div>
          <div className="flex flex-col gap-5  w-[230px]">
            <p className="text-[18px] text-gray-600">Sell Watches Online</p>
            <p className="text-[18px] text-gray-600">
              SSell Electronics Online
            </p>
          </div>
          <div className="flex flex-col gap-5  w-[230px]">
            <p className="text-[18px] text-gray-600">Sell Clothes Online</p>
            <p className="text-[18px] text-gray-600">Sell Socks Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
