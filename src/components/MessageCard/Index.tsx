import React from "react";
import MessageCards from "./MessageHeader";
import MessagePreview from "./MessagePreview";

const Index = () => {
  return (
    <div className="p-5 border-t border-gray-300">
      <MessageCards />
      <MessagePreview />
    </div>
  );
};

export default Index;
