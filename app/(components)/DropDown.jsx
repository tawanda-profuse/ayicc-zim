"use client";
import Link from "next/link";
import React, { useState } from "react";

const DropDown = ({ links, styles, setShowNavbar, mainLinkText, mainLink }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="hidden md:block relative bg-transparent py-[1.38rem] px-[0.99rem]">
        <Link
          href={mainLink}
          className={`${styles} hover:text-ayicc-dark-green transition-all duration-[0.3] py-[1.38rem]`}
          onClick={() => setShowNavbar(false)}
          onMouseOver={() => setShowLinks(true)}
          onMouseOut={() => setShowLinks(false)}
        >
          {mainLinkText}
        </Link>
        <div
          className={`bg-white border-t-4 border-t-ayicc-dark-green absolute z-50 transition-all ease-in-out bottom-0 -left-2/4 bg-inherit w-[200%] translate-y-full rounded-md flex flex-col items-center justify-center hover:opacity-100 hover:visible text-color-1 ${
            showLinks ? "opacity-100" : "opacity-0 invisible"
          }`}
        >
          {links.map((item, index) => (
            <Link
              href={`${mainLink}/#${item.url}`}
              key={index}
              className="w-full text-center hover:bg-ayicc-dark-green hover:underline hover:text-white py-4"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href={mainLink}
        className={`block md:hidden ${styles} hover:text-ayicc-dark-green transition-all duration-[0.3] py-[1.38rem]`}
        onClick={() => setShowNavbar(false)}
      >
        {mainLinkText}
      </Link>
    </>
  );
};

export default DropDown;
