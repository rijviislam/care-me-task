import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-20  bg-[#FFF] py-10">
      <h1 className="text-[#450000] text-3xl font-bold cursor-pointer">
        Care me
      </h1>
      <ul className="flex text-[#450000] gap-8 font-medium text-[16px]">
        <li>
          <a href="#">Sell Online</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Pricing & Commission</a>
        </li>
        <li>
          <a href="#">Shipping & Returns</a>
        </li>
      </ul>
      <div className="flex gap-10">
        <button className="border-[#450000] border py-1 px-8 rounded-[7px] text-[#450000] text-[15px] font-medium cursor-pointer">
          Login
        </button>
        <button className="border-[#450000] py-1 px-6 text-[#FFF] rounded-[7px] bg-[#450000] text-[15px] font-medium cursor-pointer">
          Start Selling
        </button>
      </div>
    </div>
  );
}
