import React from "react";

const Card05 = () => {
  return (
    <section className="group/main card05 flex w-full justify-center py-10 ">
      {[1, 2, 3].map((el, id) => (
        <div
          key={id}
          className="card group/card border-gray-500 relative m-5 h-[420px] w-[300px] cursor-pointer overflow-hidden rounded-[20px] border bg-white transition duration-500 ease-in-out hover:!scale-100 hover:!opacity-100 hover:!blur-0 group-hover/main:scale-90 group-hover/main:opacity-50 group-hover/main:blur-xl"
        >
          <div
            className={`circle relative h-full w-full transition duration-500 ease-in-out ${
              id === 0
                ? "bg-[#ffaf00]"
                : id === 1
                  ? "bg-[#da2268]"
                  : id === 2
                    ? "bg-[#bb02ff]"
                    : "bg-black"
            }`}
          >
            <h2 className="py-[30px] text-center text-[4.5em] text-white ">
              0{el}
            </h2>
          </div>
          <div className="content absolute bottom-[10px] p-5 text-center ">
            <p className="text-[#666] group-hover/card:text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem modi fugiat reprehenderit incidunt dolor porro
              accusamus unde vel dolorem eos?
            </p>
            <a
              href="#"
              className={`relative mb-5 inline-block rounded-[40px] px-5 py-[10px] text-white no-underline transition-all duration-700 ease-in-out ${
                id === 0
                  ? "bg-[#ffaf00]"
                  : id === 1
                    ? "bg-[#da2268]"
                    : id === 2
                      ? "bg-[#bb02ff]"
                      : "bg-black"
              }`}
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card05;
