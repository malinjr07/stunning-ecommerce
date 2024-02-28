import Image from "next/image";
import React, { FC } from "react";
import Logo from "./icons/Logo";

const Header: FC = () => {
  return (
    <header className="container flex justify-between py-10 ">
      <Logo />
    </header>
  );
};

export default Header;
