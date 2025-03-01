"use client";
import Image from "next/image";
import React, { useState } from "react";
import zimFlag from "../../public/images/zim_national_flag.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname(); // Get current path

  const getLinkClass = (href) =>
    pathname === href ? "text-[#6C98E1]" : "text-[#002E5B]";

  return (
    <>
      <nav className="flex items-center justify-between py-[1rem] px-8 font-bold text-lg md:text-[1rem] border-b border-b-color-2">
        <Image src={zimFlag} alt="Company logo" width={60} height={40} />
        <div
          className={`${
            showNavbar ? "flex w-full" : " hidden"
          } md:flex flex-col items-center pt-[2rem] md:pt-0 max-h-screen overflow-y-auto md:flex-row fixed md:relative top-0 left-0 bg-white z-50`}
        >
          <button
            className="block md:hidden absolute top-2 right-2 text-color-1 text-4xl"
            onClick={() => setShowNavbar(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link
            href="/"
            className={`${getLinkClass(
              "/"
            )} py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${getLinkClass(
              "/about"
            )} hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={`${getLinkClass(
              "/contact"
            )} hover:text-[#6C98E1] py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
          >
            Contact Us
          </Link>
        </div>
        <button
          className="block md:hidden text-color-1 text-4xl"
          onClick={() => setShowNavbar(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
