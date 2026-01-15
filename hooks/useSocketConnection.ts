import { useEffect } from "react";
import { socket } from "@/lib/socket";

export function useSocketConnection() {

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {console.log("Connected to socket:" , socket.id);
    })

    return () => {
      socket.disconnect();
    };
 });
}

