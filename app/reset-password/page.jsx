"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    if (!newPassword || !confirmPassword) {
      setMessage("Please enter a password.");
      setPending(false);
      return;
    }
    
    if (newPassword.length < 8 || confirmPassword.length < 8) {
        setMessage("Password should be more than 8 letters.");
        setPending(false);
        return;
      }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setPending(false);
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Password reset successfully.");
      router.push("/");
    } else {
      setMessage(data.message || "Error resetting password.");
      setPending(false);
    }
  };

  return (
    <main className="py-[2rem] px-[1rem] md:px-[4rem]">
      <h1 className="text-center font-bold underline md:underline-offset-[1rem] decoration-ayicc-dark-green decoration-[0.4rem] text-3xl my-12">
        Reset Your Password
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[50vw] mx-auto flex flex-col gap-2"
      >
        <label htmlFor="password" className="text-lg font-bold">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="New Password"
          className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="confirm-password" className="text-lg font-bold">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm New Password"
          className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={pending}
          className={`my-6 flex items-center justify-center gap-3 bg-ayicc-dark-green text-white hover:bg-ayicc-gold p-4 font-bold`}
        >
          {pending ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            "Reset Password"
          )}
        </button>
        {message && <p className="text-center text-[orangered]">{message}</p>}
      </form>
    </main>
  );
};

export default ResetPassword;
