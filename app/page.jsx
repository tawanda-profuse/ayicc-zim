'use client'
import Image from "next/image";
import carousel1 from "../public/images/carousel-1.png";
import description from "../public/images/description.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faClockFour,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="w-[90vw] mx-auto items-center text-color-1 font-bold py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <div className="flex gap-2">
            <span>
              📈 SADC Commodity Market Update: Gold rises with strong demand in
              South Africa |
            </span>
            <span>
              Platinum gains amid supply concerns | Diamonds see stable prices
              in Botswana |
            </span>
            <span>Crude oil steady as Angola boosts production |</span>
            <span>Natural gas fluctuates in Mozambique |</span>
            <span>Maize prices climb due to weather challenges |</span>
            <span>Sugar surges with increased exports from Eswatini |</span>
            <span>
              Copper declines as Zambia and DRC face lower global demand | Stay
              tuned for more regional market insights! 🚀📉
            </span>
          </div>
          <div className="flex gap-2">
            <span>
              📈 SADC Commodity Market Update: Gold rises with strong demand in
              South Africa |
            </span>
            <span>
              Platinum gains amid supply concerns | Diamonds see stable prices
              in Botswana |
            </span>
            <span>Crude oil steady as Angola boosts production |</span>
            <span>Natural gas fluctuates in Mozambique |</span>
            <span>Maize prices climb due to weather challenges |</span>
            <span>Sugar surges with increased exports from Eswatini |</span>
            <span>
              Copper declines as Zambia and DRC face lower global demand | Stay
              tuned for more regional market insights! 🚀📉
            </span>
          </div>
        </div>
      </div>
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <p className="text-color-2 font-semibold">
        Welcome to the SADC Online Trade, Investment, and Technology Platform
        (SOTIP), your gateway to unlocking the full potential of trade,
        investment, and innovation across the Southern African Development
        Community (SADC) region.
      </p>
      <section className="py-[4rem] px-[3rem] relative flex flex-col md:flex-row justify-center items-center gap-[1rem]">
        <div className="flex flex-col w-full md:w-2/4 gap-2">
          <h1 className="text-black text-4xl font-bold">Trade</h1>
          <p className="text-color-2">
            The SADC-SOTIP (Southern Africa Trade and Investment Programme) aims
            to boost regional economic integration by simplifying trade
            processes, improving infrastructure, and promoting investment among
            SADC member states. By reducing trade barriers, harmonizing
            regulations, and enhancing transport networks, the program
            facilitates smoother trade and market access within the region.
          </p>
        </div>
        <Image src={carousel1} alt="Text sample" className="w-full md:w-2/4" />
        <button className="absolute left-0 top-2/4 -translate-y-2/4 text-3xl text-color-2">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="absolute right-0 top-2/4 -translate-y-2/4 text-3xl text-color-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
      <section className="py-[4rem] relative flex flex-col md:flex-row justify-center items-start gap-[2rem]">
        <Image
          src={description}
          alt="Connecting Global Trade, Investment, and Technology"
          className="w-full md:w-2/4"
        />
        <div className="flex flex-col gap-4 w-full md:w-2/4">
          <h2 className="heading-special text-3xl">
            Connecting Global Trade, Investment, and Technology
          </h2>
          <p className="text-color-2">
            SADC Business Council Platform is your one-stop destination for
            empowering international trade, fostering investment opportunities,
            and showcasing cutting-edge technologies. Our mission is to bridge
            the gap between businesses, investors, and innovators across the
            globe, driving sustainable growth and collaboration.
          </p>
          <p>With a focus on simplicity and innovation, our platform offers:</p>
          <ul className="list-disc pl-[1rem]">
            <li>
              <strong>Comprehensive Trade Tools</strong>: Explore detailed
              product catalogs, post and find trade leads, and access valuable
              resources to facilitate seamless transactions.
            </li>
            <li>
              <strong>Investment Opportunities</strong>: Discover curated
              projects seeking funding and connect with like-minded investors
              and organizations.
            </li>
            <li>
              <strong>Technology Exchange</strong>: Showcase groundbreaking
              technologies, enable global partnerships, and support R&D
              collaborations.
            </li>
          </ul>
        </div>
      </section>
      <section className="py-[4rem]">
        <h2 className="heading-special text-3xl">News:</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-[2rem] px-[1rem] py-[2rem]">
          <iframe
            src="https://www.youtube.com/embed/SMpFSY5NTI8"
            title="Peter Varndell (SADC Business Council): Southern African Industrialisation Forum 2024"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full md:w-2/4 border border-black h-[50vh]"
          ></iframe>
          <div className="flex flex-col gap-4 w-full md:w-2/4 text-color-2">
            <h4 className="font-bold">
              Peter Varndell (SADC Business Council): Southern African
              Industrialisation Forum 2024
            </h4>
            <p>
              The Southern African Industrialisation Forum 2024, championed by
              Peter Varndell and the SADC Business Council, serves as a critical
              platform for fostering regional collaboration, innovation, and
              sustainable economic growth. This forum brings together
              policymakers, business leaders, industry experts, and development
              partners to address key challenges and opportunities in advancing
              industrialisation across Southern Africa.
            </p>
            <a
              className="text-[#6c98e1] font-semibold"
              href="https://www.youtube.com/embed/SMpFSY5NTI8"
              target="_blank"
            >
              View More...
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-x-10 gap-y-16 py-6">
          {[
            {
              title: "About SOTIP",
              category: "Uncategorized",
              description:
                "Welcome to the SADC Online Trade, Investment, and Technology Platform (SOTIP), your gateway to unlocking the full potential of trade, investment, and innovation across the Southern African Development Community (SADC)",
              link: "1",
            },
            {
              title: "Launch of the Time Release Study Report",
              category: "Uncategorized",
              description:
                "On February 7, 2025, SADC, with support from the European Union under the Trade Facilitation Programme, launched the Time Release Study (TRS) Report for the North-South Trade Corridor in Harare,",
              link: "2",
            },
            {
              title: "Call for Increased Foreign Investment",
              category: "Business plans",
              description:
                "Supported by a robust sales force and tight cost controls, Pharm Ltd. experienced sustained double-digit growth over a number of years, only to find that their supply chain struggled to keep pace.",
              link: "3",
            },
            {
              title: "Within the construction industry as their overdraft",
              category: "Funding trends, Uncategorized",
              description:
                "Many businesses, large and small, have a huge source of great ideas that can help them improve, innovate, and grow, and yet so many of these companies never think of using this amazing corporate asset. What is this highly valuable asset? Its own people.",
              link: "4",
            },
            {
              title: "Strategic and commercial approach with issues",
              category: "Finance & accounting, Uncategorized",
              description:
                "Says Morgan Fraud, the author of The Thinking Corporation, “Given that we are all capable of contributing new ideas, the question becomes how do you successfully generate, capture, process and implement ideas?” Becoming an organization capable of answering this question can benefit in a number of ways",
              link: "5",
            },
            {
              title: "Seven weeks working ‘pro bono’ with a charity",
              category: "Business plans, Uncategorized",
              description:
                "Growth through innovation/creativity. Rather than be constrained by ideas for new products, services and new markets coming from just a few people, a Thinking Corporation can tap into the employees.",
              link: "6",
            },
          ].map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h3 className="text-color-1 font-bold text-xl">{item.title}</h3>
              <span className="text-color-2">{item.category}</span>
              <p>{item.description}</p>
              <hr/>
              <Link
                className="flex gap-2 items-center text-color-1 font-semibold mt-[2rem]"
                href={item.link}
              >
                Read More{" "}
                <FontAwesomeIcon icon={faArrowRight} className="text-black" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4rem]">
        <h2 className="heading-special text-3xl">Upcoming Events:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-8 py-6">
          {[
            {
              title: "SADC Mining Indaba - Zimbabwe",
              date: "Sat Mar 01 2025 14:39:36 GMT+0200 (Central Africa Time)",
              location: "Harare",
              image:
                "https://sotip.cybersecdigital.com/wp-content/uploads/2025/02/DALL%C2%B7E-2025-02-12-15.53.39-A-professional-digital-flyer-for-the-SADC-Mining-Indaba-2025.-The-event-is-scheduled-for-25th-February-2025-and-will-focus-on-mining-investments-su.webp",
              link: "https://google.com"
            },
            {
              title: "SADC Imposium on Investment",
              date: "Thu Feb 27 2025 17:39:36 GMT+0200 (Central Africa Time)",
              location: "Gaborone",
              image:
                "https://sotip.cybersecdigital.com/wp-content/uploads/2025/02/Screenshot-2025-02-12-160756.png",
              link: "https://google.com"
            },
          ].map((item, index) => (
            <Link key={index} className="relative shadow-sm shadow-color-2 rounded-sm max-h-[85vh]" href={item.link}>
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-2/4"
                width={200}
                height={200}
              />
              <div className="absolute top-2 left-2 py-1 rounded-md flex flex-col items-center bg-white min-w-[5rem]">
                <span className="font-bold text-2xl">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                  })}
                </span>
                <span className="uppercase">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
              </div>
              <div className="flex flex-col gap-2 mt-[2rem] p-4">
                <h3 className="heading-special text-2xl">{item.title}</h3>
                <span className="text-color-2 flex gap-1 items-center">
                  <FontAwesomeIcon icon={faClockFour} />
                  {new Date(item.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}{" "}
                  {new Date(item.date).toLocaleTimeString("en-US", {
                    timeStyle: "short",
                  })}
                </span>
                <span className="text-color-2 flex gap-1 items-center">
                  <FontAwesomeIcon icon={faLocationPin} />
                  {item.location}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
  );
}
