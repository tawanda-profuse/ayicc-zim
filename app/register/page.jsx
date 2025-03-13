"use client";
import {
  faChevronRight,
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userType: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const userTypeRef = useRef();
  const { data: session, status } = useSession();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.firstName) {
      setIsError(true);
      setSuccessMessage("First Name is required");
      firstNameRef.current.style.borderColor = "red";
      setTimeout(() => {
        firstNameRef.current.style.borderColor = "transparent";
      }, 3000);
      setLoading(false);
      return;
    }
    if (!formData.lastName) {
      setIsError(true);
      setSuccessMessage("Last Name is required");
      lastNameRef.current.style.borderColor = "red";
      setTimeout(() => {
        lastNameRef.current.style.borderColor = "transparent";
      }, 3000);
      setLoading(false);
      return;
    }
    if (!formData.email) {
      setIsError(true);
      setSuccessMessage("Email is required");
      emailRef.current.style.borderColor = "red";
      setTimeout(() => {
        emailRef.current.style.borderColor = "transparent";
      }, 3000);
      setLoading(false);
      return;
    }
    if (!formData.password) {
      setIsError(true);
      setSuccessMessage("Password is required");
      passwordRef.current.style.borderColor = "red";
      setTimeout(() => {
        passwordRef.current.style.borderColor = "transparent";
      }, 3000);
      setLoading(false);
      return;
    }
    if (!formData.userType) {
      setIsError(true);
      setSuccessMessage("Please select a registration type from the list");
      userTypeRef.current.style.borderColor = "red";
      setTimeout(() => {
        userTypeRef.current.style.borderColor = "transparent";
      }, 3000);
      setLoading(false);
      return;
    }

    setSuccessMessage("");

    try {
      const response = await fetch("/api/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(
          "User created successfully! Please wait to be given access by the administrator."
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        firstNameRef.current.value = "";
        lastNameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
        userTypeRef.current.value = "";
        setIsError(false);
      } else {
        setSuccessMessage(data.message);
        setIsError(true);
      }
    } catch (error) {
      setSuccessMessage("Failed to create the user. Try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      redirect("/innovation-hub");
    }
  }, [session, status]);

  return (
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <h1 className="text-center font-bold underline underline-offset-[1rem] decoration-ayicc-dark-green decoration-[0.4rem] text-3xl my-12">
        Register Your Details
      </h1>
      <form
        className="w-full md:w-[50vw] mx-auto flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-lg font-bold">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Write the name of the user"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
            ref={firstNameRef}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-lg font-bold">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
            placeholder="Write your last name"
            ref={lastNameRef}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
            placeholder="Enter your email address"
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="userType" className="text-lg font-bold">
            Registration Type
          </label>
          <select
            id="userType"
            name="userType"
            className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
            onChange={handleChange}
            ref={userTypeRef}
          >
            <option value="">-- Select a value below --</option>
            <option value="Innovator">As an innovator</option>
            <option value="Funding Partner">Funding Partner</option>
            <option value="Expert">Expert</option>
            <option value="Private Sector">Private Sector</option>
            <option value="NGO">NGO</option>
            <option value="Community Group">Community Group</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-lg font-bold">
            Password
          </label>
          <div className="relative">
            <input
              type={togglePassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Type a secure password"
              className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400 w-full"
              onChange={handleChange}
              ref={passwordRef}
            />
            <button
              type="button"
              className="absolute right-2 top-2/4 -translate-y-2/4"
              title={togglePassword ? "Hide password" : "Show password"}
            >
              <FontAwesomeIcon
                icon={togglePassword ? faEyeSlash : faEye}
                onClick={() => setTogglePassword(!togglePassword)}
              />
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="my-6 flex items-center justify-center gap-3 bg-ayicc-dark-green text-white hover:bg-ayicc-gold p-4 font-bold"
          disabled={loading}
        >
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            <>
              Submit
              <FontAwesomeIcon icon={faChevronRight} className="w-2" />
            </>
          )}
        </button>
        <p className="mb-6">
          Already have an account?{" "}
          <Link href="/login" className="text-ayicc-dark-green underline">
            Login
          </Link>
        </p>
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

export default Register;
