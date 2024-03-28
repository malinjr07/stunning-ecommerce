import React from "react";

const Card05 = () => {
  return (
    <section className="group flex w-full justify-center py-10 ">
      <div className="card relative m-5 h-[420px] w-[300px] overflow-hidden rounded-[20px] bg-white transition duration-500 ease-in-out hover:!scale-100 hover:!opacity-100 hover:!blur-0 group-hover:scale-90 group-hover:opacity-50 group-hover:blur-xl ">
        <div className="circle">
          <h2 className="">01</h2>
        </div>
        <div className="content">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem modi fugiat reprehenderit incidunt dolor porro
            accusamus unde vel dolorem eos?
          </p>
          <a href="#" className="">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card05;
