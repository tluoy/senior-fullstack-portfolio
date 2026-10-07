import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary";
};

function Button({ children, to, href, variant = "primary" }: ButtonProps) {
  const className = [
    "inline-flex items-center justify-center rounded-lg px-5 py-3",
    "font-medium transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 dark:active:bg-slate-300 dark:focus-visible:outline-white"
      : "border border-slate-300 text-slate-900 hover:bg-slate-50 active:bg-slate-100 focus-visible:outline-slate-900 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800 dark:active:bg-slate-700 dark:focus-visible:outline-white",
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

export default Button;
