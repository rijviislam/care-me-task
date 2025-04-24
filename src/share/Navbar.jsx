import React from "react";
import Hamburger from "../assets/svgviewer-output.svg";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between xl:px-20 px-5 bg-[#FFF] py-10">
      <h1 className="text-[#450000] text-xl sm:text-3xl font-bold cursor-pointer">
        Care me
      </h1>
      <ul className=" text-[#450000] xl:gap-8 lg:gap-4 font-medium text-[16px] lg:flex hidden">
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
      <div className="flex xl:gap-10 gap-2 sm:gap-4">
        <button className="border-[#450000] border py-1 px-3 sm:px-8 rounded-[7px] text-[#450000] text-[15px] font-medium cursor-pointer">
          Login
        </button>
        <button className="border-[#450000] py-1 px-3 sm:px-6 text-[#FFF] rounded-[7px] bg-[#450000] text-[15px] font-medium cursor-pointer">
          Start Selling
        </button>
        {/* HAMBURGER MENU  */}
        <div className="flex lg:hidden w-8">
          <img
            src={Hamburger}
            alt="Hamburger Menu"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
