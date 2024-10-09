import send from "../assets/images/send.svg";
import { useState } from "react";
import AiAnimation from "../components/AiAnimation";
import { messageSuggestions } from "../constants";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleQuery = () => {
    console.log({ message });
    setMessage("");
  };

  return (
    <main className="p-4 max-w-7xl mx-auto relative">
      <div className="w-44 mx-auto mt-11 aspect-square rounded-full">
        <AiAnimation />
      </div>
      <h1 className="text-2xl text-primary font-bold text-center">
        Chat with IUO AI
      </h1>

      {/* Message Suggestions */}
      {message.length === 0 && (
        <div className="mt-16 flex gap-5 overflow-auto no-scrollbar">
          {messageSuggestions.map((suggestion) => (
            <div
              className="bg-light-100 p-6 lg:p-8 rounded-3xl min-w-[250px] lg:min-w-[320px] hover:bg-light-200 transition duration-300 cursor-pointer"
              key={suggestion.id}
              onClick={() => setMessage(suggestion.message)}
            >
              <img src={suggestion.icon} alt="" className="w-10 lg:w-[52px]" />
              <div className="flex gap-5 items-center mt-9">
                <p className="text-base font-medium lg:text-xl">
                  {suggestion.message}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Message Input */}
      <div className="px-4 fixed bottom-8 left-[50%] translate-x-[-50%] w-full max-w-6xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleQuery();
          }}
        >
          <div className="bg-white hover:bg-light-100 py-2 lg:py-3 pl-4 lg:pl-8 pr-2 lg:pr-3 rounded-r-full rounded-l-full flex gap-4 has-[input:focus]:border-primary-600 has-[:focus]:bg-white transition duration-300 border-[2.4px] ">
            <input
              type="text"
              placeholder="Write a question"
              className="border-none outline-none bg-transparent w-full text-sm lg:text-xl"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <button
              className="bg-primary disabled:bg-grey-200 p-3 rounded-full transition duration-300"
              disabled={message.length === 0}
            >
              <img src={send} alt="send message" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Chat;
