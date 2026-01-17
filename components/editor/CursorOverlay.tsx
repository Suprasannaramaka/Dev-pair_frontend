"use client";

type Cursor = {
  userId: string;
  username: string;
  line: number;
  column: number;
};

type Props = {
  cursors: Cursor[];
};

export default function CursorOverlay({ cursors }: Props) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      { cursors.map((cursor) => (
        <div key={cursor.userId} className="absolute text-xs bg-blue-600 text-white px-1 rounded" >
          {cursor.username}
        </div>
      ))}
    </div>
  );
}
