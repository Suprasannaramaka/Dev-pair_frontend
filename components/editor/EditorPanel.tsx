"use client";

import CodeEditor from "./CodeEditor";
import LanguageSelector from "./LanguageSelector";
import CursorOverlay from "./CursorOverlay";
import { useEditorSync } from "@/hooks/useEditorSync";

export default function EditorPanel() {
  const {
    code,
    updateCode,
    language,
    setLanguage,
    cursors,
  } = useEditorSync();

  return (
    <div className="h-full flex flex-col border rounded relative">
      <div className="p-2 border-b flex items-center gap-2">
        <LanguageSelector value={language} onChange={setLanguage} />
      </div>

      <div className="flex-1 relative">
        <CodeEditor
          code={code}
          language={language}
          onChange={updateCode}
        />
        <CursorOverlay cursors={cursors} />
      </div>
    </div>
  );
}
