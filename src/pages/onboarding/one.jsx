import React from "react";
import AiAnimation from "../../components/AiAnimation";

const One = ({ setScreenIndex }) => {
  return (
    <main className="p-4">
      <div className="w-full aspect-square max-w-[300px] mx-auto mt-5">
        <AiAnimation />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-12">
        Meet your IUO
        <br />
        AI assistant 👋🏽
      </h1>
      <p className="text-xl md:text-2xl text-center mt-4 text-grey-300">
        Your AI friend for
        <br />
        everything IUO and more.
      </p>

      <div className="flex mx-auto w-fit gap-3 my-10">
        <button
          className="w-3 h-3 bg-primary rounded-full"
          onClick={() => setScreenIndex(0)}
        ></button>
        <button
          className="w-3 h-3 bg-light-200 rounded-full"
          onClick={() => setScreenIndex(1)}
        ></button>
      </div>

      <div
        className="w-12 h-12 bg-primary rounded-full mx-auto text-white grid place-items-center"
        onClick={() => setScreenIndex((prev) => prev + 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#fff"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </main>
  );
};

export default One;
