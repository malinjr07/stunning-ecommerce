import Link from "next/link";
import React, { FC } from "react";

const TopBar: FC = () => {
  return (
    <section className="border-b border-woodsmoke/5 ">
      <div className="container flex justify-between py-4 ">
        <div className="flex gap-8">
          <Link href="/" className="text-xs font-normal text-olive-drab  ">
            Chat with us
          </Link>
          <Link
            href="tel:+8801831141559"
            className="text-xs font-normal text-woodsmoke  "
          >
            +880 183 114 1559
          </Link>
          <Link
            href="mailto:info@dummyemail.com"
            className="text-xs font-normal text-woodsmoke  "
          >
            info@dummyemail.com
          </Link>
        </div>
        <div className="flex gap-8">
          <Link href="/" className="text-xs font-normal text-olive-drab  ">
            Blog
          </Link>
          <Link href="/" className="text-xs font-normal text-olive-drab  ">
            About Us
          </Link>
          <Link href="/" className="text-xs font-normal text-olive-drab  ">
            Career
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
