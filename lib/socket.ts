import { io } from "socket.io-client";

export const socket = io("BACKEND_URL", {
  autoConnect: false,
});
