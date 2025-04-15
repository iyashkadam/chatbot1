import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from "../components/Header";
import { ChatData } from "../context/ChatContext";
import { CgProfile } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import { LoadingBig, LoadingSmall } from "../components/Loading";
import { IoMdSend } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { 
    fetchResponse,
    messages,
    prompt,
    setPrompt,
    newRequestLoading,
    loading,
    chats,
  } = ChatData();

  const submitHandler = (e) => {
    e.preventDefault();
    fetchResponse();
  };

  const messagecontainerRef = useRef();
  const bottomRef = useRef(); // new scroll anchor

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen bg-[#0F172A] text-white">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-1 flex-col">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-4 bg-[#1E293B] text-2xl"
        >
          <GiHamburgerMenu />
        </button>

        <div
          className="flex-1 p-4 md:p-6 overflow-y-auto thin-scrollbar bg-[#1E293B] pb-40"
          ref={messagecontainerRef}
        >
          <Header />

          {loading ? (
            <LoadingBig />
          ) : (
            <div className="space-y-4 mb-20">
              {messages && messages.length > 0 ? (
                messages.map((e, i) => (
                  <div key={i}>
                    <div className="mb-4 p-4 rounded-xl bg-[#2563EB] text-white flex gap-2 items-start shadow-md">
                      <div className="bg-white p-2 rounded-full text-black text-2xl h-10 w-10 flex items-center justify-center">
                        <CgProfile />
                      </div>
                      <p className="text-sm break-words">{e.question}</p>
                    </div>

                    <div className="mb-4 p-4 rounded-xl bg-[#334155] text-white flex gap-2 items-start shadow-md">
                      <div className="bg-white p-2 rounded-full text-black text-2xl h-10 w-10 flex items-center justify-center">
                        <FaRobot />
                      </div>
                      <p
                        className="text-sm break-words leading-relaxed space-y-2 prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: e.answer }}
                      ></p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No chat yet</p>
              )}

              {newRequestLoading && <LoadingSmall />}

              {/* Scroll anchor so last message isn't hidden behind input bar */}
              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </div>

      {chats && chats.length === 0 ? null : (
        <div className="fixed bottom-0 z-10 right-0 left-0 md:left-[25%] p-4 bg-[#1E293B] w-full md:w-[75%] border-t border-gray-700">
          <form
            onSubmit={submitHandler}
            className="flex justify-center items-center"
          >
            <input
              className="flex-grow p-4 bg-[#334155] rounded-l text-white outline-none placeholder-gray-400"
              type="text"
              placeholder="Enter a prompt here"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required
            />
            <button className="p-4 bg-[#2563EB] hover:bg-[#1D4ED8] rounded-r text-2xl text-white transition">
              <IoMdSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
