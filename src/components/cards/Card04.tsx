import React from "react";
import Seedling from "../icons/Seedling";

const Card04 = () => {
  return (
    <div className="card h-80 w-80 rounded-[50px] bg-gradient-to-tl from-[#00ffd6] to-[#08e260] transition duration-500 ease-in-out  ">
      <div className="logo absolute right-0 top-0  ">
        <span className="circle circle1 absolute right-2 top-2 aspect-square w-[170px] rounded-full bg-[#00f9cd33] backdrop-blur-sm transition duration-500 ease-in-out"></span>
        <span className="circle circle2 absolute right-[10px] top-[10px] aspect-square w-[140px] rounded-full bg-[#00f9cd33] backdrop-blur-sm transition delay-300 duration-500 ease-in-out"></span>
        <span className="circle circle3 absolute right-[17px] top-[17px] aspect-square w-[110px] rounded-full bg-[#00f9cd33] backdrop-blur-sm transition delay-700 duration-500 ease-in-out"></span>
        <span className="circle circle4 absolute right-[23px] top-[23px] aspect-square w-[80px] rounded-full bg-[#00f9cd33] backdrop-blur-sm transition delay-[1200ms] duration-500 ease-in-out"></span>
        <span className="circle circle5 absolute right-[30px] top-[30px] flex aspect-square w-[50px] items-center justify-center rounded-full bg-[#00f9cd33] backdrop-blur-sm transition delay-[1600ms] duration-500 ease-in-out">
          <Seedling />
        </span>
      </div>
      <div className="glass absolute inset-2 rounded-[55px] rounded-tr-[100%] border-b border-l bg-gradient-to-b from-[#ffffff59] to-[#ffffffd0] transition duration-500 ease-in-out ">
        <div className="content">
          <h1 className="heading"></h1>
          <p className="details"></p>
        </div>
        <div className="footer absolute bottom-5 left-[30px] right-[30px] flex items-center justify-between ">
          <div className="social flex gap-[10px] ">
            <span className="social_icons flex aspect-square w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[#00894d] transition duration-500  "></span>
            <span className="social_icons flex aspect-square w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[#00894d] transition duration-500  "></span>
            <span className="social_icons flex aspect-square w-[30px] cursor-pointer items-center justify-center rounded-full bg-white text-[#00894d] transition duration-500  "></span>
          </div>
          <button
            type="button"
            className="link text-[14px] text-[#00c37b] duration-200 ease-in-out hover:text-[#00894d] "
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Card04;
