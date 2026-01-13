import { useEffect, useRef, useState } from "react";
import { socket } from "@/lib/socket";

export function useEditorSync(sessionId: string) {
  const [code, setCode] = useState("// Start coding...");
  const isRemoteUpdate = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    socket.on("code-update", (newCode: string) => {
      isRemoteUpdate.current = true;
      setCode(newCode);
    });

    return () => {
      socket.off("code-update");
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

  return { code, updateCode };
}
