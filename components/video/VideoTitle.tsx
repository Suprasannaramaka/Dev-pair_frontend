import { RefObject } from "react";
export default function VideoTile({
  videoRef,
  label,
}: {
  videoRef: RefObject<HTMLVideoElement | null>;
  label: string;
}) {
  return (
    <div className="relative bg-black rounded">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-full object-cover"
      />
      <span className="absolute bottom-1 left-1 text-xs text-white">
        {label}
      </span>
    </div>
  );
}
