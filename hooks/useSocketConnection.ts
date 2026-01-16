import { socket } from "@/lib/socket";
import { useEffect } from "react";
export function useSocketConnection(sessionId: string) {
  useEffect(() => {
    if (!sessionId) return;

    socket.connect();
    socket.emit("join-session", { sessionId });

    return () => {
      socket.disconnect();
    };
  }, [sessionId]);
}

