import { useEffect, useRef, useState } from "react";
import { socket } from "@/lib/socket";

type Cursor = {
  userId: string;
  username: string;
  line: number;
  column: number;
};

export function useEditorSync(sessionId: string) {
  const [code, setCode] = useState("// Start coding...");
  const [language, setLanguage] = useState("javascript");
  const [cursors, setCursors] = useState<Cursor[]>([]);

  const isRemoteUpdate = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    socket.on("code-update", (newCode: string) => {
      isRemoteUpdate.current = true;
      setCode(newCode);
    });

    socket.on("cursor-update", (cursor: Cursor) => {
      setCursors(prev => {
        const filtered = prev.filter(c => c.userId !== cursor.userId);
        return [...filtered, cursor];
      });
    });

    return () => {
      socket.off("code-update");
      socket.off("cursor-update");
    };
  }, []);

  const updateCode = (newCode: string) => {
    setCode(newCode);

    if (isRemoteUpdate.current) {
      isRemoteUpdate.current = false;
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      socket.emit("code-update", {
        sessionId,
        code: newCode,
      });
    }, 300);
  };

  return {
    code,
    updateCode,
    language,
    setLanguage,
    cursors,
  };
}
