import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-white text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
        Welcome to Nexa AI
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        Nexa AI is a smart, API-powered chatbot designed to simulate real-time,
        human-like conversations. Whether you're seeking quick answers,
        assistance, or engaging dialogue — Nexa AI is ready to chat with you.
      </p>

      <div className="bg-white p-6 rounded shadow-md max-w-xl mb-8">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">What Nexa AI Offers:</h2>
        <ul className="text-left list-disc pl-6 text-gray-800 space-y-2">
          <li>🤖 AI-powered text-based chatbot experience</li>
          <li>💬 Real-time conversational interaction via API integration</li>
          <li>🔐 Secure login and personalized user sessions</li>
          <li>⚙️ Built with React, Node.js, and modern tech stack</li>
        </ul>
      </div>

      <button
        onClick={() => navigate("/login")}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default Index;
