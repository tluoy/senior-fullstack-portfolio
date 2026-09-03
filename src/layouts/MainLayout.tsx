import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../features/auth/useAuth";
import { useTheme } from "../features/theme/useTheme";

function MainLayout(): React.ReactElement {
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/95 shadow-sm backdrop-blur-lg transition-colors duration-300 dark:border-slate-700/50 dark:bg-slate-950/95">
        <nav
          aria-label="Primary navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
        >
          {/* Logo */}
          <div className="shrink-0">
            <strong className="text-2xl bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold tracking-tight">
              Portfolio
            </strong>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/skills", label: "Skills" },
              { to: "/experience", label: "Experience" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    } after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                      isActive ? "after:scale-x-100" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-pressed={theme === "dark"}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">{theme === "light" ? "🌙" : "☀️"}</span>
            <span className="sr-only">
              {theme === "light" ? "Dark mode" : "Light mode"}
            </span>
          </button>

          {/* Login Button */}
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600 dark:text-slate-300">{user?.name}</span>
              <button
                type="button"
                onClick={logout}
                className="cursor-pointer rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Login
            </NavLink>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-lg font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Portfolio
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building exceptional digital experiences with modern
                technologies and creative vision.
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer navigation">
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/projects", label: "Projects" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <p className="text-slate-400 text-sm mb-3">
                Interested in working together? Let's connect!
              </p>
              <NavLink
                to="/contact"
                className="inline-flex items-center px-4 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Get in Touch
              </NavLink>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-slate-400 text-sm">
                © 2026 Senior Full-Stack Portfolio. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
