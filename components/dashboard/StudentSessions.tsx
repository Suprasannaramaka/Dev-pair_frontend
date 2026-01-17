"use client";

import Link from "next/link";

type Session = {
  id: string;
  mentorName: string;
  topic: string;
};

const mockSessions: Session[] = [
  { id: "session-1", mentorName: "Alice", topic: "React Basics" },
  { id: "session-2", mentorName: "Bob", topic: "System Design" },
];

export default function StudentSessions() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Your Sessions</h2>

      <ul className="space-y-2">
        {mockSessions.map((session) => (
          <li
            key={session.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{session.topic}</p>
              <p className="text-sm text-gray-500">
                Mentor: {session.mentorName}
              </p>
            </div>

            <Link
              href={`/session/${session.id}`}
              className="text-sm border px-3 py-1 rounded hover:bg-gray-100"
            >
              Join
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
