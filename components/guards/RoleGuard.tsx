"use client";

import { useSession } from "@/components/context/SessionContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RoleGuard({
  allowedRoles,
  children,
}: {
  allowedRoles: ("mentor" | "student")[];
  children: React.ReactNode;
}) {
  const { role, loading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && role && !allowedRoles.includes(role)) {
      router.replace("/unauthorized");
    }
  }, [role, loading, allowedRoles, router]);

  if (loading) return <p>Loading...</p>;
  if (!role || !allowedRoles.includes(role)) return null;

  return <>{children}</>;
}
