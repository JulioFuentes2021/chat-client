import React from "react";
import Message from "./ContactMessage";
import AccountOwnerMessage from "./AccountOwnerMessage";
import MessageContainer from "./MessageContainer";

const Index = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MGp9k4ydFlS7ilVaLvZJfXQzyvp049lb8w&usqp=CAU"
          className="w-8 h-8 rounded-full"
          alt=""
        />
        <MessageContainer WhoIsIt>
          <Message />
        </MessageContainer>
      </div>
      <MessageContainer WhoIsIt={false}>
        <AccountOwnerMessage />
      </MessageContainer>
    </div>
  );
};

export default Index;
