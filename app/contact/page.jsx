import {
  faChevronRight,
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const page = () => {
  return (
    <main>
      <section className="py-[2rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row justify-center gap-10">
        <div className="w-full md:w-2/4 flex flex-col gap-4 order-2 md:order-1">
          <p className="pb-[1rem] border-b-4 border-b-color-2">
            Please let us know if you have a question, want to leave a comment,
            or would like further information about AYICC.
          </p>
          <h1 className="my-[1rem] font-bold text-2xl">Contact Details</h1>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faLocationPin} className="text-[#337ab7]" />
            <address>6 Coombe Place, Rivonia</address>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faPhone} className="text-[#337ab7]" />
            <a href="tel:+27 010 596 1888" className="text-color-1 underline">
              +27 010 596 1888
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#337ab7]" />
            <a href="mailto:info@sadcbc.org" className="text-color-1 underline">
              info@sadcbc.org
            </a>
          </div>
          <div className="flex gap-3 items-center mt-[1rem]">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://google.com",
              },
              {
                icon: <FaTwitter />,
                link: "https://google.com",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://google.com",
              },
              {
                icon: <FaInstagram />,
                link: "https://google.com",
              },
            ].map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                key={index}
                className="text-white bg-[#BFBFBF] hover:bg-[#337ab7] p-2 rounded-full text-lg"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <form className="w-full md:w-2/4 order order-1 md:order-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="first-name" className="text-lg font-bold">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="First Name *"
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="interest" className="text-lg font-bold">
                Area of Interest
              </label>
              <select
                id="interest"
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
              >
                <option value="">Select an option*</option>
                <option value="Business">Business</option>
                <option value="Investments">Investments</option>
                <option value="Climate Change">Climate Change</option>
                <option value="Politics">Politics</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-lg font-bold">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Title e.g. Dr."
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-lg font-bold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Topic to discuss*"
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address*"
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 my-6">
            <label htmlFor="message" className="text-lg font-bold">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message to us*"
              className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-[#002E5B] text-white hover:bg-[yellow] hover:text-[#002E5B] p-4 font-bold"
            >
              Submit <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </form>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.2686022751286!2d31.04689217356964!3d-17.82603907625209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e3b85d8e7f%3A0x3f6c0d6fffc5342e!2sReserve%20Bank%20of%20Zimbabwe!5e0!3m2!1sen!2szw!4v1740854139270!5m2!1sen!2szw"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[60vh]"
      ></iframe>
    </main>
  );
};

export default page;
