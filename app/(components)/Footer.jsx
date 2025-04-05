"use client";
import {
  faClockFour,
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebookF } from "react-icons/fa";

const Footer = ({ year }) => {
  const router = useRouter();
  const handleSupportClick = () => {
    router.push("/contact");
  };
  return (
    <footer className="bg-ayicc-dark-green text-white p-[4rem] flex flex-col gap-4 justify-between items-center w-full">
      <div className="flex flex-wrap items-center justify-center gap-8 bg-ayicc-dark-green text-white text-sm">
        <span className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faLocationPin}
            className="text-[white] w-[0.8rem]"
          />
          10th floor, Bard House, 69 Samora Machel, Harare, Zimbabwe
        </span>
        <span className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faClockFour}
            className="text-[white] w-[0.8rem]"
          />
          Monday to Friday (8AM to 5PM)
        </span>
        <span className="flex items-center gap-3">
        <FontAwesomeIcon
            icon={faEnvelope}
            className="text-[white] w-[0.8rem]"
          />
        <a href="mailto:ayicczim@gmail.com" className="hover:underline">
          ayicczim@gmail.com
        </a>
        </span>
        <span className="flex items-center gap-3">
          <FontAwesomeIcon icon={faPhone} className="text-[white] w-[0.8rem]" />
          <a href="tel:+263785757022" className="hover:underline">
            +263 785 757 022
          </a>
        </span>
        <button
          className="py-2 px-4 rounded-2xl bg-yellow-300 text-ayicc-dark-green font-bold opacity-90 transition-all hover:opacity-100 hover:translate-x-2"
          onClick={handleSupportClick}
        >
          Support
        </button>
      </div>
      <p>&copy; African Youth Initiative on Climate Change Zimbabwe - {year}</p>
      <div className="flex gap-2">
        <a
          href="https://www.facebook.com/AYICCZimbabwe/"
          target="_blank"
          className="bg-white p-2 rounded-full hover:bg-[#00aced]"
        >
          <FaFacebookF className="text-color-3 hover:text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
