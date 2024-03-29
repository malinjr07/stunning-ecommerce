"use client";
import React, { useRef, useState } from "react";

const NavBar01 = () => {
  const [change, setChange] = useState(false);
  const marker = useRef<HTMLDivElement>(null);
  return (
    <nav
      onClick={() => {
        setChange(!change);
      }}
      className="navBar01 relative flex gap-[30px] bg-[#222327] px-[60px] py-[15px] "
    >
      <button
        type="button"
        onClick={(e) => {
          marker.current?.classList.add("block");
          marker.current?.classList.remove("hidden");
          marker.current!.style.left = e.currentTarget.offsetLeft + "px";
          marker.current!.style.width = e.currentTarget.offsetWidth + "px";
          marker.current!.style.filter = `hue-rotate(${
            Math.random() * 360
          }deg)`;
          // marker.current!.style.width = e + 'px'
          console.log("E is", e);
        }}
        className="relative z-10 flex h-[75px] items-center justify-center px-[30px] text-[1.5em] text-[#999] no-underline duration-500 "
      >
        Active
      </button>
      <button
        type="button"
        onClick={(e) => {
          marker.current?.classList.add("block");
          marker.current?.classList.remove("hidden");
          marker.current!.style.left = e.currentTarget.offsetLeft + "px";
          marker.current!.style.width = e.currentTarget.offsetWidth + "px";
          marker.current!.style.filter = `hue-rotate(${
            Math.random() * 360
          }deg)`;
          // marker.current!.style.width = e + 'px'
          console.log("E is", e);
        }}
        className="relative z-10 flex h-[75px] items-center justify-center px-[30px] text-[1.5em] text-[#999] no-underline duration-500 "
      >
        Disabled
      </button>
      <button
        type="button"
        onClick={(e) => {
          marker.current?.classList.add("block");
          marker.current?.classList.remove("hidden");
          marker.current!.style.left = e.currentTarget.offsetLeft + "px";
          marker.current!.style.width = e.currentTarget.offsetWidth + "px";
          marker.current!.style.filter = `hue-rotate(${
            Math.random() * 360
          }deg)`;
          // marker.current!.style.width = e + 'px'
          console.log("E is", e);
        }}
        className="relative z-10 flex h-[75px] items-center justify-center px-[30px] text-[1.5em] text-[#999] no-underline duration-500 "
      >
        Deleted
      </button>
      <button
        type="button"
        onClick={(e) => {
          marker.current?.classList.add("block");
          marker.current?.classList.remove("hidden");
          marker.current!.style.left = e.currentTarget.offsetLeft + "px";
          marker.current!.style.width = e.currentTarget.offsetWidth + "px";
          marker.current!.style.filter = `hue-rotate(${
            Math.random() * 360
          }deg)`;
          // marker.current!.style.width = e + 'px'
          console.log("E is", e);
        }}
        className="relative z-10 flex h-[75px] items-center justify-center px-[30px] text-[1.5em] text-[#999] no-underline duration-500 "
      >
        Suspended
      </button>
      <button
        type="button"
        onClick={(e) => {
          marker.current?.classList.add("block");
          marker.current?.classList.remove("hidden");
          marker.current!.style.left = e.currentTarget.offsetLeft + "px";
          marker.current!.style.width = e.currentTarget.offsetWidth + "px";
          marker.current!.style.filter = `hue-rotate(${
            Math.random() * 360
          }deg)`;
          // marker.current!.style.width = e + 'px'
          console.log("E is", e);
        }}
        className="relative z-10 flex h-[75px] items-center justify-center px-[30px] text-[1.5em] text-[#999] no-underline duration-500 "
      >
        Archived
      </button>
      <div
        ref={marker}
        className="indicator absolute right-0 hidden h-[75px] w-[150px] bg-[#29fd53] "
      >
        <span
          className={` absolute h-[15px] w-[50px] rounded-2xl bg-[#29fd53] transition-all duration-500  ${
            change ? "beforeClicked -left-[10px]" : "before -left-[30px]"
          } `}
        />
        <span
          className={` after absolute h-[15px] w-[50px] rounded-2xl bg-[#29fd53] transition-all duration-500  ${
            change ? "afterClicked -right-[10px]" : "after -right-[30px]"
          } `}
        />
      </div>
    </nav>
  );
};

export default NavBar01;
