import React from "react";

const Card06 = () => {
  return (
    <section className="card06 flex w-full flex-wrap items-center  justify-center ">
      <div className="box relative aspect-square w-[400px] rounded-[20px] ">
        <span className="before absolute h-full w-full rounded-[20px] "></span>
        <span className="after absolute inset-2 rounded-[15px] border-[8px] border-[#25252b] bg-[#2d2d39] "></span>
      </div>
    </section>
  );
};

export default Card06;
