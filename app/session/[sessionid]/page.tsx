"use client";

import { useParams } from "next/navigation";
import { SessionProvider } from "@/components/context/SessionContext";
import SessionGuard from "@/components/session/SessionGuard";
import ChatPanel from "@/components/chat/ChatPanel";
import EditorPanel from "@/components/editor/EditorPanel";
import VideoCall from "@/components/video/VideoCall";

export default function SessionPage() {
  const { sessionId } = useParams<{ sessionId: string }>();
  return (
    <SessionProvider sessionId={sessionId}>
      <SessionGuard>
        <div className="grid grid-cols-3 gap-4 h-screen p-4">
          <div className="col-span-2">
            <EditorPanel sessionId={sessionId} />
          </div>

          <div className="col-span-1 space-y-4">
            <VideoCall sessionId={sessionId} />
            <ChatPanel />
          </div>
        </div>
      </SessionGuard>
    </SessionProvider>
  );
}
