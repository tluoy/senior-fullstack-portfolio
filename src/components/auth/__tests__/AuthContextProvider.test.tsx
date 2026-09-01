import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AuthProvider } from "../../../features/auth/AuthContextProvider";
import { useAuth } from "../../../features/auth/useAuth";

function TestConsumer() {
  const { login, logout, user, isAuthenticated } = useAuth();

  return (
    <div>
      <p data-testid="authenticated">
        {isAuthenticated ? "authenticated" : "unauthenticated"}
      </p>

      <p data-testid="user-email">{user?.email ?? "no user"}</p>

      <button
        type="button"
        onClick={() => login("test@example.com", "password123")}
      >
        Login
      </button>

      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

describe("AuthProvider", () => {
  it("authenticates and persists the user when login succeeds", async () => {
    const { userEvent } = await import("@testing-library/user-event");

    const user = userEvent.setup();

    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    expect(screen.getByTestId("authenticated")).toHaveTextContent(
      "unauthenticated",
    );

    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByTestId("authenticated")).toHaveTextContent(
      "authenticated",
    );

    expect(screen.getByTestId("user-email")).toHaveTextContent(
      "test@example.com",
    );

    expect(localStorage.getItem("portfolio_user")).toBe(
      JSON.stringify({
        email: "test@example.com",
        name: "Titus Luoyang",
      }),
    );
  });

  it("logs out the user and removes persisted authentication", async () => {
    const { userEvent } = await import("@testing-library/user-event");

    const user = userEvent.setup();

    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(screen.getByTestId("authenticated")).toHaveTextContent(
      "authenticated",
    );

    expect(localStorage.getItem("portfolio_user")).not.toBeNull();

    await user.click(screen.getByRole("button", { name: "Logout" }));

    expect(screen.getByTestId("authenticated")).toHaveTextContent(
      "unauthenticated",
    );

    expect(screen.getByTestId("user-email")).toHaveTextContent("no user");

    expect(localStorage.getItem("portfolio_user")).toBeNull();
  });

  it("restores the persisted user when the provider mounts", () => {
    localStorage.setItem(
      "portfolio_user",
      JSON.stringify({
        email: "persisted@example.com",
        name: "Persisted User",
      }),
    );

    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    expect(screen.getByTestId("authenticated")).toHaveTextContent(
      "authenticated",
    );

    expect(screen.getByTestId("user-email")).toHaveTextContent(
      "persisted@example.com",
    );
  });

  it("ignores malformed persisted authentication data", () => {
    localStorage.setItem("portfolio_user", "{invalid-json");

    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    expect(screen.getByTestId("authenticated")).toHaveTextContent(
      "unauthenticated",
    );

    expect(screen.getByTestId("user-email")).toHaveTextContent("no user");
  });

  it("ignores invalid persisted user data", () => {
    localStorage.setItem(
      "portfolio_user",
      JSON.stringify({
        email: "test@example.com",
      }),
    );

    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>,
    );

    expect(screen.getByTestId("authenticated")).toHaveTextContent(
      "unauthenticated",
    );

    expect(screen.getByTestId("user-email")).toHaveTextContent("no user");
  });
});
