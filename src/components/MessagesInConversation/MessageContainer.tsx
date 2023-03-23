import React, { ReactElement } from "react";

const MessageContainer = ({
  children,
  WhoIsIt,
}: {
  children: ReactElement;
  WhoIsIt: boolean;
}) => {
  return (
    <div className={`ml-4 flex flex-col ${!WhoIsIt && 'items-end'}`}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">
          {WhoIsIt ? "Katherine Moss" : ""}
        </span>
        <span className="font-medium text-gray-400">Today 2:20pm</span>
      </div>
      {children}
    </div>
  );
};

export default MessageContainer;
