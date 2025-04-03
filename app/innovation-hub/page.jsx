"use client";
import React, { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import IHHeader from "../../public/images/innovation-hub-header.jpg";
import IH from "../../public/images/innovation-hub.jpg";
import IH1 from "../../public/images/innovation-hub-1.jpg";
import IH2 from "../../public/images/innovation-hub-2.jpg";
import IH3 from "../../public/images/innovation-hub-3.jpg";
import IH4 from "../../public/images/innovation-hub-4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChevronRight,
  faExternalLink,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Accordion from "../(components)/Accordion";
const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const InnovationHub = () => {
  useEffect(() => {
    document.title = "Climate, Finance and Innovation Hub | AYICC";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Comment From Innovation Hub Page",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const messageRef = useRef(null);
  const descriptionRef = useRef(null);
  const toolsRef = useRef(null);
  const trainingsRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const commentsRef = useRef(null);
  const { data: session } = useSession();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    messageRef.current?.scrollIntoView({ behavior: "smooth" });

    if (!formData.message) {
      setIsError(true);
      setSuccessMessage("Message is required");
      setLoading(false);
      return;
    }

    setSuccessMessage("");

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
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSuccessMessage(data.message);
        setIsError(true);
      }
    } catch (error) {
      setSuccessMessage("Failed to send message. Try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header
        className="min-h-[50vh] md:min-h-[80vh] w-full flex flex-col md:flex-row gap-12 items-center justify-center select-none bg-no-repeat py-12 md:py-4 md:px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${IHHeader.src})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full flex flex-col items-center md:items-start px-4 gap-4">
          <h1
            className={`text-white md:bg-[#00000099] py-4 uppercase text-2xl md:text-6xl no-underline md:underline slide-in text-center ${poppinsBlack.className}`}
          >
            Climate, Finance and Innovation Hub
          </h1>
          <span className="text-white text-center">
            {session?.user && (
              <>
                {session.user.email}
                {session?.user.role === "admin" && " (Administrator)"}
                {session?.user.role !== "admin" &&
                  ` (${session?.user.userType})`}
              </>
            )}
          </span>
        </div>
        <ul className="md:w-2/4 list-disc underline text-white text-xl flex flex-col gap-2">
          <li className="hover:pl-2 transition-all">
            <button
              className="underline"
              onClick={() =>
                descriptionRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Description
            </button>
          </li>
          <li className="hover:pl-2 transition-all">
            <Link href="/innovation-hub/profiles" className="underline">
              Profiles
            </Link>
          </li>
          <li className="hover:pl-2 transition-all">
            <button
              className="underline"
              onClick={() =>
                toolsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Tools
            </button>
          </li>
          <li className="hover:pl-2 transition-all">
            <button
              className="underline"
              onClick={() =>
                trainingsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Upcoming Trainings
            </button>
          </li>
          <li className="hover:pl-2 transition-all">
            <button
              className="underline"
              onClick={() =>
                opportunitiesRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Opportunities
            </button>
          </li>
          <li className="hover:pl-2 transition-all">
            <button
              className="underline"
              onClick={() =>
                commentsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Comment
            </button>
          </li>
          {session?.user.role === "admin" && (
            <li className="hover:pl-2 transition-all">
              <Link href="/admin" className="underline">
                Admin Portal
              </Link>
            </li>
          )}
          <li className="hover:pl-2 transition-all">
            <button
              className="underline"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            >
              Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </li>
        </ul>
      </header>
      <main>
        <section
          className="md:pt-0 flex flex-col md:flex-row items-start justify-center gap-4"
          ref={descriptionRef}
        >
          <div className="pt-12 flex flex-col items-center w-full md:w-2/4">
            <p className="text-xl text-center p-4">
              Welcome to the Innovation Hub. This is a platform that is aimed at
              bridging the gap between the young innovators for climate action
              and their access to climate finance. This platform will also
              develop the skills and bankability of the innovations by
              connecting them with funding opportunities, training and excerpts
              to encourage innovation and improve access to climate change
              finance in Zimbabwe.
            </p>
          </div>
          <div
            className="w-full md:w-2/4 min-h-[50vh] md:h-screen"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${IH.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </section>
        <section
          className="flex flex-col md:flex-row items-start justify-center gap-4 min-h-screen"
          ref={toolsRef}
        >
          <div className="md:pt-0 flex flex-col items-center w-full md:w-2/4">
            <h2
              className={`pt-12 heading-special text-4xl ${poppinsBlack.className}`}
            >
              Tools
            </h2>
            <div className="flex flex-col gap-3 my-4 w-[90%]">
              <Accordion
                data={[
                  {
                    text: "IPCC Sectors",
                    link: "https://unfccc.int/files/essential_background/background_publications_htmlpdf/application/pdf/conveng.pdf",
                    details: [
                      "Agriculture, Forestry and Other Land Use (AFOLU)",
                      "Waste",
                      "Industry Processes and Product Use (IPPU)",
                      "Energy ",
                    ],
                  },
                  {
                    text: "Climate Finance",
                    details: ["No details at the moment"],
                  },
                  {
                    text: "Business Development and Management",
                    details: ["No details at the moment"],
                  },
                  {
                    text: "Intellectual Property Rights",
                    details: ["No details at the moment"],
                  },
                  {
                    text: "Business Registration",
                    details: ["No details at the moment"],
                  },
                ]}
              />
            </div>
          </div>
          <div
            className="w-full md:w-2/4 min-h-[50vh] md:h-screen"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${IH1.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </section>
        <section
          className="flex flex-col md:flex-row items-start justify-center gap-4 min-h-screen"
          ref={trainingsRef}
        >
          <div className="pt-12 flex flex-col gap-8 items-center w-full md:w-2/4">
            <h2
              className={`text-center font-bold underline md:underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className}`}
            >
              Upcoming Trainings
            </h2>
            <p className="text-xl text-center p-4">
              We currently do not have any upcoming trainings
            </p>
          </div>
          <div
            className="w-full md:w-2/4 h-screen"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${IH2.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] min-h-screen flex flex-col items-center gap-8"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${IH3.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          ref={opportunitiesRef}
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Opportunities
          </h2>
          <ul className="md:w-2/4 list-disc text-white text-xl flex flex-col gap-2 pl-[2rem] mt-[1rem]">
            <li className="hover:pl-2 transition-all">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd04nSNn1l7NzLvljJxxJ47-YL7MykIt6fxttYZ5cBmSP3hFw/viewform?vc=0&c=0&w=1&flr=0&fbclid=IwY2xjawJbTrNleHRuA2FlbQIxMAABHYdjyMygqbJxjmoQkXlLTIMnCeU1yyUED7tAUF8aWVFpOI5dM3XbD1Boiw_aem_KtKLe94nE2QPRdcQBc8YqQ"
                target="_blank"
                className="hover:underline"
              >
                Youth and Children on the draft Zimbabwe Climate Change
                Management Bill form <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </li>
            <li className="hover:pl-2 transition-all">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdFeA0reekZD1-qL8fJKBHRFxwG5yVUJzuHlN_da0v6iLzt8A/closedform"
                target="_blank"
                className="hover:underline"
              >
                Application for the Zimbabwean Youth Climate Innovation Hub 2024{" "}
                <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </li>
          </ul>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${IH4.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          ref={commentsRef}
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Comment
          </h2>
          <form
            className=" my-12 mx-auto w-full md:w-2/4 order order-1 md:order-2"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="first-name"
                  className="text-lg font-bold text-white"
                >
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
                <label htmlFor="email" className="text-lg font-bold text-white">
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
                className="text-lg font-bold required-field text-white"
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
              {successMessage && (
                <p
                  className={`bg-black p-2 font-bold ${
                    isError ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {successMessage}
                </p>
              )}
            </div>
            <div ref={messageRef}></div>
          </form>
        </section>
      </main>
    </>
  );
};

export default InnovationHub;
