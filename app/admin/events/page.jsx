"use client";
import { faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { toast } from "react-toastify";

const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const AdminEvents = () => {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);
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

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user.role !== "admin") {
      redirect("/innovation-hub");
    }
  }, [session, status]);

  const handleDelete = async (eventId) => {
    setPending(true);
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        await response.json();
      } else {
        toast.error("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.error("An error has occurred. The event was not deleted.");
    } finally {
      setPending(false);
    }
  };

  return (
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <h1 className={`heading-special text-4xl ${poppinsBlack.className}`}>
        Manage Events
      </h1>
      <ul className="list-disc pl-4 mt-12 text-xl flex flex-col gap-4">
        <li className="transition-all hover:pl-2">
          <Link
            href="/admin"
            className="underline hover:text-ayicc-light-green"
          >
            Admin Home
          </Link>
        </li>
        <li className="transition-all hover:pl-2">
          <Link
            href="/events/create"
            className="underline hover:text-ayicc-light-green"
          >
            Create An Event
          </Link>
        </li>
      </ul>
      <p className="my-6 font-bold italic text-[tomato]">
        Click on the event name highlighted in green to edit the details.
      </p>
      {loading && (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-spin text-ayicc-dark-green text-6xl w-[3rem]"
          />
        </div>
      )}
      {!loading && (
        <>
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
          {events.length > 0 ? (
            <>
            <div className="flex justify-center items-center gap-4 my-2">
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
              <div className="overflow-x-auto my-4 min-h-[50vh]">
                <table className="border-collapse border-2 w-full">
                  <thead className="text-ayicc-dark-green font-bold text-2xl border-2 border-black">
                    <tr>
                      <th className=" border-r-2 border-r-black">Event Name</th>
                      <th className=" border-r-2 border-r-black">Event Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {events.map((item, index) => (
                      <tr key={index} className="border-b-2 border-b-black">
                        <td className="p-2 border-l-2 border-r-2 border-black">
                          <Link
                            href={`/admin/events/${item._id}`}
                            className="text-ayicc-dark-green underline"
                            title="Click to edit event details"
                          >
                            {item.title}
                          </Link>
                        </td>
                        <td className="p-2 border-r-2 border-r-black">
                          {new Date(item.date).toLocaleDateString("en-US", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}{" "}
                          {new Date(item.date).toLocaleTimeString("en-US", {
                            timeStyle: "short",
                          })}
                        </td>
                        <td className="p-2 border-r-2 border-r-black">
                          <button
                            onClick={() => {
                              handleDelete(item._id);
                              setEvents((prev) =>
                                prev.filter((event) => event._id !== item._id)
                              );
                            }}
                            disabled={pending}
                            title="Delete this event"
                          >
                            {pending ? (
                              <FontAwesomeIcon
                                icon={faSpinner}
                                className="animate-spin text-ayicc-dark-green"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="text-lg text-red-500"
                              />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
            </>
          ) : (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
              <p className="text-center font-bold">
                There are currently no events
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default AdminEvents;
