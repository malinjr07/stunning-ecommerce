import React from "react";

const Card01 = () => {
  return (
    <div className="relative flex h-[400px] w-[300px] items-center justify-center overflow-hidden rounded-[20px] bg-[#1e1e1e] ">
      <p className="z-30 text-[10em] font-bold text-white ">46</p>
      <span className=" absolute -top-[100px] left-[75px] z-10 h-[600px] w-[150px] animate-[animate_5s_linear_infinite] bg-gradient-to-t from-[#00e5ff] to-[#b400fb]  opacity-80"></span>
      <span className=" absolute inset-[5px] z-20 rounded-[18px] bg-[#1e1e1e] "></span>
    </div>
  );
};

export default Card01;
