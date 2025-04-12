"use client";
import EventForm from "@/app/(components)/EventForm";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { redirect } from "next/navigation";

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
  const { data: session, status } = useSession();
  const messageRef = useRef(null);

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user.role !== "admin") {
      redirect("/innovation-hub");
    }
  }, [session, status]);

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
        messageRef.current?.scrollIntoView({ behavior: "smooth" });

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
      messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="min-h-[25vh] bg-ayicc-light-green"></header>
      <main className="py-[2rem] px-[1rem] md:px-[4rem]">
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
          <EventForm
            handleChange={handleChange}
            loading={loading}
            formData={formData}
          />
          {successMessage && (
            <p
              className={`mt-4 font-bold ${
                isError ? "text-red-500" : "text-green-600"
              }`}
            >
              {successMessage}
            </p>
          )}
          <div ref={messageRef}></div>
        </form>
      </main>
    </>
  );
};

export default CreateEvent;
