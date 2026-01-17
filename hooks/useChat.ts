import { useEffect, useState } from "react";
import { socket } from "@/lib/socket";
import { Message } from "@/types/message";
import { SOCKET_EVENTS } from "@/utils/constants";

export default function useChat(
  sessionId: string,
  userId: string,
  role: "mentor" | "student"
) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.emit(SOCKET_EVENTS.JOIN_SESSION, {
      sessionId,
      userId,
      role,
    });
    const onReceiveMessage = (message: Message) => {
      setMessages((prev) => [...prev, message]);
    };

    socket.on(SOCKET_EVENTS.RECEIVE_MESSAGE, onReceiveMessage);

    return () => {
      socket.off(SOCKET_EVENTS.RECEIVE_MESSAGE, onReceiveMessage);
    };
  }, [sessionId, userId, role]);

  const sendMessage = (content: string) => {
    socket.emit(SOCKET_EVENTS.SEND_MESSAGE, {
      sessionId,
      senderId: userId,
      senderRole: role,
      content,
    });
  };

  return { messages, sendMessage };
}
