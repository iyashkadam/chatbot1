import { IoIosCloseCircle } from "react-icons/io";
import { ChatData } from "../context/ChatContext";
import { MdDelete } from "react-icons/md";
import { LoadingSpinner } from "./Loading";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom"; // ✅ Added

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { chats, createChat, createLod, setSelected, deleteChat } = ChatData();
  const { logoutHandler } = UserData();
  const navigate = useNavigate(); // ✅ Added

  const deleteChatHandler = (id) => {
    if (confirm("Are you sure you want to delete this chat?")) {
      deleteChat(id);
    }
  };

  const clickEvent = (id) => {
    setSelected(id);
    toggleSidebar();
  };

  return (
    <div
      className={`fixed inset-0 z-30 bg-white md:relative md:translate-x-0 md:w-1/4 md:block shadow-md transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">Nexa AI ChatBot</h1>
          <button
            className="md:hidden text-gray-600 hover:text-red-500 text-2xl"
            onClick={toggleSidebar}
          >
            <IoIosCloseCircle />
          </button>
        </div>

        <button
          onClick={createChat}
          className="w-full mb-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center"
        >
          {createLod ? <LoadingSpinner /> : "➕ New Chat"}
        </button>

        <p className="text-sm text-gray-500 mb-2">Recent Chats</p>
        <div className="flex-1 overflow-y-auto thin-scrollbar">
          {chats && chats.length > 0 ? (
            chats.map((chat) => (
              <div
                key={chat._id}
                className="bg-gray-100 hover:bg-gray-200 rounded-md px-3 py-2 mb-2 flex justify-between items-center cursor-pointer"
              >
                <span
                  className="truncate text-sm text-gray-800 w-[80%]"
                  onClick={() => clickEvent(chat._id)}
                >
                  {chat.latestMessage?.slice(0, 40) || "No message..."}...
                </span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => deleteChatHandler(chat._id)}
                >
                  <MdDelete size={18} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No chats yet</p>
          )}
        </div>

        <div className="mt-auto pt-4">
          <button
            onClick={() => logoutHandler(navigate)} // ✅ Updated to use navigate
            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
