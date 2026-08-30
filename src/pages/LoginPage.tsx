import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../features/auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { loginSchema, type LoginFormData } from "../features/auth/login.schema";

function LoginPage(): React.ReactElement {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: LoginFormData) => {
    const success = login(data.email, data.password);

    if (success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-2xl border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-950">Sign in</h1>

        <p className="mt-2 text-slate-600">
          Demo authentication for the portfolio application.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              className={`mt-2 w-full rounded-lg border px-4 py-3 ${
                errors.email ? 'border-red-500' : 'border-slate-300'
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
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password")}
              className={`mt-2 w-full rounded-lg border px-4 py-3 ${
                errors.password ? 'border-red-500' : 'border-slate-300'
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
            className="w-full rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
