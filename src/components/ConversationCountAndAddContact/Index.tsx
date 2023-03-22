import React from "react";

const Index = () => {
  return (
    <section className="flex items-center justify-between p-2">
      <div className="flex items-center gap-3">
        <span className="font-bold">Messages</span>
        <span className="font-semibold bg-gray-100 p-2 rounded-full">40</span>
      </div>
      <span className="border border-gray-400 p-1 rounded-lg font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </span>
    </section>
  );
};

export default Index;
