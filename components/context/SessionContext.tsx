"use client";
import { createContext, useContext, useState } from "react";
type SessionState =
  | "idle"
  | "connecting"
  | "active"
  | "disconnected";

type SessionContextType = {
  sessionId: string;
  state: SessionState;
  setState: (s: SessionState) => void;
};

const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({
  sessionId,
  children,
}: {
  sessionId: string;
  children: React.ReactNode;
}) {
  const [state, setState] = useState<SessionState>("connecting");

  return (
    <SessionContext.Provider value={{ sessionId, state, setState }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession outside provider");
  return ctx;
};
