"use client";
import {LANGUAGES} from "@/lib/monaco";

export default function LanguageSelector({
    language,
    setLanguage,
}: {
    language: string,
    setLanguage:(lang: string) => void;
})
{
    return(
    <select aria-label="state"
    className="border p-2"
     value={language} 
     onChange={(e) => setLanguage(e.target.value)}>
        {LANGUAGES.map((lang) =>
        (
            <option  key={lang} value={lang}>
            {lang}
            </option>
        ))}
    </select>
    );
}
