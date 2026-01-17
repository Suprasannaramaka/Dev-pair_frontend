"use client";

import { useSession } from "@/components/context/SessionContext";

export default function DashboardHeader() {
  const { role, userId } = useSession();

  return (
    <header className="flex items-center justify-between border-b pb-3 mb-4">
      <div>
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Logged in as <span className="capitalize">{role}</span>
        </p>
      </div>

      <button
        className="text-sm border px-3 py-1 rounded hover:bg-gray-100"
        onClick={() => alert("Logout coming soon")}
      >
        Logout
      </button>
    </header>
  );
}
