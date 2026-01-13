"use client";
import CodeEditor from "./CodeEditor";
import LanguageSelector from "./LanguageSelector";
import { useEditorSync } from "@/hooks/useEditorSync";

export default function EditorPanel() {
  const { code, setCode, language, setLanguage } = useEditorSync();

  return (
    <div className="h-full flex flex-col border rounded">
      <div className="p-2 border-b">
        <LanguageSelector value={language} onChange={setLanguage} />
      </div>

      <div className="flex-1">
        <CodeEditor
          code={code}
          language={language}
          onChange={setCode}
        />
      </div>
    </div>
  );
}
