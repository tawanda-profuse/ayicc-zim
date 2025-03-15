"use client";
import { faChevronRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EventForm = ({ handleChange, loading, formData }) => {
    // Function to format the date to YYYY-MM-DD
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-lg font-bold">
          Event Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
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
          value={formData.date ? formatDate(formData.date) : ""}
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
          value={formData.time}
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
          value={formData.location}
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
          value={formData.image}
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
          value={formData.description}
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
    </>
  );
};

export default EventForm;
