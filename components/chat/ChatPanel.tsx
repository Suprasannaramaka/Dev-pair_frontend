"use client";
import { useState } from "react";
import { useChat } from "@/hooks/useChat";
import MessageItem from "./MessageItem";

export default function ChatPanel({
    sessionId,
    user
  } : {
  sessionId: string;
  user: string;
})
{
  const { messages, sendMessage } = useChat(sessionId, user);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="w-80 border-l p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <MessageItem key={i} message={msg} />
        ))}
      </div>

      <div className="flex mt-2">
        <input
          className="border flex-1 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="ml-2 px-4 bg-black text-white"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}
