import React from "react";

export default function Works() {
  return (
    <div className="flex items-center justify-center flex-col ">
      <h2 className="text-[#450000] font-extrabold text-[32px] text-center">
        How it works
      </h2>
      <div className="bg-[#F4F8FE]  min-h-[250px] mt-5 rounded-[5px] max-w-[1040px]">
        <div className="flex gap-4 py-10 px-10 flex-wrap lg:flex-nowrap ">
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-5">
              <div className="text-[#FFF] text-[30px] font-bold bg-[#450000] px-6 rounded-full py-[10px]">
                1
              </div>
              <span className=" h-[1px] w-[100px] bg-[#450000]"></span>
            </div>
            <div className="mt-5 ">
              <h4 className="text-[#450000] font-semibold text-[18px]">
                Create Account
              </h4>
              <p className="my-2">All you need is :</p>
              <ul className="ml-5 text-[14px]">
                <li className="list-disc">
                  GSTIN (for GST sellers) or Enrolment ID / UIN for non GST
                  sellersI
                </li>
                <li className="list-disc">Bank Account</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-5">
              <div className="text-[#FFF] text-[30px] font-bold bg-[#450000] px-6 rounded-full py-[10px]">
                2
              </div>
              <span className=" h-[1px] w-[100px] bg-[#450000]"></span>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <h4 className="text-[#450000] font-semibold text-[18px]">
                List Products
              </h4>
              <p className="text-[14px]">
                List the products you want to sell in your supplier panel
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-5">
              <div className="text-[#FFF] text-[30px] font-bold bg-[#450000] px-6 rounded-full py-[10px]">
                3
              </div>
              <span className=" h-[1px] w-[100px] bg-[#450000]"></span>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <h4 className="text-[#450000] font-semibold text-[18px]">
                Get Orders
              </h4>
              <p className="text-[14px]">
                Start getting orders from crores of Indians actively shopping on
                our platform.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-5">
              <div className="text-[#FFF] text-[30px] font-bold bg-[#450000] px-6 rounded-full py-[10px]">
                4
              </div>
              <span className=" h-[1px] w-[100px] bg-[#450000]"></span>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <h4 className="text-[#450000] font-semibold text-[18px]">
                Lowest Cost Shipping
              </h4>
              <p className="text-[14px]">
                Products are shipped to customers at lowest costs
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center justify-center gap-5">
              <div className="text-[#FFF] text-[30px] font-bold bg-[#450000] px-6 rounded-full py-[10px]">
                5
              </div>
              <span className=" h-[1px] w-[100px] bg-[#F4F8FE]"></span>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <h4 className="text-[#450000] font-semibold text-[18px]">
                Receive Payments
              </h4>
              <p className="text-[14px]">
                Payments are deposited directly to your bank account following a
                7 day payment cycle from order delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
