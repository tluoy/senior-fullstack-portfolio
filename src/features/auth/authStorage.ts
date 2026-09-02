import type { User } from "./auth.types";

const AUTH_STORAGE_KEY = "portfolio_user";

function isUser(value: unknown): value is User {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const user = value as Record<string, unknown>;

  return (
    typeof user.email === "string" &&
    typeof user.name === "string"
  );
}

export function getStoredUser(): User | null {
  const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedUser) {
    return null;
  }

  try {
    const parsedUser: unknown = JSON.parse(storedUser);

    return isUser(parsedUser) ? parsedUser : null;
  } catch {
    return null;
  }
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