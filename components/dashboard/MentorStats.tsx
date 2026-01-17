"use client";

export default function MentorStats() {
  const stats = [
    { label: "Sessions Hosted", value: 12 },
    { label: "Students Mentored", value: 9 },
    { label: "Avg Rating", value: "4.8 ⭐" },
  ];

  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">Your Stats</h2>

      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border rounded p-4 text-center"
          >
            <p className="text-xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
