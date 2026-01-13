import { useEffect } from "react";
import { socket } from "@/lib/socket";
import { useSession } from "@/components/context/SessionContext";

export function useSocketConnection() {
  const { setState } = useSession();

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => setState("active"));
    socket.on("disconnect", () => setState("disconnected"));

    return () => {
      socket.disconnect();
    };
 });
}

