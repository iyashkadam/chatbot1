import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";
import { ChatData } from "../context/ChatContext";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { verifyUser, btnLoading } = UserData();
  const { fetchChats } = ChatData();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    verifyUser(Number(otp), navigate, fetchChats);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
        Verify Your Account
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        Please enter the OTP sent to your email address to complete your login and access Nexa AI.
      </p>

      <form
        onSubmit={submitHandler}
        className="bg-white p-6 rounded shadow-md w-full max-w-md text-left"
      >
        <label className="block text-gray-700 text-sm mb-2" htmlFor="otp">
          OTP Code
        </label>
        <input
          type="number"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full transition duration-300"
          disabled={btnLoading}
        >
          {btnLoading ? <LoadingSpinner /> : "Verify"}
        </button>
      </form>
    </div>
  );
};

export default Verify;
