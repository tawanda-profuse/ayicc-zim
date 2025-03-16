"use client";
import {
  faChevronRight,
  faEye,
  faEyeSlash,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const UserForm = ({
  isNew,
  loading,
  handleChange,
  firstNameRef,
  lastNameRef,
  emailRef,
  passwordRef,
  password2Ref,
  userTypeRef,
  formData
}) => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);

  return (
    <>
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
          value={formData.firstName}
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
          value={formData.lastName}
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
          value={formData.email}
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
          value={formData.userType}
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
      {isNew && (
        <>
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
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-lg font-bold">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={togglePassword2 ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Confirm your password"
                className="bg-[#ccc] p-2 text-black placeholder-[#444] outline-none focus:bg-white border-2 border-transparent focus:border-yellow-400 w-full"
                onChange={handleChange}
                ref={password2Ref}
              />
              <button
                type="button"
                className="absolute right-2 top-2/4 -translate-y-2/4"
                title={togglePassword2 ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon
                  icon={togglePassword2 ? faEyeSlash : faEye}
                  onClick={() => setTogglePassword2(!togglePassword2)}
                />
              </button>
            </div>
          </div>
        </>
      )}
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
    </>
  );
};

export default UserForm;
