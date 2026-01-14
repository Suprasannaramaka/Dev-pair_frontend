export type UserRole = "mentor" | "student";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
