"use client";
import { useRouter } from "next/navigation";

type Session = {
  id: string;
  title: string;
};

const mockSessions: Session[] = [
  { id: "abc123", title: "ReactMentorship" },
  { id: "xyz789", title: "DSA Practice" },
];

export default function SessionList() {
  const router = useRouter();

  const joinSession = (sessionId: string) => {
    router.push(`/session/${sessionId}`);
  };

  return (
    <div className="space-y-3">
      {mockSessions.map((session) => (
        <div
          key={session.id}
          className="p-4 border rounded cursor-pointer hover:bg-gray-100"
          onClick={() => joinSession(session.id)}
        >
          {session.title}
        </div>
      ))}
    </div>
  );
}
