"use client";
import { createContext, useContext, useState, useEffect } from "react";

type Role = "mentor" | "student";

type SessionContextType = {
  userId: string | null;
  role: Role | null;
  loading: boolean;
};

const SessionContext = createContext<SessionContextType | null>(null);

export function SessionProvider({
  children,
  sessionId,
  
}: {
  children: React.ReactNode;
  sessionId?: string;
}) {
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUserId("user-123");
      setRole("student"); //
      setLoading(false);
    }, 500);
  }, []);

  return (
    <SessionContext.Provider value={{ userId, role, loading }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used inside SessionProvider");
  return ctx;
}
