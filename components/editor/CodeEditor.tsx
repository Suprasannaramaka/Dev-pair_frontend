"use client";

import Editor from "@monaco-editor/react";
import { useEditorSync } from "@/hooks/useEditorSync";

export default function CodeEditor({
  sessionId,
}: {
  sessionId: string;
}) {
  const { code, updateCode } = useEditorSync(sessionId);

  return (
    <Editor
      height="50vh"
      defaultLanguage="javascript"
      value={code}
      onChange={(value) => updateCode(value || "")}
      theme="vs-dark"
    />
  );
}
