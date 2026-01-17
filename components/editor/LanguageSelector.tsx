"use client";

type Props = {
  value: string;
  onChange: (language: string) => void;
};

export default function LanguageSelector({ value, onChange }: Props) {
  return (
    <select title="language" value={value} onChange={(e) => onChange(e.target.value)} className="border rounded px-2 py-1 text-sm bg-background">
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
      <option value="python">Python</option>
      <option value="cpp">C++</option>
      <option value="java">Java</option>
    </select>

  );
}
