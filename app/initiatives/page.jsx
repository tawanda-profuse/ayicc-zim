"use client";
import React, { useEffect } from "react";
import catchThemYoung from "../../public/images/catch-them-young.jpg";
import conference2 from "../../public/images/conference-2.jpg";
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
  useEffect(() => {
    document.title = "Our Initiatives | AYICC";
  }, []);

  return (
    <main>
      <header
        className="min-h-[80vh] w-full flex flex-col gap-12 items-center justify-center select-none bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${unConference.src})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <h1
          className={`text-white uppercase text-6xl md:text-9xl slide-in text-center ${poppinsBlack.className}`}
        >
          Initiatives
        </h1>
      </header>
      <section className="py-[2rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col">
          <h2 className={`heading-special text-4xl ${poppinsBlack.className}`}>
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
          className="w-full md:w-3/4 h-auto"
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
      >
        <h2
          className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
        >
          Climate Education
        </h2>
      </section>
      <section className="py-[2rem] px-[1rem] md:px-[4rem] flex flex-col md:flex-row items-center justify-between gap-4 bg-ayicc-gold">
        <div className="flex flex-col">
          <h2 className={`heading-special text-4xl ${poppinsBlack.className}`}>
            Bio Diversity Conservation
          </h2>
          <ul className="my-[1rem] list-disc pl-6 text-xl font-semibold">
            <li>Wetland Protection and Management </li>
            <li>Tree planting </li>
            <li>Work Camps </li>
          </ul>
        </div>
        <div
          className="w-full h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(${biodiversity.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </section>
      <section
        className="py-[2rem] px-[1rem] md:px-[4rem] h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${environment.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2
          className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
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
          backgroundPosition: "top right"
        }}
      >
        <h2
          className={`text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-4xl ${poppinsBlack.className} text-white`}
        >
          Research
        </h2>
      </section>
    </main>
  );
};

export default Initiatives;
