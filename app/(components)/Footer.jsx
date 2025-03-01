"use client";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002e5b] text-white py-[1rem] px-[4rem] flex justify-between items-center w-full">
      &copy; AYICC Zimbabwe {new Date().getFullYear()}
      <div className="flex gap-2">
        <a href="https://facebook.com" className="bg-white p-2 rounded-full hover:bg-[#3a5897]">
          <FaFacebookF className="text-color-3" />
        </a>
        <a href="https://x.com" className="bg-white p-2 rounded-full hover:bg-[#00aced]">
          <FaTwitter className="text-color-3" />
        </a>
        <a href="https://instagram.com" className="bg-white p-2 rounded-full hover:bg-[#ac907a">
          <FaInstagram className="text-color-3" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
