"use client";
import Editor from  "@/monaco/react";

type Props = {
  code: string;
  language: string;
  onChange: (value: string) => void;
};

export default function CodeEditor({ code, language, onChange }: Props) {
  return (
    <Editor
      height="100%"
      language={language}
      value={code}
      theme="vs-dark"
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        wordWrap: "on",
      }}
      onChange={(value) => onChange(value || "")}
    />
  );
}
