"use client";
import React, { useEffect, useRef } from "react";
import catchThemYoung from "../../public/images/catch-them-young.jpg";
import conference3 from "../../public/images/conference-3.jpg";
import conference4 from "../../public/images/conference-4.jpg";
import unConference from "../../public/images/un-conference.jpg";
import environment from "../../public/images/environment.jpg";
import biodiversity from "../../public/images/biodiversity.jpg";
import research from "../../public/images/research.jpg";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Initiatives = () => {
  const awarenessRef = useRef(null);
  const advocacyRef = useRef(null);
  const educationRef = useRef(null);
  const bioRef = useRef(null);
  const wasteRef = useRef(null);
  const foodRef = useRef(null);
  const researchRef = useRef(null);

  useEffect(() => {
    document.title = "Our Initiatives | AYICC";

    if (window.location.href.includes("awareness")) {
      awarenessRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.href.includes("advocacy")) {
      advocacyRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.href.includes("climate-education")) {
      educationRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.href.includes("bio-conservation")) {
      bioRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.href.includes("waste-management")) {
      wasteRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.href.includes("food-security")) {
      foodRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.href.includes("research")) {
      researchRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <header
        className="min-h-[80vh] w-full flex flex-col gap-12 items-center justify-center select-none bg-no-repeat bg-left md:bg-top"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${unConference.src})`,
          backgroundSize: "cover",
        }}
      >
        <h1
          className={`text-white uppercase text-5xl md:text-9xl slide-in text-center ${poppinsBlack.className}`}
        >
          Initiatives
        </h1>
      </header>
      <main className="bg-ayicc-dark-green">
        <section
          className="md:px-[4rem] bg-white flex flex-col md:flex-row items-start justify-between gap-4"
          ref={awarenessRef}
        >
          <div className="px-[1rem] flex flex-col pt-[2rem]">
            <h2
              className={`heading-special text-4xl ${poppinsBlack.className}`}
            >
              Awareness
            </h2>
            <ul className="my-[1rem] list-disc pl-6 text-xl">
              <li>Radio</li>
              <li>TV</li>
              <li>Press Release</li>
            </ul>
          </div>
          <Image
            src={conference4}
            alt="Conference"
            className="w-full md:w-3/4 min-h-[50vh] md:h-auto"
            height={500}
          />
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${catchThemYoung.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          ref={advocacyRef}
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Advocacy
          </h2>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${conference4.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          ref={educationRef}
        >
          <h2
            className={`text-center font-bold underline md:underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Climate Education
          </h2>
        </section>
        <article
          className="pt-[2rem] md:pt-0 md:px-[4rem] flex flex-col md:flex-row items-start justify-between md:gap-4 bg-ayicc-gold"
          ref={bioRef}
        >
          <div className="md:py-[2rem] px-[1rem] flex flex-col">
            <h2
              className={`heading-special text-4xl ${poppinsBlack.className}`}
            >
              Bio Diversity Conservation
            </h2>
            <ul className="my-[1rem] list-disc pl-6 text-xl font-semibold">
              <li>Wetland Protection and Management </li>
              <li>Tree planting </li>
              <li>Work Camps </li>
            </ul>
          </div>
          <div
            className="w-full h-screen bg-cover"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(${biodiversity.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </article>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${environment.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          ref={wasteRef}
        >
          <h2
            className={`text-center font-bold underline md:underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Waste Management
          </h2>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${conference3.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          ref={foodRef}
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Food Security
          </h2>
        </section>
        <section
          className="py-[2rem] px-[1rem] md:px-[4rem] h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${research.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top right",
          }}
          ref={researchRef}
        >
          <h2
            className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
          >
            Research
          </h2>
        </section>
      </main>
    </>
  );
};

export default Initiatives;
