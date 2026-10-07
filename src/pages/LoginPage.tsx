import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../features/auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { loginSchema, type LoginFormData } from "../features/auth/login.schema";

function LoginPage(): React.ReactElement {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: LoginFormData) => {
    const success = login(data.email, data.password);

    if (success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-2xl border border-slate-200 p-8 dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-bold text-slate-950 dark:text-white">
          Sign in
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Demo authentication for the portfolio application.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-white dark:focus:ring-offset-slate-950 ${
                errors.email
                  ? "border-red-500"
                  : "border-slate-300 dark:border-slate-600"
              }`}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
              className={`mt-2 w-full rounded-lg border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-white dark:focus:ring-offset-slate-950 ${
                errors.password
                  ? "border-red-500"
                  : "border-slate-300 dark:border-slate-600"
              }`}
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800 dark:focus:ring-white dark:focus:ring-offset-slate-950"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;