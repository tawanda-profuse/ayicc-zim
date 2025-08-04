"use client";
import {
  faClockFour,
  faLocationPin,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/AllEvents?location=${location}&page=${page}&limit=10`
      );
      const { data, totalPages } = await res.json();
      setEvents(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error: ", error);
      toast.error("Error fetching events");
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page]);

  return (
    <>
      <header className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-ayicc-light-green">
        <h1
          className={`text-white py-4 uppercase text-2xl md:text-6xl no-underline md:underline slide-in text-center font-[family-name:var(--font-poppins)]`}
        >
          Our Events
        </h1>
      </header>
      <main className="py-10 px-[1rem] md:px-[10rem] grid grid-cols-1 justify-center gap-8">
        <h2 className={`heading-special text-4xl font-[family-name:var(--font-poppins)]`}>
          Upcoming Events
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
            <p>Showing {events.length} result(s)</p>
            {/* Search Inputs */}
            <div className="flex flex-col md:flex-row gap-4 my-4">
              <input
                value={location}
                type="text"
                placeholder="Enter a location e.g. Harare"
                onChange={(e) => setLocation(e.target.value)}
                className="border-2 border-black focus:border-ayicc-light-green outline-none p-2 w-full md:w-1/3 rounded"
              />
              <button
                onClick={() => {
                  setPage(1); // Reset to first page on new search
                  fetchEvents();
                }}
                className="bg-ayicc-dark-green text-white px-4 py-2 rounded"
              >
                Search
              </button>
              <button
                className="bg-[#444] text-white px-4 py-2 rounded"
                onClick={() => {
                  setLocation("");
                }}
              >
                Clear
              </button>
            </div>
            <article className="relative shadow-sm shadow-color-2 rounded-sm">
              <Image
                src="https://i.ibb.co/KMBKtsx/ayicc-logo.png"
                alt="AYICC logo"
                className="events-image"
                width={200}
                height={200}
              />
              <div className="flex flex-col gap-2 mt-[2rem] p-4">
                <h3 className="heading-special text-2xl">
                  Thursday Climate Talk
                </h3>
                <span className="text-color-2 flex gap-1 items-center">
                  <FontAwesomeIcon icon={faClockFour} />
                  Thursdays (All Day)
                </span>
                <span className="text-color-2 flex gap-1 items-center">
                  <FontAwesomeIcon icon={faLocationPin} />
                  Harare, Zimbabwe
                </span>
                <p className="text-lg">
                  A platform for young people to engage in meaningful
                  discussions about the environment and climate change,
                  fostering awareness and actionable solutions for a sustainable
                  future.
                </p>
              </div>
            </article>
            <article className="relative shadow-sm shadow-color-2 rounded-sm">
              <Image
                src="https://enablingdevices.com/wp-content/uploads/2024/04/EarthDay.jpg"
                alt="Earth Day"
                className="events-image"
                width={200}
                height={200}
              />
              <div className="flex flex-col gap-2 mt-[2rem] p-4">
                <h3 className="heading-special text-2xl">Earth Day</h3>
                <span className="text-color-2 flex gap-1 items-center">
                  <FontAwesomeIcon icon={faClockFour} />
                  April 22, {new Date().getFullYear()}
                </span>
                <span className="text-color-2 flex gap-1 items-center">
                  <FontAwesomeIcon icon={faLocationPin} />
                  Wordwide
                </span>
                <p className="text-lg">
                  Earth Day is an annual event on April 22 to demonstrate
                  support for environmental protection. First held on April 22,
                  1970, it now includes a wide range of events coordinated
                  globally through earthday.org including 1 billion people in
                  more than 193 countries.
                </p>
              </div>
            </article>
            {events?.length > 0 ? (
              <>
                {events?.map((item, index) => (
                  <article
                    key={index}
                    className="relative shadow-sm shadow-color-2 rounded-sm"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="events-image"
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
                        {item.time || "08:00"}
                      </span>
                      <span className="text-color-2 flex gap-1 items-center">
                        <FontAwesomeIcon icon={faLocationPin} />
                        {item.location}
                      </span>
                      <p className="text-lg">{item.description}</p>
                    </div>
                  </article>
                ))}
                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className={`${
                      page === 1
                        ? "bg-[#ccc]"
                        : "bg-ayicc-dark-green hover:opacity-90"
                    } text-white px-4 py-2 rounded`}
                  >
                    Previous
                  </button>
                  <span>
                    Page {page} of {totalPages}
                  </span>
                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className={`${
                      page === totalPages
                        ? "bg-[#ccc]"
                        : "bg-ayicc-dark-green hover:opacity-90"
                    } text-white px-4 py-2 rounded`}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <div className="min-h-[40vh] flex flex-col items-center justify-center">
                <p>There are currently no events</p>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Events;
