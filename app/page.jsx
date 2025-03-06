"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockFour,
  faLocationPin,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import dryGround from "../public/images/dry-ground.png";
import grass from "../public/images/grass.png";
import { useRef, useState } from "react";
import { Poppins } from "next/font/google";
import profile from "../public/images/profile.jpg";

const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  const eventsRef = useRef();
  const handleEventsScroll = () => {
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [events, setEvents] = useState([
    {
      title: "SADC Mining Indaba - Zimbabwe",
      date: "Sat Mar 01 2025 14:39:36 GMT+0200 (Central Africa Time)",
      location: "Harare",
      image:
        "https://sotip.cybersecdigital.com/wp-content/uploads/2025/02/DALL%C2%B7E-2025-02-12-15.53.39-A-professional-digital-flyer-for-the-SADC-Mining-Indaba-2025.-The-event-is-scheduled-for-25th-February-2025-and-will-focus-on-mining-investments-su.webp",
      link: "https://google.com",
    },
    {
      title: "SADC Imposium on Investment",
      date: "Thu Feb 27 2025 17:39:36 GMT+0200 (Central Africa Time)",
      location: "Gaborone",
      image:
        "https://sotip.cybersecdigital.com/wp-content/uploads/2025/02/Screenshot-2025-02-12-160756.png",
      link: "https://google.com",
    },
  ]);
  return (
    <>
      {events.length > 0 && (
        <div
          className="mx-auto items-center text-ayicc-dark-green font-bold py-4 overflow-hidden hover:animate-none bg-yellow-200"
          role="button"
          onClick={handleEventsScroll}
          title="View more events"
        >
          <div className="flex whitespace-nowrap animate-scroll hover:animate-none">
            <div className="flex gap-2">
              {events.map((item, index) => (
                <span key={index}>
                  <FontAwesomeIcon icon={faTree} />{" "}
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  - {item.title}{" "}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {events.map((item, index) => (
                <span key={index}>
                  <FontAwesomeIcon icon={faTree} />{" "}
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  - {item.title}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <header
        className="min-h-[80vh] w-full flex flex-col items-center justify-center select-none"
        style={{
          backgroundImage: `url(${dryGround.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="relative w-[30rem] text-white">
          <h1
            className={`text-9xl  text-center underline ${poppinsBlack.className}`}
          >
            AYICC
          </h1>
          <span
            className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-2xl w-full text-center font-[700] font-sans"
            style={{
              backgroundImage: `url(${dryGround.src})`,
              backgroundPosition: "bottom",
              backgroundSize: "cover",
            }}
          >
            African Youth Initiative on Climate Change
          </span>
        </div>
      </header>
      <main className="py-[2rem] px-[1rem] md:px-[4rem]">
        <section className="py-[4rem] relative flex flex-col md:flex-row justify-center items-start gap-[2rem]">
          <Image
            src={grass}
            alt="Connecting Global Trade, Investment, and Technology"
            className="w-full md:w-2/4 h-[80vh]"
          />
          <div className="flex flex-col gap-4 w-full md:w-2/4">
            <h2 className="heading-special text-3xl">Impact</h2>
            <p className="text-color-2">
              African Youth Initiative on Climate Change Zimbabwe (AYICC) is a
              platform for African youths led by youths in influencing climate
              action through areas such as engaging young people and creating
              resilient communities through climate change awareness programs.
              AYICC is a group of young volunteers who are dedicated and
              passionate about the environment. Over the years, it has been
              working with the governments on the implementation of national and
              international commitments on climate change mitigation and
              adaptation so as to increase sustainability, promote energy and
              water efficiency.
            </p>
          </div>
        </section>
        <section className="pt-[4rem] px-[2rem] md:px-[4rem] pb-[3rem]">
          <h2 className="text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-3xl mb-[3rem]">
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
              <div className="flex flex-col items-center gap-2" key={index}>
                <Image
                  src={item.image}
                  className="w-[7rem] md:w-[15rem] h-[7rem] md:h-[15rem] mx-auto rounded-full mb-[1rem]"
                  height={200}
                  alt={item.name}
                />
                <h3 className="font-bold text-[#002E5B]">{item.name}</h3>
                <h4 className="text-color-2">{item.role}</h4>
              </div>
            ))}
          </div>
        </section>
        <section className="py-[4rem]" ref={eventsRef}>
          <h2 className="heading-special text-3xl">Upcoming Events:</h2>
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-8 py-6">
              {events.map((item, index) => (
                <div
                  key={index}
                  className="relative shadow-sm shadow-color-2 rounded-sm md:max-h-[85vh]"
                >
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
                </div>
              ))}
            </div>
          ) : (
            <p>There are currently no events</p>
          )}
        </section>
      </main>
    </>
  );
}
