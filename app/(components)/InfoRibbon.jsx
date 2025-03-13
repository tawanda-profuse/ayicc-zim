"use client";
import {
  faClockFour,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const InfoRibbon = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex items-center justify-center gap-8 py-2 bg-ayicc-dark-green text-white text-sm">
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
      <a href="mailto:ayicczim@gmail.com" className="hover:underline">
        ayicczim@gmail.com
      </a>
      <span className="flex items-center gap-3">
        <FontAwesomeIcon icon={faPhone} className="text-[white] w-[0.8rem]" />
        <a href="tel:+263785757022" className="hover:underline">
          +263 78 575 7022
        </a>
      </span>
      <button
        className="py-2 px-4 rounded-2xl bg-yellow-300 text-ayicc-dark-green font-bold opacity-90 transition-all hover:opacity-100 hover:translate-x-2"
        onClick={() => router.push("/contact")}
      >
        Support
      </button>
    </div>
  );
};

export default InfoRibbon;
