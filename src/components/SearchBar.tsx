import React, { FC } from "react";
import Logo from "./icons/Logo";
import User from "./icons/User";
import Basket from "./icons/Basket";

const Header: FC = () => {
  return (
    <header className="container flex items-center justify-between py-5 ">
      <Logo />
      <div className="flex h-fit flex-row items-center justify-start rounded-xl border border-iron bg-alabaster px-4 py-2.5 ">
        <button
          type="button"
          className="flex flex-row items-center justify-start gap-2 text-base font-bold "
        >
          <p className="capitalize text-woodsmoke ">all categories</p>
          <i className="fa-solid fa-angle-down m-1.5 text-base text-olive-drab" />
        </button>
        <span className="mx-6 h-5 w-0.5 bg-iron " />
        <input
          type="text"
          name=""
          id=""
          className="bg-transparent w-52 overflow-hidden text-ellipsis whitespace-nowrap placeholder:capitalize placeholder:text-silver-chalice "
          placeholder="Search products, categories, brands, sku, filter options"
        />
        <i className="fa-solid fa-magnifying-glass ml-16 rotate-90 cursor-pointer text-base text-woodsmoke "></i>
      </div>
      <div className="flex flex-row items-center justify-start gap-10 ">
        <button className="">
          <User />
        </button>
        <button type="button" className="relative">
          <Basket />
          <span className="text-white absolute -bottom-1 left-0 h-4 w-4 rounded-full bg-burnt-sienna text-xs font-semibold shadow-md ">
            5
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
