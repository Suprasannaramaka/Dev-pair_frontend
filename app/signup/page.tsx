"use client";
import {SignupForm} from "@/components/signup-form";

export default function Signup() {
  return(
    <div className="flex flex-col items-center-safe  bg-stone-200 justify-content-safe md:p-15 ">
      <div className="w-full max-w-sm md:max-w-4xl rounded-lg">
        <SignupForm />
      </div>
    </div>
  )
}