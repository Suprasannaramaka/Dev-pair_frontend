export default function VideoControls({
  onStart,
}: {
  onStart: () => void;
}) {
  return (
    <div className="flex gap-2 mt-2">
      <button
        onClick={onStart}
        className="px-4 py-2 bg-green-600 text-white"
      >
        Start Video
      </button>
    </div>
  );
}
