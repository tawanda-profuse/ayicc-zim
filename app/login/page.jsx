"use client";
import {
  faChevronRight,
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from 'next-auth/react'

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.email) {
      setIsError(true);
      setSuccessMessage("Email is required");
      setLoading(false);
      return;
    }
    if (!formData.password) {
      setIsError(true);
      setSuccessMessage("Password is required");
      setLoading(false);
      return;
    }

    setSuccessMessage("");

    try {
      const response = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (response?.error) {
        setIsError(true);
        setSuccessMessage(response.error);
      } else {
        alert("Login successful");
        router.push("/innovation-hub");
      }
    } catch (error) {
      setSuccessMessage(
        "An error has occurred while trying to login. Please try again later."
      );
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <h1 className="text-center font-bold underline underline-offset-[1rem] decoration-ayicc-dark-green decoration-[0.4rem] text-3xl my-12">
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

export default Login;
