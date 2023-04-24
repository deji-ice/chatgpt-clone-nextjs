import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

const NewChat = () => {
  return <div className="flex items-center space-x-3">
    <PlusIcon className="h-4 w-4"/>
    <p>New Chat</p>
  </div>;
};

export default NewChat;
