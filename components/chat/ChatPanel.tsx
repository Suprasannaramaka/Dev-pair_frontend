"use client";

import { useSession } from "@/components/context/SessionContext";
import useChat from "@/hooks/useChat";
import MessageItem from "./MessageItem";

export default function ChatPanel() {
  const { sessionId, userId, role } = useSession();
  const { messages, sendMessage } = useChat(sessionId, userId, role);

  return (
    <div className="h-full flex flex-col border rounded p-2">
      <div className="flex-1 overflow-y-auto">
        {messages.map(msg => (
          <MessageItem key={msg.id} message={msg} />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.message as HTMLInputElement;
          if (!input.value.trim()) return;
          sendMessage(input.value);
          input.value = "";
        }}
        className="flex gap-2 mt-2"
      >
        <input
          name="message"
          className="flex-1 border rounded px-2 py-1"
          placeholder="Type a message..."
        />
        <button className="border px-3 py-1 rounded">Send</button>
      </form>
    </div>
  );
}
