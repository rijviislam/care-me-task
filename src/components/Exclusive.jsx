import React from "react";
import Logo1 from "../assets/Screenshot 2025-04-26 at 3.34.49 AM.png";
import Logo2 from "../assets/Screenshot 2025-04-26 at 3.34.59 AM.png";

export default function Exclusive() {
  return (
    <div className="relative bg-[#F4F8FE] flex items-center justify-center lg:h-[300px] h-[600px] mt-20 mb-10 gap-20">
      <div className=" w-full md:px-10 xl:px-0 xl:w-[1050px] flex justify-between h-full items-center lg:flex-row flex-col ">
        <div className="lg:w-1/2  ">
          <h3 className="text-[#450000] font-extrabold text-[32px] lg:text-start text-center">
            Exclusive Supplier+ Rewards <br /> for the first 30 days
          </h3>
        </div>
        <div className="flex w-full lg:w-1/2  max-w-[550px] relative h-[400px] lg:h-full items-center ">
          <div className=" w-[250px] p-5 bg-[#FFF] rounded-[5px] absolute -top-10 border border-gray-300 md:left-0">
            <img src={Logo1} alt="Logo" className="w-14 h-14" />
            <h4 className="text-[#000] text-[20px] font-semibold  mb-2">
              Free catalog visibility of ₹600
            </h4>
            <p className="text-gray-400">
              Run advertisements for your catalogs to increase the visibility of
              your products and get more orders. Currently, not available for
              sellers who don't have a Regular GSTIN.
            </p>
          </div>
          <div className="border border-gray-300 w-[250px] p-5 bg-[#FFF] rounded-[5px] absolute -bottom-10 right-1">
            <img src={Logo2} alt="Logo" className="w-14 h-14" />
            <h4 className="text-[#000] text-[20px] font-semibold  mb-2">
              Free catalog visibility of ₹600
            </h4>
            <p className="text-gray-400">
              Run advertisements for your catalogs to increase the visibility of
              your products and get more orders. Currently, not available for
              sellers who don't have a Regular GSTIN.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
