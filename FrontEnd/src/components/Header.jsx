import React from "react";
import { ChatData } from "../context/ChatContext";

const Header = () => {
  const { chats } = ChatData();

  return (
    <div className="mb-6 px-4 md:px-6">
      <h2 className="text-2xl font-semibold text-white-800 mb-2">
        Hello, how can I help you today?
      </h2>
      {chats && chats.length === 0 && (
        <p className="text-md text-gray-500">Create a new chat to continue.</p>
      )}
    </div>
  );
};

export default Header;
