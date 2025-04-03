"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

const ScrollUp = () => {
  const scrollUpButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 1) {
        scrollUpButtonRef.current?.classList.add("block");
        scrollUpButtonRef.current?.classList.remove("hidden");
      } else {
        scrollUpButtonRef.current?.classList.add("hidden");
        scrollUpButtonRef.current?.classList.remove("block");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      ref={scrollUpButtonRef}
      className="hidden fixed bottom-2 right-2 md:bottom-16 md:right-6 bg-ayicc-light-green text-white p-2 md:p-3 rounded-md shadow-sm shadow-[#ddd] flex-col items-center justify-center transition-all hover:scale-[1.1] hover:opacity-90"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FontAwesomeIcon icon={faChevronUp} className="text-4xl" />
    </button>
  );
};

export default ScrollUp;
