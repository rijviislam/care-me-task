import React from "react";
import Card1 from "../assets/image-0006.png";
import Card2 from "../assets/image-0010.png";
import Card3 from "../assets/image-0014.png";

export default function Experiences() {
  return (
    <div className="my-20 mx-5 md:mx-0">
      <h2 className="text-[#450000] font-bold text-[34px] text-center">
        Experiences suppliers love to talk about
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-[10px] mt-5 ">
        <div className="border border-gray-400 p-4 max-w-[400px] rounded-[5px]">
          <div className="relative">
            <img src={Card3} alt="Card Image" className="object-cover" />
            <div className="border-5 w-14 h-14 absolute -bottom-10 left-7 flex items-center justify-center bg-[#450000] border-[#FF8001] rounded-full cursor-pointer">
              <svg
                fill="#ffffff"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
              </svg>
            </div>
          </div>
          <div className="mt-18">
            <h3 className="text-[#450000] font-bold text-[20px]">
              Amit and Rajat Jain
            </h3>
            <p className="my-3 text-[16px] text-gray-500">Smartees, Tiruppur</p>
            <p className="text-[16px] text-gray-500">
              Our business has grown beyond our imagination, getting upto 10,000
              orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>
        <div className="border border-gray-400 p-4 max-w-[400px] rounded-[5px]">
          <div className="relative">
            <img src={Card2} alt="Card Image" className="object-cover" />
            <div className="border-5 w-14 h-14 absolute -bottom-10 left-7 flex items-center justify-center bg-[#450000] border-[#FF8001] rounded-full cursor-pointer">
              <svg
                fill="#ffffff"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
              </svg>
            </div>
          </div>
          <div className="mt-18">
            <h3 className="text-[#450000] font-bold text-[20px]">Suman</h3>
            <p className="my-3 text-[16px] text-gray-500">
              Keshav Fashion, Hisar
            </p>
            <p className="text-[16px] text-gray-500">
              Our business has grown beyond our imagination, getting upto 10,000
              orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>
        <div className="border border-gray-400 p-4 max-w-[400px] rounded-[5px]">
          <div className="relative">
            <img src={Card1} alt="Card Image" className="object-cover" />
            <div className="border-5 w-14 h-14 absolute -bottom-10 left-7 flex items-center justify-center bg-[#450000] border-[#FF8001] rounded-full cursor-pointer">
              <svg
                fill="#ffffff"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
              </svg>
            </div>
          </div>
          <div className="mt-18">
            <h3 className="text-[#450000] font-bold text-[20px]">
              Mohit Rathi
            </h3>
            <p className="my-3 text-[16px] text-gray-500">
              Meira Jewellery, Ahmedabad
            </p>
            <p className="text-[16px] text-gray-500">
              Our business has grown beyond our imagination, getting upto 10,000
              orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
