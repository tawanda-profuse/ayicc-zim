"use client";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [resetEmail, setResetEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setResetLoading(true);
    setResetMessage("");
    
    if(!resetEmail){
        setResetMessage("The email is required");
        setResetLoading(false)
        return;
    }

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await res.json();
      if (res.ok) {
        setResetMessage("A password reset link has been sent to your email.");
      } else {
        setResetMessage(data.message || "Failed to send reset link.");
      }
    } catch (error) {
      console.error("Error: ", error);
      setResetMessage("Something went wrong. Try again later.");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <>
    <header className="min-h-[35vh] w-full flex flex-col items-center justify-center bg-ayicc-light-green"></header> 
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <h1 className="text-center font-bold underline md:underline-offset-[1rem] decoration-ayicc-dark-green decoration-[0.4rem] text-3xl my-12">
        Enter Email Below
      </h1>
      <form
        className="w-full md:w-[50vw] mx-auto flex flex-col gap-2"
        onSubmit={handleResetPassword}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            placeholder="Write you email address here"
          />
        </div>
        <button
          type="submit"
          className="my-6 flex items-center justify-center gap-3 bg-ayicc-dark-green text-white hover:bg-ayicc-gold p-4 font-bold"
          disabled={resetLoading}
        >
          {resetLoading ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            "Reset Password"
          )}
        </button>
        {resetMessage && (
          <p className="text-center text-[orangered] font-semibold">
            {resetMessage}
          </p>
        )}
      </form>
    </main>
    </>
  );
};

export default ForgotPassword;
