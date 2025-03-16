"use client";
import EventForm from "@/app/(components)/EventForm";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const fetchEventDetails = async (id) => {
  try {
    const response = await fetch(`/api/events/${id}`);
    const { event } = await response.json();
    return { event };
  } catch (error) {
    console.error("Error", error);
  }
};

const EventDetails = () => {
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    image: "",
    description: "",
  });
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const { data: session, status } = useSession();
  const [event, setEvent] = useState({});

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user?.role !== "admin") {
      redirect("/innovation-hub");
    }
  }, [session, status]);

  useEffect(() => {
    const getEventDetails = async () => {
      try {
        const eventData = await fetchEventDetails(id);

        setFormData(eventData?.event);
        setEvent(eventData?.event);
        document.title = `Editing ${eventData?.event.title}`;
      } catch (error) {
        console.error("Error: ", error);
        alert("Error fetching event details");
      } finally {
        setLoadingData(false);
      }
    };

    getEventDetails();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.title) {
      setIsError(true);
      setSuccessMessage("Title is required");
      setLoading(false);
      return;
    }
    if (!formData.date) {
      setIsError(true);
      setSuccessMessage("Date is required");
      setLoading(false);
      return;
    }
    if (!formData.time) {
      setIsError(true);
      setSuccessMessage("Time is required");
      setLoading(false);
      return;
    }
    if (!formData.location) {
      setIsError(true);
      setSuccessMessage("Location is required");
      setLoading(false);
      return;
    }

    setSuccessMessage("");

    try {
      const response = await fetch(`/api/events/${event?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        router.push("/admin/events");
      } else {
        setSuccessMessage(data.message);
        setIsError(true);
      }
    } catch (error) {
      setSuccessMessage("Failed to create the event. Try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="py-[2rem] px-[1rem] md:px-[4rem]">
        <ul className="list-disc pl-4 mt-12 text-xl flex flex-col gap-4">
          <li className="transition-all hover:pl-2">
            <Link
              href="/admin/events"
              className="underline hover:text-ayicc-light-green"
            >
              View All Events
            </Link>
          </li>
        </ul>
        <h1 className="text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-3xl my-6">
          Edit Event Details
        </h1>
        {loadingData && (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-spin text-ayicc-dark-green text-6xl w-[3rem]"
          />
        </div>
      )}
        {!loadingData && (
          <form
            className="w-full md:w-[50vw] mx-auto flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <EventForm
              handleChange={handleChange}
              loading={loading}
              formData={formData}
            />
            {successMessage && (
              <p
                className={`font-bold ${
                  isError ? "text-red-500" : "text-green-600"
                }`}
              >
                {successMessage}
              </p>
            )}
          </form>
        )}
      </main>
    </>
  );
};

export default EventDetails;
