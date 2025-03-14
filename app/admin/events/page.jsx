"use client";
import { faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";
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

const AdminEvents = () => {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);

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

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user.role !== "admin") {
      redirect("/innovation-hub");
    }
  }, [session, status]);

  const handleDelete = async (eventId) => {
    setPending(true);
    try {
      const response = await fetch(`/api/Events/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        alert("Failed to delete event.");
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("An error has occurred. The event was not deleted.");
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
          {events.length > 0 ? (
            <div className="overflow-x-auto my-8 min-h-[50vh]">
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
                          href={`/events/${item._id}`}
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
                          onClick={() => handleDelete(item._id)}
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
