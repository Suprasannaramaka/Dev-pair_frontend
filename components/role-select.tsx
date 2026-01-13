"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export function RoleSelect() {
return(
<Select>
  <SelectTrigger className="w-45">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent >
    <SelectItem value="light">Student</SelectItem>
    <SelectItem value="dark">Mentor</SelectItem>
  </SelectContent>
</Select>
)}
