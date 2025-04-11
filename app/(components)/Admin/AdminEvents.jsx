"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Poppins } from "next/font/google";

const poppinsBlack = Poppins({
  weight: "900",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const AdminEvents = ({ initialEvents, initialTotalPages }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState(initialEvents);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(false);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })}`;
  };

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
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [page]);

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "admin") {
      router.push("/innovation-hub");
    }
  }, [session, status]);

  const handleDelete = async (eventId) => {
    setPending(true);
    setEvents((prev) => prev.filter((e) => e._id !== eventId));
    try {
      const res = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        toast.error("Failed to delete event.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while deleting.");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <header className="min-h-[35vh] bg-ayicc-light-green"></header>
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

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 my-4">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter a location e.g. Harare"
            className="border-2 border-black focus:border-ayicc-light-green outline-none p-2 w-full md:w-1/3 rounded"
          />
          <button
            onClick={() => {
              setPage(1);
              fetchEvents();
            }}
            className="bg-ayicc-dark-green text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>

        {/* Table or Loader */}
        {loading ? (
          <div className="min-h-[50vh] flex justify-center items-center">
            <FontAwesomeIcon
              icon={faSpinner}
              className="animate-spin text-ayicc-dark-green text-6xl"
            />
          </div>
        ) : events.length > 0 ? (
          <>
            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 my-2">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
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
                onClick={() => setPage((p) => p + 1)}
                className={`${
                  page === totalPages
                    ? "bg-[#ccc]"
                    : "bg-ayicc-dark-green hover:opacity-90"
                } text-white px-4 py-2 rounded`}
              >
                Next
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto my-4 min-h-[50vh]">
              <table className="border-collapse border-2 w-full">
                <thead className="text-ayicc-dark-green font-bold text-2xl border-2 border-black">
                  <tr>
                    <th className="border-r-2 border-r-black">Event Name</th>
                    <th className="border-r-2 border-r-black">Event Date</th>
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
                      <td className="p-2 border-r-2 border-black">
                        {formatDate(item.date)} {item.time || "08:00"}
                      </td>
                      <td className="p-2 border-r-2 border-black">
                        <button
                          onClick={() => handleDelete(item._id)}
                          disabled={pending}
                          title="Delete this event"
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="text-lg text-red-500"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <p className="text-center font-bold">
              There are currently no events
            </p>
          </div>
        )}
      </main>
    </>
  );
};

export default AdminEvents;
