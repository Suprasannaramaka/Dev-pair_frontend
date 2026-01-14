import { User } from "@/types/user";

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null;

  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = (): boolean => {
  return !!getCurrentUser();
};

export const logout = () => {
  localStorage.removeItem("user");
};
