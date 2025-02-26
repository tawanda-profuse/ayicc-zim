"use client";
import Image from "next/image";
import React, { useState } from "react";
import zimFlag from "../../public/images/zim_national_flag.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between py-[1rem] px-8 font-bold text-lg md:text-sm border-b border-b-color-2">
        <Image src={zimFlag} alt="Company logo" width={60} height={40} />
        <div
          className={`${
            showNavbar ? "flex" : " hidden"
          } md:flex flex-col items-center pt-[2rem] md:pt-0 max-h-screen overflow-y-auto md:flex-row fixed md:relative top-0 left-0 w-full md:w-[90%] bg-white z-50`}
        >
          <button
            className="block md:hidden absolute top-2 right-2 text-color-1 text-4xl"
            onClick={() => setShowNavbar(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link
            href="/"
            className="text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Trade
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Investment
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Technology
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Countries
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Business Directory
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Resources
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="text-[#002E5B] hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]"
          >
            Register/Login
          </Link>
        </div>
        <button
          className="block md:hidden text-color-1 text-4xl"
          onClick={() => setShowNavbar(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
      <div className="w-[90vw] mx-auto items-center text-color-1 font-bold py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="flex gap-2">
            <span>
              📈 SADC Commodity Market Update: Gold rises with strong demand in
              South Africa |
            </span>
            <span>
              Platinum gains amid supply concerns | Diamonds see stable prices
              in Botswana |
            </span>
            <span>Crude oil steady as Angola boosts production |</span>
            <span>Natural gas fluctuates in Mozambique |</span>
            <span>Maize prices climb due to weather challenges |</span>
            <span>Sugar surges with increased exports from Eswatini |</span>
            <span>
              Copper declines as Zambia and DRC face lower global demand | Stay
              tuned for more regional market insights! 🚀📉
            </span>
          </div>
          <div className="flex gap-2">
            <span>
              📈 SADC Commodity Market Update: Gold rises with strong demand in
              South Africa |
            </span>
            <span>
              Platinum gains amid supply concerns | Diamonds see stable prices
              in Botswana |
            </span>
            <span>Crude oil steady as Angola boosts production |</span>
            <span>Natural gas fluctuates in Mozambique |</span>
            <span>Maize prices climb due to weather challenges |</span>
            <span>Sugar surges with increased exports from Eswatini |</span>
            <span>
              Copper declines as Zambia and DRC face lower global demand | Stay
              tuned for more regional market insights! 🚀📉
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
