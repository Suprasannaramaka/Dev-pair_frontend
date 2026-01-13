"use client";
import { useWebRTC } from "@/hooks/useWebRTC";
import VideoTile from "./VideoTile";
import VideoControls from "./VideoControl";
export default function VideoCall({
  sessionId,
}: {
  sessionId: string;
}) {
  const {
    localVideoRef,
    remoteVideoRef,
    startMedia,
  } = useWebRTC(sessionId);

  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-2 h-40">
        <VideoTile
          videoRef={localVideoRef}
          label="You"
        />
        <VideoTile
          videoRef={remoteVideoRef}
          label="Peer"
        />
      </div>

      <VideoControls onStart={startMedia} />
    </div>
  );
}
