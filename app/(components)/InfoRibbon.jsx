import {
  faCaretDown,
  faClockFour,
  faLocationPin,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InfoRibbon = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-8 bg-color-1 text-white text-sm">
      <span className="flex gap-3">
        <FontAwesomeIcon icon={faLocationPin} className="text-color-4 w-[0.8rem]" />1
        Robert Mugabe, Harare
      </span>
      <span className="flex gap-3">
        <FontAwesomeIcon icon={faClockFour} className="text-color-4 w-[0.8rem]" />
        Mon - Fri 8.00 - 17.00. Weekend CLOSED
      </span>
      <a href="mailto:info@sadcbc.org">info@sadcbc.org</a>
      <span className="flex gap-3">
        <FontAwesomeIcon icon={faPhone} className="text-color-4 w-[0.8rem]" />
        <a href="tel:+27 010 596 1888">+27 010 596 1888</a>
      </span>
      <button className="bg-color-4 flex gap-3 items-center text-color-1 p-4 h-full">
        Harare Office <FontAwesomeIcon icon={faCaretDown} className="w-[0.5rem]" />
      </button>
      <button className="text-white text-2xl">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default InfoRibbon;
