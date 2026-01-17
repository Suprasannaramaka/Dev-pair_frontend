"use client";

import { useSession } from "@/components/context/SessionContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { userId, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !userId) {
      router.replace("/login");
    }
  }, [loading, userId, router]);

  if (loading) return <p>Loading...</p>;
  if (!userId) return null;

  return <>{children}</>;
}
