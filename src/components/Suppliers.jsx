import React from "react";
import Img1 from "../assets/Screenshot 2025-04-24 at 11.31.47 PM.png";
import Img2 from "../assets/Screenshot 2025-04-24 at 11.31.54 PM.png";
import Img3 from "../assets/Screenshot 2025-04-24 at 11.32.04 PM.png";
import Img4 from "../assets/Screenshot 2025-04-24 at 11.37.07 PM.png";

export default function Suppliers() {
  return (
    <div className="my-10 bg-[#FFF]  md:mx-20 flex flex-col items-center">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <div className="bg-[#F3F3F3]  p-5 flex flex-col gap-3 rounded-[10px] w-[250px]">
          <h3 className="text-2xl font-extrabold text-[#450000]">11 Lakh+</h3>
          <p className="text-xl font-semibold text-gray-500">
            Trust Care Me to sell <br /> online
          </p>
        </div>
        <div className="bg-[#F3F3F3]  p-5 flex flex-col gap-3 rounded-[10px] w-[250px]">
          <h3 className="text-2xl font-extrabold text-[#450000]">14 Crore+</h3>
          <p className="text-xl font-semibold text-gray-500">
            Customers buying across Bangladesh
          </p>
        </div>
        <div className="bg-[#F3F3F3]  p-5 flex flex-col gap-3 rounded-[10px] w-[250px]">
          <h3 className="text-2xl font-extrabold text-[#450000]">19000+</h3>
          <p className="text-xl font-semibold text-gray-500">
            Pincode Supported for delivery
          </p>
        </div>
        <div className="bg-[#F3F3F3]  p-5 flex flex-col gap-3 rounded-[10px] w-[250px]">
          <h3 className="text-2xl font-extrabold text-[#450000]">700+</h3>
          <p className="text-xl font-semibold text-gray-500">
            Categories to sell online
          </p>
        </div>
      </div>
      <div className="flex xl:mx-20 xl:gap-20 lg:gap-10 items-center mt-10  max-w-[1200px] flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2 md:w-2/3 mx-5 lg:mx-0">
          <h2 className="text-[#450000] text-[34px] font-extrabold lg:text-start text-center">
            Why Suppliers Love Care Me
          </h2>
          <p className="text-[18px] lg:text-start text-center">
            All the benefits that come with selling on Care Me are designed to
            help you sell more, and make it easier to grow your business.
          </p>
        </div>
        <div className="border border-gray-300 p-5 lg:w-1/2 lg:mx-0 mx-5 rounded-[5px]">
          <div className="flex gap-3 border-b border-gray-300 py-5 items-start justify-start ">
            <img src={Img4} alt="Logo" className="w-12 h-12" />
            <div>
              <h4 className="text-[#000] font-medium text-[24px]">
                0% Commission Fee
              </h4>
              <p className="text-gray-600 text-[14px]">
                Suppliers selling on Meesho keep 100% of their profit by not
                paying any commission
              </p>
            </div>
          </div>
          <div className="flex gap-3 border-b border-gray-300 my-10 pb-5 items-start justify-start">
            <img src={Img1} alt="Logo" className="w-10 h-10" />
            <div>
              <h4 className="text-[#000] font-medium text-[24px]">
                0 Penalty Charges
              </h4>
              <p className="text-gray-600 text-[14px]">
                Suppliers selling on Meesho keep 100% of their profit by not
                paying any commission
              </p>
            </div>
          </div>
          <div className="flex gap-3 border-b border-gray-300 mb-10 pb-5 items-start justify-start">
            <img src={Img2} alt="Logo" className="w-10 h-10" />
            <div>
              <h4 className="text-[#000] font-medium text-[24px]">
                Growth for Every Supplier
              </h4>
              <p className="text-gray-600 text-[14px]">
                From small to large and unbranded to branded, and now open for
                Sellers who don't have a Regular GSTIN too, Meesho fuels growth
                for all suppliers.
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start justify-start pb-5">
            <img src={Img3} alt="Logo" className="w-8 h-8" />
            <div>
              <h4 className="text-[#000] font-medium text-[24px]">
                Ease of Doing Business
              </h4>
              <p className="text-gray-600 text-[14px]">
                Easy Product Listing Lowest Cost Shipping 7-Day Payment Cycle
                from the delivery date
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
