"use client";
import {
  faChevronRight,
  faEnvelope,
  faLocationPin,
  faPhone,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - AYICC Zim";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.message) {
      toast.warn("Please enter a message.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <article className="py-[2rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row justify-center gap-10">
        <div className="w-full md:w-2/4 flex flex-col gap-4 order-2 md:order-1">
          <p className="pb-[1rem] border-b-4 border-b-color-2">
            Please let us know if you have a question, want to leave a comment,
            or would like further information about AYICC.
          </p>
          <h1 className="my-[1rem] font-bold text-2xl">Contact Details</h1>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faLocationPin}
              className="text-ayicc-light-green"
            />
            <address>
              10th floor, Bard House, 69 Samora Machel, Harare, Zimbabwe
            </address>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faLocationPin}
              className="text-ayicc-light-green"
            />
            <address>
              Kuimba Shiri, Lake Chivero Recreational Park, Norton, Zimbabwe
            </address>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-ayicc-light-green"
            />
            <a href="tel:+263736622454" className="text-color-1 underline">
            +263 736 622 454
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-ayicc-light-green"
            />
            <a
              href="mailto:ayicczim@gmail.com"
              className="text-color-1 underline"
            >
              ayicczim@gmail.com
            </a>
          </div>
          <div className="flex gap-3 items-center mt-[1rem]">
            {[
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/AYICCZimbabwe/",
              }
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
        <form
          className="w-full md:w-2/4 order order-1 md:order-2"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="first-name" className="text-lg font-bold">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="name"
                placeholder="Write your name e.g. John Doe"
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-lg font-bold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Topic to discuss"
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 my-6">
            <label
              htmlFor="message"
              className="text-lg font-bold required-field"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message to us"
              className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-ayicc-dark-green text-white hover:bg-ayicc-gold p-4 font-bold"
              disabled={loading}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              ) : (
                <>
                  Submit
                  <FontAwesomeIcon icon={faChevronRight} />
                </>
              )}
            </button>
          </div>
        </form>
      </article>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.2675254791416!2d31.050202015215053!3d-17.826089588804248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e3dd900005%3A0x6662bdf052355d57!2sBard%20House!5e0!3m2!1sen!2szw!4v1741221974709!5m2!1sen!2szw"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[60vh]"
      ></iframe>
    </main>
  );
};

export default Contact;
