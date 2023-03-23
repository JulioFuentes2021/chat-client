import React from "react";

const Index = () => {
  return (
    <section className="my-5">
      <div className="flex p-3 m-1 gap-5 border border-gray-400 rounded-lg">
        <span>
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none w-full"
        />
      </div>
      {/* <div className="flex flex-col absolute w-full">
            <div className="w-full flex bg-white hover:bg-gray-200 justify-between p-1">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MGp9k4ydFlS7ilVaLvZJfXQzyvp049lb8w&usqp=CAU"
                className="w-8 h-8 rounded-full"
                alt=""
            />
            <span>Julio Fuentes</span>
            </div>
      </div> */}
    </section>
  );
};

export default Index;
