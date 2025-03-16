"use client";
import {
  faClockFour,
  faLocationPin,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

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

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventsData = await fetchAllEvents();
        setEvents(eventsData.events);
      } catch (error) {
        console.error("Error: ", error);
        alert("An error has occurred");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  return (
    <main className="py-10 px-[1rem] md:px-[10rem] grid grid-cols-1 justify-center gap-8">
      <h2 className={`heading-special text-4xl ${poppinsBlack.className}`}>
        Upcoming Events:
      </h2>
      {loading && (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-spin text-ayicc-dark-green text-6xl w-[5rem]"
          />
        </div>
      )}
      {!loading && (
        <>
          {events?.length > 0 ? (
            <>
              {events?.map((item, index) => (
                <article
                  key={index}
                  className="relative shadow-sm shadow-color-2 rounded-sm md:max-h-[85vh]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full md:w-2/4 h-2/4"
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
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </>
          ) : (
            <div className="min-h-[40vh] flex flex-col items-center justify-center">
              <p>There are currently no events</p>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Events;
