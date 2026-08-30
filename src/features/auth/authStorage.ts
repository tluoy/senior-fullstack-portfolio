import type { User } from "./auth.types";

const AUTH_STORAGE_KEY = "portfolio_user";

export function getStoredUser(): User | null {
  const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

  return storedUser ? JSON.parse(storedUser) : null;
}

export function saveStoredUser(user: User): void {
  localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify(user),
  );
}

export function removeStoredUser(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}