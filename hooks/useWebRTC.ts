import { useRef } from "react";
import { rtcConfig } from "@/lib/webrtc";
import { socket } from "@/lib/socket";

export function useWebRTC(sessionId: string) {
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);

  const peerRef = useRef<RTCPeerConnection | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);

  const startMedia = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    localStreamRef.current = stream;

    if (localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }

    peerRef.current = new RTCPeerConnection(rtcConfig);

    stream.getTracks().forEach((track) => {
      peerRef.current?.addTrack(track, stream);
    });

    peerRef.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    peerRef.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("ice-candidate", {
          sessionId,
          candidate: event.candidate,
        });
      }
    };
  };

  return {
    localVideoRef,
    remoteVideoRef,
    startMedia,
  };
}
