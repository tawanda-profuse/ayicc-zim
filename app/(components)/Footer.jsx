"use client";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-ayicc-dark-green text-white py-[1rem] px-[4rem] flex flex-col md:flex-row gap-4 justify-between items-center w-full">
      &copy; African Youth Initiative on Climate Change {new Date().getFullYear()}
      <div className="flex gap-2">
        <a href="https://www.facebook.com/AYICCZimbabwe/" target="_blank" className="bg-white p-2 rounded-full hover:bg-[#00aced]">
          <FaFacebookF className="text-color-3 hover:text-white" />
        </a>
        <a href="https://x.com/ayicc" target="_blank" className="bg-white p-2 rounded-full hover:bg-[#00aced]">
          <FaTwitter className="text-color-3 hover:text-white" />
        </a>
        <a href="https://www.instagram.com/ayiccafrica" target="_blank" className="bg-white p-2 rounded-full hover:bg-[#00aced]">
          <FaInstagram className="text-color-3 hover:text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
