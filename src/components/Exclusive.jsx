import React from "react";

export default function Exclusive() {
  return (
    <div className="relative bg-[#F4F8FE] flex items-center justify-center h-[300px] mt-20 mb-10 gap-20">
      <div className=" w-full px-10 xl:px-0 xl:w-[1200px] flex justify-between h-full items-center">
        <div className="w-1/2  ">
          <h3 className="text-[#450000] font-extrabold text-[32px] ">
            Exclusive Supplier+ Rewards <br /> for the first 30 days
          </h3>
        </div>
        <div className="flex w-1/2 mr-10 gap-8 max-w-[550px] relative h-full items-center">
          <div className=" w-[250px] p-5 bg-[#FFF] rounded-[5px] absolute -top-10 border border-gray-300 left-7">
            <h4 className="text-[#000] text-[20px] font-semibold  mb-2">
              Free catalog visibility of ₹600
            </h4>
            <p className="text-gray-400">
              Run advertisements for your catalogs to increase the visibility of
              your products and get more orders. Currently, not available for
              sellers who don't have a Regular GSTIN.
            </p>
          </div>
          <div className="border border-gray-300 w-[250px] p-5 bg-[#FFF] rounded-[5px] absolute -bottom-10 right-0">
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
