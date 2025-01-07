import Image from "next/image";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-navbar/80 backdrop-blur-sm md:px-10 py-4 z-50">
      <div className=" flex justify-between md:items-center items-start ">
        <div className="text-gold text-4xl flex  items-center">
          {" "}
          <Image
            src="/lorven-logo-removebg-preview.png"
            width={150}
            height={150}
            alt="logo"
          />
          Lorven Ai
        </div>

        <nav className=" gap-6 items-center md:flex hidden">
          <Link href="#home" className=" transition-colors ">
            Home
          </Link>
          <Link href="#about" className=" transition-colors">
            About
          </Link>
          <Link href="#products" className=" transition-colors">
            Products
          </Link>
          <Link
            href="#contact"
            className="sparkly-button relative inline-flex items-center px-6 py-2 
    rounded-full transition-all duration-300 transform hover:scale-105
    shadow-[0_0_15px_rgba(59,130,246,0.5)]
    hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
          >
            <span className="relative font-semibold">Join Us</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
