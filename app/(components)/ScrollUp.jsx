"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const ScrollUp = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollUpButton = document.getElementById("scroll-up-btn");

      if (scrollY > 1) {
        scrollUpButton?.classList.add("block");
        scrollUpButton?.classList.remove("hidden");
      } else {
        scrollUpButton?.classList.add("hidden");
        scrollUpButton?.classList.remove("block");
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
      id="scroll-up-btn"
      className="hidden fixed bottom-2 right-2 md:bottom-6 md:right-6 bg-ayicc-light-green text-white p-2 md:p-3 rounded-md shadow-sm shadow-[#ddd] flex-col items-center justify-center transition-all hover:scale-[1.1] hover:opacity-90"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FontAwesomeIcon icon={faChevronUp} className="text-4xl" />
    </button>
  );
};

export default ScrollUp;
