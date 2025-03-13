"use client";
import Link from "next/link";
import React, { useState } from "react";

const DropDown = ({ links, styles, setShowNavbar, mainLinkText, mainLink }) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="hidden md:block relative bg-white py-[1.38rem] px-[0.99rem]">
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
          className={`border-t-4 border-t-ayicc-dark-green absolute z-50 transition-all ease-in-out bottom-0 -left-2/4 bg-inherit w-[200%] translate-y-full rounded-md flex flex-col items-center justify-center hover:opacity-100 hover:visible text-color-1 ${
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
      <div className="relative bg-white flex md:hidden flex-col items-center gap-10 py-[1rem] px-[0.99rem]">
        <button
          className={`${styles} hover:text-ayicc-dark-green transition-all duration-[0.3]`}
          onClick={() => setShowLinks((prev) => !prev)}
        >
          {mainLinkText}
        </button>
        <div
          className={`absolute z-50 transition-all ease-in-out bottom-0 -left-2/4 w-[200%] translate-y-full rounded-md p-2 flex flex-col items-center justify-center hover:opacity-100 hover:visible text-color-1 gap-4 bg-[#ccc] ${
            showLinks ? "opacity-100" : "opacity-0 invisible"
          }`}
        >
          {links.map((item, index) => (
            <Link
              href={`/initiatives/#${item.url}`}
              key={index}
              className="w-full text-center hover:text-ayicc-dark-green hover:underline"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DropDown;
