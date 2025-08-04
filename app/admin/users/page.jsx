"use client";
import {
  faCheckCircle,
  faSpinner,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const AdminUsers = () => {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);
  const [authorizationPending, setAuthorizationPending] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userType, setUserType] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/Users?firstName=${firstName}&lastName=${lastName}&userType=${userType}&page=${page}&limit=10`
      );
      const { data, totalPages } = await res.json();
      setUsers(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching users:", error);
      console.error("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  useEffect(() => {
    if (status === "loading") return;

    if (session?.user.role !== "admin") {
      redirect("/innovation-hub");
    }
  }, [session, status]);

  const handleDelete = async (userId) => {
    setPending(true);
    try {
      const response = await fetch(`/api/Users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setUsers((prev) => prev.filter((user) => user._id !== userId));
      } else {
        toast.error("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.error("An error has occurred. The user was not deleted.");
    } finally {
      setPending(false);
    }
  };

  const updateVerification = async (userId) => {
    setAuthorizationPending(true);
    try {
      const response = await fetch(`/api/UserVerification/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        fetchUsers();
      } else {
        toast.error("Failed to update user details.");
      }
    } catch (error) {
      console.error("Error: ", error);
      toast.error("An error has occurred. The user was not deleted.");
    } finally {
      setAuthorizationPending(false);
    }
  };

  return (
    <>
      <header className="min-h-[25vh] bg-ayicc-light-green"></header>
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <h1 className={`heading-special text-4xl font-[family-name:var(--font-poppins)]`}>
        Manage Members
      </h1>
      <ul className="list-disc pl-4 mt-12 text-xl flex flex-col gap-4">
        <li className="transition-all hover:pl-2">
          <Link
            href="/admin"
            className="underline hover:text-ayicc-light-green"
          >
            Admin Home
          </Link>
        </li>
      </ul>
      <p className="my-6 font-bold italic text-[tomato]">
        Unverified members are not able to login to the Innovation Hub. Click on
        the red cross to authorize a member and the green tick to unauthorize.
      </p>
      <p className="my-6 font-bold italic text-[tomato]">
        Click on the members name to edit details.
      </p>
      {loading && (
        <div className="min-h-[20vh] flex flex-col items-center justify-center">
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-spin text-ayicc-dark-green text-6xl w-[5rem]"
          />
        </div>
      )}
      {!loading && (
        <>
          {/* Search Inputs */}
          <div className="flex flex-col md:flex-row gap-4 my-4">
            <input
              type="text"
              placeholder="Search by First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border-2 border-black focus:border-ayicc-light-green outline-none p-2 w-full md:w-1/3 rounded"
            />
            <input
              type="text"
              placeholder="Search by Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-2 border-black focus:border-ayicc-light-green outline-none p-2 w-full md:w-1/3 rounded"
            />
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="border-2 border-black focus:border-ayicc-light-green outline-none p-2 w-full md:w-1/3 rounded"
            >
              <option value="">-- All Member Types --</option>
              <option value="Innovator">Innovator</option>
              <option value="Funding Partner">Funding Partner</option>
              <option value="Expert">Expert</option>
              <option value="Private Sector">Private Sector</option>
              <option value="NGO">NGO</option>
              <option value="Community Group">Community Group</option>
            </select>
            <button
              onClick={() => {
                setPage(1); // Reset to first page on new search
                fetchUsers();
              }}
              className="bg-ayicc-dark-green text-white px-4 py-2 rounded"
            >
              Search
            </button>
          </div>
          {users.length > 0 ? (
            <>
              <div className="overflow-x-auto my-8 min-h-[50vh]">
                <table className="border-collapse border-2 w-full">
                  <thead className="text-ayicc-dark-green font-bold text-2xl border-2 border-black">
                    <tr>
                      <th className=" border-r-2 border-r-black">Name</th>
                      <th className=" border-r-2 border-r-black">
                        Member Type
                      </th>
                      <th className=" border-r-2 border-r-black">
                        Authorization
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {users.map((item, index) => (
                      <tr key={index} className="border-b-2 border-b-black">
                        <td className="p-2 border-l-2 border-r-2 border-black">
                          <Link
                            href={`/admin/users/${item._id}`}
                            className="text-ayicc-dark-green underline"
                            title="Click to edit user details"
                          >
                            {item.firstName} {item.lastName}
                          </Link>
                        </td>
                        <td className="p-2 border-l-2 border-r-2 border-black">
                          {item.userType}
                        </td>
                        <td className="p-2 border-l-2 border-r-2 border-black">
                          <button
                            onClick={() => updateVerification(item._id)}
                            className="bg-[#ccc] py-2 px-4 rounded-md"
                            title={`Click to ${
                              item.isVerified ? "unauthorize" : "authorize"
                            } this member`}
                            disabled={authorizationPending}
                          >
                            {authorizationPending && (
                              <FontAwesomeIcon
                                icon={faSpinner}
                                className="animate-spin"
                              />
                            )}
                            {!authorizationPending && (
                              <>
                                {item.isVerified ? (
                                  <>
                                    <span className="font-semibold">
                                      (Authorized)
                                    </span>{" "}
                                    <FontAwesomeIcon
                                      icon={faCheckCircle}
                                      className="text-green-600 text-xl"
                                    />
                                  </>
                                ) : (
                                  <>
                                    <span className="font-semibold">
                                      (Unauthorized)
                                    </span>{" "}
                                    <FontAwesomeIcon
                                      icon={faTimes}
                                      className="text-red-600 text-xl"
                                    />
                                  </>
                                )}
                              </>
                            )}
                          </button>
                        </td>
                        <td className="p-2 border-l-2 border-r-2 border-black">
                          <button
                            onClick={() => {
                              handleDelete(item._id);
                              setUsers((prev) =>
                                prev.filter((user) => user._id !== item._id)
                              );
                            }}
                          >
                            {pending ? (
                              <FontAwesomeIcon
                                icon={faSpinner}
                                className="animate-spin text-ayicc-dark-green"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="text-lg text-red-500"
                              />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="flex justify-center items-center gap-4 mt-4">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className={`${
                    page === 1 ? "bg-[#ccc]" : "bg-ayicc-dark-green hover:opacity-90"
                  } text-white px-4 py-2 rounded`}
                >
                  Previous
                </button>
                <span>
                  Page {page} of {totalPages}
                </span>
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className={`${
                    page === totalPages ? "bg-[#ccc]" : "bg-ayicc-dark-green hover:opacity-90"
                  } text-white px-4 py-2 rounded`}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
              <p className="text-center font-bold">
                There are currently no users
              </p>
            </div>
          )}
        </>
      )}
    </main>
    </>
  );
};

export default AdminUsers;
