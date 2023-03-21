import React from "react";

const Index = () => {
  return (
    <section>
      <div className="flex p-3 m-1 gap-5 border border-gray-400 rounded-lg">
        <span>Icon</span>
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
