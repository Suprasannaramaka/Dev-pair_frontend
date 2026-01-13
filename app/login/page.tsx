"use client";

import { LoginForm } from "@/components/login-form";
export default function Login() {
  return (
    <div className="flex flex-col bg-stone-200 items-center-safe justify-center-safe md:p-15">
      <div className="w-full max-w-sm md:max-w-4xl rounded-lg">
        <LoginForm />
      </div>
    </div>
  )
}
