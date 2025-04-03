"use client";
import {
  faChevronRight,
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const messageRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.email) {
      setIsError(true);
      toast.warn("An email address is required");
      setLoading(false);
      return;
    }
    if (!formData.password) {
      setIsError(true);
      toast.warn("Password is required");
      setLoading(false);
      return;
    }

    setSuccessMessage("");

    try {
      const response = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false, // Prevents automatic redirection on failure
        callbackUrl: "/innovation-hub", // Sets the desired post-login redirection
      });

      if (response?.error) {
        setIsError(true);
        toast.error(response.error);
      } else if (response?.url) {
        // Redirect manually on successful login
        window.location.href = response.url;
      }
    } catch (error) {
      setIsError(true);
      toast.error(
        "An error has occurred while trying to login. Please try again later."
      );
      toast.error("An error occurred. Please try again later."); // Show error notification
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <h1 className="text-center font-bold underline md:underline-offset-[1rem] decoration-ayicc-dark-green decoration-[0.4rem] text-3xl my-12">
        Login to Your Account
      </h1>
      <form
        className="w-full md:w-[50vw] mx-auto flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
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
          />
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
              Login
              <FontAwesomeIcon icon={faChevronRight} className="w-2" />
            </>
          )}
        </button>
        <p className="mb-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-ayicc-dark-green underline">
            Sign up
          </Link>
        </p>
        <p className="mb-6">
          Have you forgotten your password?{" "}
          <Link
            href="/forgot-password"
            className="text-ayicc-dark-green underline"
          >
            Reset it here.
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
        <div ref={messageRef}></div>
      </form>
    </main>
  );
};

export default Login;
