"use client";

import About from "@/components/about";
export default function AboutPage() {
  return (
    <div className="flex flex-col bg-stone-200 items-center-safe justify-center-safe md:p-15">
      <div className="w-full max-w-sm md:max-w-4xl rounded-lg">
        <About />
      </div>
    </div>
  )
}