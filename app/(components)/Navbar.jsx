"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/images/ayicc-logo.jpeg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname(); // Get current path

  const getLinkClass = (href) =>
    pathname === href ? "text-ayicc-dark-green" : "text-[#002E5B]";

  return (
    <>
      <nav className="bg-white flex items-center justify-between py-[1rem] md:py-0 px-8 font-bold text-lg md:text-[1rem] border-b border-b-color-2">
        <Link href="/">
          <Image src={logo} alt="Company logo" width={120} height={40} />
        </Link>
        <div
          className={`flex items-center transition-all duration-500 ease-in-out fixed md:relative ${
            showNavbar
              ? "flex-col w-full min-h-[50vh] top-0 left-0 bg-white z-50 max-h-screen overflow-y-auto opacity-100 py-[2rem]"
              : "-top-full -right-full opacity-0"
          } md:flex-row md:top-0 md:left-0 md:pt-0 md:opacity-100`}
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
            )} hover:text-ayicc-dark-green py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
            onClick={() => setShowNavbar(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${getLinkClass(
              "/about"
            )} hover:text-ayicc-dark-green py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
            onClick={() => setShowNavbar(false)}
          >
            About Us
          </Link>
          <Link
            href="/key-areas"
            className={`${getLinkClass(
              "/key-areas"
            )} hover:text-ayicc-dark-green py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
            onClick={() => setShowNavbar(false)}
          >
            Key Areas
          </Link>
          <Link
            href="/contact"
            className={`${getLinkClass(
              "/contact"
            )} hover:text-ayicc-dark-green py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
            onClick={() => setShowNavbar(false)}
          >
            Contact Us
          </Link>
          <Link
            href="/innovation-hub"
            className={`${getLinkClass(
              "/innovation-hub"
            )} hover:text-ayicc-dark-green py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
            onClick={() => setShowNavbar(false)}
          >
            Innovation Hub
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
