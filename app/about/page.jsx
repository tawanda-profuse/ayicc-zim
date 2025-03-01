"use client";
import {
  faCartShopping,
  faMuseum,
  faSuitcase,
  faThumbsUp,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profile from "../../public/images/profile.jpg";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <section className="py-[2rem] px-[1rem] md:px-[4rem]">
        <h1 className="heading-special text-3xl">Our Story</h1>
        <p className="text-color-2 my-[1rem]">
          The SADC Trade and Investment Platform (SOTIP) was born out of the
          need to enhance regional economic integration, boost cross-border
          trade, and attract investments within the Southern African Development
          Community (SADC). Recognizing the untapped potential of intra-regional
          trade and foreign direct investment (FDI), SOTIP was designed to be a
          one-stop digital platform that connects businesses, investors,
          policymakers, and financial institutions across SADC’s 16 member
          states.
        </p>
        <p className="text-color-2 my-[1rem]">
          By leveraging technology and innovation, SOTIP serves as a catalyst
          for economic growth, providing essential tools and information to
          drive investment, streamline trade processes, and foster collaboration
          among businesses across various sectors.
        </p>
      </section>
      <section className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="grid w-full md:w-2/4 gap-y-4">
          <h2 className="heading-special text-3xl">Our Mission</h2>
          <p className="text-color-2">
            To be the leading digital platform that drives trade, attracts
            investments, and fosters economic integration across the SADC
            region, creating a prosperous and interconnected business
            environment for sustainable growth.
          </p>
        </div>
        <iframe
          src="https://youtube.com/embed/hYSMJwNKgv4"
          title="SADC Region Investment Opportunities"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full md:w-2/4 border border-black h-[50vh]"
        ></iframe>
      </section>
      <section className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="grid w-full md:w-2/4 gap-y-4">
          <h2 className="heading-special text-3xl">Our Vision</h2>
          <p className="text-color-2">
            To facilitate seamless trade and investment in the SADC region by
            providing innovative digital solutions, market intelligence, and
            strategic business connections, empowering businesses and investors
            to thrive in a competitive global economy.
          </p>
        </div>
        <iframe
          src="https://youtube.com/embed/AGWUTOu9tPM"
          title="SADC Region Investment Opportunities"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full md:w-2/4 border border-black h-[50vh]"
        ></iframe>
      </section>
      <section className="py-[3rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="grid w-full md:w-2/4 gap-y-4">
          <h2 className="heading-special text-3xl">Our Objectives</h2>
          <ol className="text-color-2 list-decimal px-6">
            <li className="mb-[0.5rem]">
              Enhance Regional Trade – Simplify cross-border trade by providing
              real-time market access, regulatory insights, and digital trade
              facilitation tools.
            </li>
            <li className="mb-[0.5rem]">
              Attract and Promote Investments – Connect investors with
              high-potential projects across key industries, fostering economic
              growth and job creation.
            </li>
            <li className="mb-[0.5rem]">
              Support SMEs and Entrepreneurs – Provide small and medium-sized
              enterprises with access to funding, business development
              resources, and regional market opportunities.
            </li>
            <li className="mb-[0.5rem]">
              Leverage Technology for Efficiency – Utilize cutting-edge digital
              solutions such as AI, and e-documentation to streamline trade and
              investment processes.
            </li>
          </ol>
        </div>
        <iframe
          src="https://youtube.com/embed/buj2ZBI_404"
          title="SADC Region Investment Opportunities"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full md:w-2/4 border border-black h-[50vh]"
        ></iframe>
      </section>
      <section className="pt-[4rem] px-[1rem] md:px-[4rem] pb-[3rem]">
        <h3 className="text-center font-bold underline underline-offset-[1rem] decoration-[yellow] decoration-[0.4rem]">
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center my-[4rem]">
          {[
            {
              icon: faMuseum,
              heading: "Trade",
              paragraph:
                "SOTIP simplifies cross-border trade by providing real-time access to market intelligence, trade policies, and digital documentation. Businesses can easily connect with buyers, suppliers, and logistics partners across the SADC region, reducing delays and maximizing opportunities.",
            },
            {
              icon: faSuitcase,
              heading: "Investments",
              paragraph:
                "With a dedicated investment marketplace, SOTIP showcases high-potential projects across multiple sectors. Investors benefit from transparent regulatory guidance, risk assessments, and direct access to government-backed initiatives, making it easier to invest with confidence.",
            },
            {
              icon: faCartShopping,
              heading: "Technology",
              paragraph:
                "SOTIP leverages cutting-edge technology to streamline trade and investment processes. From AI-powered business matchmaking to blockchain-enabled digital trade documentation, the platform ensures efficiency, security, and innovation in regional commerce.",
            },
          ].map((item, index) => (
            <div className="flex flex-col gap-6" key={index}>
              <FontAwesomeIcon
                icon={item.icon}
                className="bg-yellow-300 text-color-1 rounded-full py-4 w-[4rem] text-3xl"
              />
              <h3 className="text-2xl heading-special mt-[2rem]">
                {item.heading}
              </h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[2rem] px-[4rem] bg-[#fde428] flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-2/4 flex flex-col gap-4">
          <h4 className="font-bold">More than 10 Years of Experience</h4>
          <p className="text-color-2">
            We work with ambitious leaders who want their future to be
            successful and help them achieve extraordinary returns on their
            investments outcomes.
          </p>
        </div>
        <div className="w-full md:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
          {[
            {
              icon: faSuitcase,
              amount: 16,
              text: "Member States",
            },
            {
              icon: faUser,
              amount: 700,
              text: "Members",
            },
            {
              icon: faThumbsUp,
              amount: 3,
              text: "Main Areas of Interest",
            },
            {
              icon: faTrophy,
              amount: 19,
              text: "Awards Won",
            },
          ].map((item, index) => (
            <div className="flex items-center gap-4 text-[#002E5B]" key={index}>
              <FontAwesomeIcon icon={item.icon} className="text-5xl" />
              <div className="flex flex-col font-bold">
                <h4 className="text-5xl">{item.amount}</h4>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-[4rem] px-[2rem] md:px-[4rem] pb-[3rem] bg-[#F2F4FA]">
        <h2 className="text-center font-bold underline underline-offset-[1rem] decoration-[yellow] decoration-[0.4rem] text-3xl mb-[3rem]">
          Our Team
        </h2>
        <h3 className="text-center text-color-2">AYICC Zimbabwe Team</h3>
        <div className="my-[4rem] grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {[
            {
              name: "John Doe",
              role: "Secretary General",
              image: profile,
            },
            {
              name: "Peter Dube",
              role: "Investments",
              image: profile,
            },
            {
              name: "John Moshoeu",
              role: "Investments",
              image: profile,
            },
            {
              name: "Reuben Pedro",
              role: "Trade Specialist",
              image: profile,
            },
            {
              name: "Mary Dos Santos",
              role: "Administrator",
              image: profile,
            },
            {
              name: "Fernando Torres",
              role: "Consultant",
              image: profile,
            },
          ].map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <Image
                src={item.image}
                className="w-[7rem] md:w-[15rem] h-[7rem] md:h-[15rem] mx-auto rounded-full mb-[1rem]"
                height={200}
              />
              <h3 className="font-bold text-[#002E5B]">{item.name}</h3>
              <h4 className="text-color-2">{item.role}</h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
