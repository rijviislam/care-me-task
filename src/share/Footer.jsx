import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#5E0523] flex items-center justify-center">
      <div className="flex md:flex-row flex-col justify-center md:justify-around items-center md:items-start pt-20 pb-10 w-[1300px]  gap-5 md:gap-0">
        <div className="w-[250px] md:text-start text-center">
          <h2 className="text-[#FFF] font-semibold text-[24px]">Care Me</h2>
          <p className="text-[#FFF] text-[16px] my-3">
            Sell your products to crores of customers on Meesho at 0% commission
          </p>
          <button className="px-2 py-2 bg-[#FF8001] text-[#FFF] text-[16px] rounded-[5px]">
            Start Selling
          </button>
        </div>
        <div className=" md:text-start text-center">
          <h3 className="text-[#FFF] text-[18px] font-medium">
            Sell on Care Me
          </h3>
          <ul className="mt-3 flex flex-col gap-2 text-gray-300">
            <li>
              <a href="#">Sell Online</a>
            </li>
            <li>
              <a href="#">Pricing & Commission</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Grow Your Business</a>
            </li>
            <li>
              <a href="#">Learning Hub</a>
            </li>
          </ul>
        </div>
        <div className=" md:text-start text-center">
          <h3 className="text-[#FFF] text-[18px] font-medium">
            Sell on Care Me
          </h3>
          <div className="mt-5">
            <p className="text-[#FFF] text-[16px] font-normal ">
              Support@caremebd.com
            </p>
            <div className="flex gap-2 mt-2 md:items-start items-center justify-center md:justify-start">
              <div className="px-3 py-1 font-bold text-[20px] rounded-[5px] bg-[#FFF] text-[#5E0523]">
                F
              </div>
              <div className="px-3 py-1 font-bold text-[20px] rounded-[5px] bg-[#FFF] text-[#5E0523]">
                I
              </div>
              <div className="px-3 py-1 font-bold text-[20px] rounded-[5px] bg-[#FFF] text-[#5E0523]">
                Y
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
