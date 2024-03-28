import Image from "next/image";
import React from "react";

const Card02 = () => {
  return (
    <div className="relative flex h-[400px] w-[320px] flex-col justify-between bg-transparent  ">
      <div className="imgBx relative h-60 w-full rounded-2xl bg-[#f00f00] ">
        <Image
          src={"/images/img_login.png"}
          fill
          alt=""
          className="object-cover"
        />
        <span className="imgCorner absolute bottom-0 left-1/2 h-[20px] w-[20px] rounded-[50%] bg-transparent " />
        <span className="imgCorner absolute bottom-[70px] left-0 h-[25px] w-[25px] rounded-[50%] bg-transparent " />
      </div>
      <div className="content relative h-[150px] w-full rounded-2xl rounded-tl-none bg-[#232949] ">
        <span className="price absolute -top-[80px] h-[80px] w-1/2 rounded-tr-3xl border-r-[10px] border-t-[10px] border-white bg-[#232949] ">
          <span className="rightCorner absolute -right-[25px] bottom-0 h-[25px] w-[25px] rounded-[50%] bg-transparent " />
          <span className="leftCorner absolute h-[25px] w-[25px] rounded-[50%] bg-transparent " />
        </span>
      </div>
    </div>
  );
};

export default Card02;
