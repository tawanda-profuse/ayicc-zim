"use client";
import { faChevronRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    image: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);

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
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Event created successfully!");
        setFormData({
          title: "",
          date: "",
          time: "",
          location: "",
          image: "",
          description: "",
        });
        setIsError(false);
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
        Create an Event
      </h1>
      <form
        className="w-full md:w-[50vw] mx-auto flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-lg font-bold">
            Event Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Write the name of the event"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-lg font-bold">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="text-lg font-bold">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-lg font-bold">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="The location of the event e.g. Harare"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="image" className="text-lg font-bold">
            Image URL (optional)
          </label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Paste an image URL"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-lg font-bold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Write some details about this event about"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-3 bg-ayicc-dark-green text-white hover:bg-ayicc-gold p-4 font-bold"
          disabled={loading}
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            <>
              Submit
              <FontAwesomeIcon icon={faChevronRight} />
            </>
          )}
        </button>
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
    </main>
  );
};

export default CreateEvent;
