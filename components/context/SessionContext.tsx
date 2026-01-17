"use client";
import { createContext, useContext } from "react";
type SessionContextType = {
  sessionId: string;
  userId: string;
  role: "mentor" | "student";
};

const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({
  sessionId,
  children,
}: {
  sessionId: string;
  children: React.ReactNode;
}) {
  const userId = "user-123";
  const role: "mentor" | "student" = sessionId.startsWith("m")
    ? "mentor"
    : "student";
  return (
    <SessionContext.Provider value={{ sessionId, userId, role }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used inside SessionProvider");
  return ctx;
}
