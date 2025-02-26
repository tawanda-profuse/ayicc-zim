import Image from "next/image";
import carousel1 from "../public/images/carousel-1.png";
import description from "../public/images/description.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
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
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
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
      </section>
    </main>
  );
}
