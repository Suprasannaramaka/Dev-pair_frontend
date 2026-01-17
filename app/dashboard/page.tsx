"use client";

import AuthGuard from "@/components/guards/AuthGuard";
import RoleGuard from "@/components/guards/RoleGuard";
import DashboardHeader from "@/components/DashBoardHeader";
import StudentSessions from "@/components/dashboard/StudentSessions";
import MentorStats from "@/components/dashboard/MentorStats";
import { useSession } from "@/components/context/SessionContext";

export default function DashboardPage() {
  const { role } = useSession();

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={["student", "mentor"]}>
        <div className="max-w-5xl mx-auto p-4">
          <DashboardHeader />

          {role === "student" && <StudentSessions />}
          {role === "mentor" && <MentorStats />}
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
