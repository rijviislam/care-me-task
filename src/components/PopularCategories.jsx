import React from "react";

export default function PopularCategories() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[1040px] my-10">
        <h2 className="text-[#450000] font-extrabold text-[32px] text-start">
          Popular Categories to Sell Online
        </h2>
        <div className=" grid lg:grid-cols-4 gap-5 md:gap-30 md:grid-cols-3 grid-cols-2 mt-10">
          <div className="flex flex-col gap-5">
            <p className="text-[18px] text-gray-600">Sell Sarees Online</p>
            <p className="text-[18px] text-gray-600">Sell Jewellery Online</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[18px] text-gray-600">Sell Sarees Online</p>
            <p className="text-[18px] text-gray-600">Sell Jewellery Online</p>
          </div>
          <div className="flex flex-col gap-5 ">
            <p className="text-[18px] text-gray-600">Sell Sarees Online</p>
            <p className="text-[18px] text-gray-600">Sell Jewellery Online</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[18px] text-gray-600">Sell Sarees Online</p>
            <p className="text-[18px] text-gray-600">Sell Jewellery Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
