interface SessionCardProps {
  title: string;
  actionText: string;
}

export function SessionCard({ title, actionText }: SessionCardProps) {
  return (
    <div className="border p-4 rounded">
      <h3>{title}</h3>
      <button className="mt-2 px-3 py-1 bg-black text-white">
        {actionText}
      </button>
    </div>
  );
}