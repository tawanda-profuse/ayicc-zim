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
import UserForm from "../(components)/UserForm";

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
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const userTypeRef = useRef();
  const errorMessageRef = useRef();
  const { data: session, status } = useSession();
  const messageRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    messageRef.current?.scrollIntoView({ behavior: "smooth" });

    if (!formData.firstName) {
      setIsError(true);
      setSuccessMessage("First Name is required");
      firstNameRef.current.style.borderColor = "red";
      setTimeout(() => {
        firstNameRef.current.style.borderColor = "transparent";
        firstNameRef.current.style.backgroundColor = "#ccc";
      }, 3000);
      errorMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
      return;
    }
    if (!formData.lastName) {
      setIsError(true);
      setSuccessMessage("Last Name is required");
      lastNameRef.current.style.borderColor = "red";
      setTimeout(() => {
        lastNameRef.current.style.borderColor = "transparent";
        lastNameRef.current.style.backgroundColor = "#ccc";
      }, 3000);
      errorMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
      return;
    }
    if (!formData.email) {
      setIsError(true);
      setSuccessMessage("Email is required");
      emailRef.current.style.borderColor = "red";
      setTimeout(() => {
        emailRef.current.style.borderColor = "transparent";
        emailRef.current.style.backgroundColor = "#ccc";
      }, 3000);
      errorMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
      return;
    }
    if (!formData.password) {
      setIsError(true);
      setSuccessMessage("Password is required");
      passwordRef.current.style.borderColor = "red";
      setTimeout(() => {
        passwordRef.current.style.borderColor = "transparent";
        passwordRef.current.style.backgroundColor = "#ccc";
      }, 3000);
      errorMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
      return;
    }
    if (formData.password !== password2Ref.current.value) {
      setIsError(true);
      setSuccessMessage("Both passwords should match");
      passwordRef.current.style.borderColor = "red";
      setTimeout(() => {
        passwordRef.current.style.borderColor = "transparent";
        passwordRef.current.style.backgroundColor = "#ccc";
      }, 3000);
      password2Ref.current.style.borderColor = "red";
      setTimeout(() => {
        password2Ref.current.style.borderColor = "transparent";
        password2Ref.current.style.backgroundColor = "#ccc";
      }, 3000);
      errorMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
      return;
    }
    if (formData.password.length < 8) {
      setIsError(true);
      setSuccessMessage("Password should be more than 8 letters.");
      passwordRef.current.style.borderColor = "red";
      setTimeout(() => {
        passwordRef.current.style.borderColor = "transparent";
        passwordRef.current.style.backgroundColor = "#ccc";
      }, 3000);
      errorMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      setLoading(false);
      return;
    }
    if (!formData.userType) {
      setIsError(true);
      setSuccessMessage("Please select a registration type from the list");
      userTypeRef.current.style.borderColor = "red";
      setTimeout(() => {
        userTypeRef.current.style.borderColor = "transparent";
        userTypeRef.current.style.backgroundColor = "#ccc";
      }, 3000);
      errorMessageRef.current?.scrollIntoView({ behavior: "smooth" });
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
          "Account created successfully! Please wait to be given access by the administrator."
        );
        messageRef.current?.scrollIntoView({ behavior: "smooth" });
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
        alert(data.message);
      }
    } catch (error) {
      setSuccessMessage("Failed to create the user. Try again later.");
      setIsError(true);
    } finally {
      errorMessageRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <h1 className="text-center font-bold underline md:underline-offset-[1rem] decoration-ayicc-dark-green decoration-[0.4rem] text-3xl my-12">
        Register Your Details
      </h1>
      <form
        className="w-full md:w-[50vw] mx-auto flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <UserForm
          isNew={true}
          loading={loading}
          handleChange={handleChange}
          firstNameRef={firstNameRef}
          lastNameRef={lastNameRef}
          emailRef={emailRef}
          passwordRef={passwordRef}
          password2Ref={password2Ref}
          userTypeRef={userTypeRef}
          formData={formData}
        />
        <p className="mb-6">
          Already have an account?{" "}
          <Link href="/login" className="text-ayicc-dark-green underline">
            Login
          </Link>
        </p>
        {successMessage && (
          <p
            ref={errorMessageRef}
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

export default Register;
