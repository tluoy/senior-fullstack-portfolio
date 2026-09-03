import { useAuth } from "../features/auth/useAuth";
import { projects } from "../data/projects";
import Button from "../components/ui/Button";

function DashboardPage() {
  const { user } = useAuth();

  const metrics = [
    {
      label: "Projects shipped",
      value: "04",
      detail: "Across four disciplines",
    },
    { label: "Years experience", value: "13+", detail: "Enterprise delivery" },
    { label: "Core technologies", value: "30+", detail: "Across the stack" },
  ];

  const activity = [72, 48, 86, 62, 94, 78, 100];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <section aria-labelledby="dashboard-heading">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Private workspace
            </p>

            <h1
              id="dashboard-heading"
              className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl"
            >
              Welcome back, {user?.name}.
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              A quick view of the systems, skills, and delivery experience
              behind this portfolio.
            </p>
          </div>

          <Button to="/projects">View projects</Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-slate-200 bg-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {metric.label}
              </p>
              <p className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {metric.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
        aria-label="Portfolio overview"
      >
        <article className="rounded-2xl border border-slate-200 bg-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Delivery overview
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Consistent momentum
              </h2>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              On track
            </span>
          </div>

          <div className="mt-10 flex h-40 items-end gap-3 border-b border-slate-300 dark:border-slate-700">
            {activity.map((height, index) => (
              <div
                key={height}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  role="img"
                  aria-label={`Week ${index + 1} delivery activity: ${height}%`}
                  className="w-full rounded-t-lg bg-blue-500 transition-colors hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-300"
                  style={{ height: `${height}%` }}
                  title={`Delivery activity ${index + 1}`}
                />
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  W{index + 1}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Focus areas
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Built for impact
          </h2>

          <div className="mt-8 space-y-5">
            {[
              "Full-stack systems",
              "Cloud-native delivery",
              "AI-powered products",
            ].map((focus, index) => (
              <div key={focus} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                  0{index + 1}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-slate-950 dark:text-white">
                    {focus}
                  </p>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700">
                    <div
                      className="h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"
                      style={{ width: `${88 - index * 12}%` }}
                    />
                    <div
                      role="progressbar"
                      aria-label={focus}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={88 - index * 12}
                      className="h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"
                      style={{ width: `${88 - index * 12}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10" aria-labelledby="dashboard-projects-heading">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Current portfolio
            </p>
            <h2
              id="dashboard-projects-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
            >
              Featured systems
            </h2>
          </div>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {projects.length} projects
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <article
              key={project.id}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-200 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-100 dark:ring-emerald-950" />
              <div className="min-w-0">
                <h3 className="truncate font-semibold text-slate-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {project.category}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="ml-auto text-xl text-slate-400"
              >
                →
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default DashboardPage;
