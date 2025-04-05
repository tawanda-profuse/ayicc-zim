"use client";
import UserForm from "@/app/(components)/UserForm";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const fetchUserDetails = async (id) => {
  try {
    const response = await fetch(`/api/Users/${id}`);
    const { user } = await response.json();
    return { user };
  } catch (error) {
    console.error("Error", error);
  }
};

const EventDetails = () => {
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
  });
  const [loadingData, setLoadingData] = useState(true);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const { data: session, status } = useSession();
  const [user, setUser] = useState({});
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const userTypeRef = useRef();
  const messageRef = useRef(null);

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user?.role !== "admin") {
      redirect("/innovation-hub");
    }
  }, [session, status]);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userData = await fetchUserDetails(id);

        setFormData({
          firstName: userData?.user.firstName,
          lastName: userData?.user.lastName,
          email: userData?.user.email,
          userType: userData?.user.userType,
        });
        setUser(userData?.user);
        document.title = "Editing User Details";
      } catch (error) {
        console.error("Error: ", error);
        toast.error("Error fetching user details");
      } finally {
        setLoadingData(false);
      }
    };

    getUserDetails();
  }, [id]);

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
      const response = await fetch(`/api/Users/${user?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        router.push("/admin/users");
      } else {
        setSuccessMessage(data.message);
        setIsError(true);
      }
    } catch (error) {
      setSuccessMessage("Failed to update the user details. Try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
          <header className="min-h-[25vh] bg-ayicc-light-green"></header>
      <main className="py-[2rem] px-[1rem] md:px-[4rem]">
        <ul className="list-disc pl-4 mt-12 text-xl flex flex-col gap-4">
          <li className="transition-all hover:pl-2">
            <Link
              href="/admin/users"
              className="underline hover:text-ayicc-light-green"
            >
              View All Members
            </Link>
          </li>
        </ul>
        <h1 className="text-center font-bold underline underline-offset-[1rem] decoration-[#D1CE68] decoration-[0.4rem] text-3xl my-6">
          Edit User Details
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
            <UserForm
              isNew={false}
              loading={loading}
              handleChange={handleChange}
              firstNameRef={firstNameRef}
              lastNameRef={lastNameRef}
              emailRef={emailRef}
              userTypeRef={userTypeRef}
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
            <div ref={messageRef}></div>
          </form>
        )}
      </main>
    </>
  );
};

export default EventDetails;
