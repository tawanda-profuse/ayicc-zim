"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import DropDown from "./DropDown";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const pathname = usePathname(); // Get current path

  const getLinkClass = (href) =>
    pathname === href ? "text-ayicc-dark-green" : "md:text-white";

  const links = [
    {
      url: "awareness",
      text: "Awareness",
    },
    {
      url: "advocacy",
      text: "Advocacy",
    },
    {
      url: "climate-education",
      text: "Climate Education",
    },
    {
      url: "bio-conservation",
      text: "Biodiversity Conservation",
    },
    {
      url: "waste-management",
      text: "Waste Management",
    },
    {
      url: "food-security",
      text: "Food Security",
    },
    {
      url: "research",
      text: "Research",
    },
  ];

  const aboutLinks = [
    {
      url: "goals",
      text: "Goals",
    },
    {
      url: "vision",
      text: "Vision",
    },
    {
      url: "mission",
      text: "Mission",
    },
    {
      url: "history",
      text: "History",
    },
    {
      url: "staff",
      text: "Staff",
    },
    {
      url: "thematic-areas",
      text: "Key Areas",
    },
  ];

  return (
    <>
      <nav className="absolute z-[100] top-0 left-0 w-full bg-transparent flex items-center justify-between p-2 md:px-8 font-bold md:text-[1rem]">
        <Link
          href="/"
          className="text-ayicc-dark-green text-4xl font-extrabold bg-white py-1 px-2 rounded-lg transition-all hover:scale-110"
        >
          AYICC ZIM
        </Link>
        <div
          className={`text-xl md:text-[1rem] flex items-center transition-all duration-[1000ms] ease-in-out fixed md:relative flex-col md:flex-row ${
            showNavbar
              ? "w-full min-h-screen top-0 left-0 bg-white z-50 max-h-screen overflow-y-auto opacity-100 py-[2rem] justify-center"
              : "-top-full -right-full opacity-0"
          } md:flex-row md:top-0 md:left-0 md:pt-0 md:opacity-100`}
        >
          <button
            className="block md:hidden absolute top-2 right-2 text-color-1 text-4xl"
            onClick={() => setShowNavbar(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <DropDown
            mainLink={"/about"}
            mainLinkText={"About"}
            links={aboutLinks}
            styles={getLinkClass("/about")}
            setShowNavbar={setShowNavbar}
          />
          <DropDown
            mainLink={"/initiatives"}
            mainLinkText={"Initiatives"}
            links={links}
            styles={getLinkClass("/initiatives")}
            setShowNavbar={setShowNavbar}
          />
          <Link
            href="/events"
            className={`${getLinkClass(
              "/events"
            )} hover:text-ayicc-dark-green py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
            onClick={() => setShowNavbar(false)}
          >
            Upcoming Events
          </Link>
          <Link
            href="/opportunities"
            className={`${getLinkClass(
              "/opportunities"
            )} hover:text-ayicc-dark-green py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
            onClick={() => setShowNavbar(false)}
          >
            Opportunities
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
          <Link
            href="/contact"
            className={`${getLinkClass(
              "/contact"
            )} hover:text-ayicc-dark-green py-[1.38rem] px-[0.99rem] transition-all duration-[0.3]`}
            onClick={() => setShowNavbar(false)}
          >
            Contact Us
          </Link>
        </div>
        <button
          className="block md:hidden text-white text-4xl"
          onClick={() => setShowNavbar(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
