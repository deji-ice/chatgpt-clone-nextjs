"use client";

import {
  ArrowRightCircleIcon,
  ArrowRightOnRectangleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    console.log(prompt);
  }, [prompt]);

  return (
    <div className="text-gray-400 rounded-lg bg-gray-700/50  text-sm">
      <form className="flex p-5 space-x-5 ">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          type="text"
          placeholder="type your message..."
        />
        <button type="submit" className="items-center">
          <PaperAirplaneIcon className="w-10 h-5 -rotate-45" />
        </button>
      </form>
      <div>{/* model selection */}</div>
    </div>
  );
};

export default ChatInput;
