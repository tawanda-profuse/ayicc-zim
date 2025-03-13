"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockFour,
  faLocationPin,
  faSpinner,
  faTree,
  faFish,
  faTrash,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import dryGround from "../public/images/dry-ground.png";
import donate2 from "../public/images/donate-2.jpg";
import { useEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const fetchAllEvents = async () => {
  try {
    const res = await fetch("/api/AllEvents", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
};
const fetchSomeEvents = async () => {
  try {
    const res = await fetch("/api/events", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default function Home() {
  const eventsRef = useRef(null);
  const handleEventsScroll = () => {
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventsData = await fetchSomeEvents();
        const allEventsData = await fetchAllEvents();
        setEvents(eventsData.events);
        setAllEvents(allEventsData.events);
      } catch (error) {
        console.error("Error: ", error);
        setEvents([]);
        setAllEvents([]);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  return (
    <>
      {events.length > 0 && (
        <>
          <div
            className="mx-auto items-center text-ayicc-dark-green font-bold py-4 overflow-hidden hover:animate-none bg-yellow-200"
            role="button"
            onClick={handleEventsScroll}
            title="View more events"
          >
            <div className="flex whitespace-nowrap animate-scroll">
              <div className="flex gap-12">
                {allEvents.map((item, index) => (
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
        </>
      )}
      <header
        className="min-h-[80vh] w-full flex flex-col gap-12 items-center justify-center select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${dryGround.src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="relative w-[90vw] md:w-[30rem] text-white slide-in">
          <h1
            className={`text-6xl md:text-9xl  text-center underline ${poppinsBlack.className}`}
          >
            AYICC
          </h1>
          <span className="hidden md:block absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-[1rem] md:text-2xl w-full text-center font-[700] font-sans bg-[#000000d2]">
            African Youth Initiative on Climate Change
          </span>
        </div>
        <p className="w-[90vw] md:w-[30rem] text-white font-semibold text-lg slide-in">
          African Youth Initiative on Climate Change Zimbabwe engages young
          people in Zimbabwe, Africa, and the world towards environmental and
          climate action for a sustainable future and planet.{" "}
        </p>
        <Link href="/register" className="rounded-2xl w-[15rem] text-xl transition-all hover:scale-[1.1] bg-ayicc-dark-green text-white p-4 appear text-center">
          Join Us
        </Link>
      </header>
      <main className="py-[2rem] px-[1rem] md:px-[4rem]">
        <section className="py-[4rem] relative flex flex-col md:flex-row justify-center items-center gap-[2rem]">
          <Image
            src={donate2}
            alt="Connecting Global Trade, Investment, and Technology"
            className="w-full md:w-2/4 h-auto max-h-screen"
          />
          <div className="flex flex-col gap-8 w-full md:w-2/4">
            <h2 className="heading-special text-3xl">Impact</h2>
            <p className="text-xl">
              A platform for African youths led by youths in influencing climate
              action through areas such as engaging young people and creating
              resilient communities through climate change awareness programs.
              AYICC is a group of young volunteers who are dedicated and
              passionate about the environment. Over the years, it has been
              working with the governments on the implementation of national and
              international commitments on climate change mitigation and
              adaptation so as to increase sustainability, promote energy and
              water efficiency.
            </p>
            <button
              className="py-2 px-4 rounded-2xl bg-yellow-300 font-bold opacity-90 transition-all hover:opacity-100 hover:scale-[1.2] min-w-[10rem] self-center text-3xl"
              onClick={() => router.push("/contact")}
            >
              Support
            </button>
          </div>
        </section>
        <article className="pt-[4rem] px-[2rem] md:px-[4rem] pb-[3rem]">
          <h2 className="text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-3xl mb-[3rem]">
            Top Stories
          </h2>
          <ul className="list-disc text-xl">
            <li>Launch of the Climate Finance and Innovation Hub</li>
            <li>
              Launch of the Children and Youth Policy Brief on the Zimbabwe
              Climate Change Management Bill
            </li>
            <li>COP29 Feedback</li>
            <li>RAMSAR COP16 - Victoria Falls </li>
          </ul>
        </article>
        <div className="py-[2rem] px-[4rem] bg-ayicc-light-green flex flex-col md:flex-row items-center justify-center gap-10 min-h-[50vh]">
          <div className="w-full md:w-2/4 flex flex-col gap-4 text-[#002E5B]">
            <h4 className="font-bold text-xl">Activities</h4>
            <p>
              To increase climate resilience in Zimbabwe and Africa through
              youth-led climate advocacy and initiatives, we participate in
              these activities.
            </p>
          </div>
          <div className="w-full md:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-4 items-center justify-center">
            {[
              {
                icon: faTree,
                text: "Tree Planting",
              },
              {
                icon: faTrash,
                text: "Waste Management",
              },
              {
                icon: faFish,
                text: "Fish Farming",
              },
              {
                icon: faVolumeHigh,
                text: "Thursday Climate Talk",
              },
            ].map((item, index) => (
              <div
                className="flex items-center gap-8 md:gap-4 text-[white]"
                key={index}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-[6rem] md:text-5xl"
                />
                <div className="flex flex-col font-bold">
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="py-[4rem]" ref={eventsRef}>
          <h2 className="heading-special text-3xl">Upcoming Events:</h2>
          {loading && (
            <div className="min-h-[20vh] flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faSpinner}
                className="animate-spin text-ayicc-dark-green text-6xl w-[5rem]"
              />
            </div>
          )}
          {!loading && (
            <>
              {events.length > 0 ? (
                <>
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
                          <h3 className="heading-special text-2xl">
                            {item.title}
                          </h3>
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
                </>
              ) : (
                <p>There are currently no events</p>
              )}
            </>
          )}
          <Link
            href="/events"
            className="text-center mx-auto block w-[10rem] rounded-md font-semibold transition-all hover:scale-[1.1] hover:underline my-[2rem] p-4 bg-ayicc-gold"
          >
            View All Events
          </Link>
        </section>
        <section className="flex flex-col justify-evenly bg-yellow-300 px-4">
          <h2 className={`text-5xl text-center ${poppinsBlack.className}`}>
            Sign Up for Newsletter
          </h2>
          <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              className="w-full md:w-2/4 p-2 rounded-md outline-none text-xl focus:border focus:border-black"
              placeholder="Enter email address"
            />
            <button className="w-full md:w-2/4 bg-ayicc-dark-green text-white rounded-md hover:bg-black py-3 font-bold">
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
