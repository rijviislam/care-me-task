import React from "react";

export default function Banner() {
  return (
    <div className="bg-[#EAE3E3] flex w-full pl-16 h-[400px]">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-[32px] flex flex-col font-extrabold text-[#000]">
          Sell online to 14 Cr+ customers at{" "}
          <span className="text-[#450000] font-semibold">0% Commission</span>
        </h2>
        <p className="my-5 font-normal text-lg leading-[35px]">
          Become a Care Me seller and grow your business across Bangladesh{" "}
          <br />{" "}
          <span className="py-[6px] px-3 text-white bg-[#450000] rounded-lg mr-1">
            New!
          </span>
          Don’t have a GSTIN? You can still sell on Meesho. Know more
        </p>
        <div className="bg-[#FFF]  inline-flex w-[500px] rounded-l-lg">
          <input
            type="number"
            placeholder="Enter your mobile number"
            className="bg-[#FFF] w-2/3 px-4 py-2 outline-none rounded-l-lg"
          />
          <button className="bg-[#450000] w-1/3 text-[#FFF] rounded-r-lg">
            Start Selling
          </button>
        </div>
      </div>
      <div className="bg-[#450000] rounded-tl-[700px] w-1/2 h-full">
        <img src="../assets/image-1935.png" alt="" />
      </div>
    </div>
  );
}
