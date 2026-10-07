import Button from "../components/ui/Button";

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-20">
      <section
        aria-labelledby="not-found-heading"
        className="grid w-full items-center gap-12 rounded-2xl border border-slate-200 bg-slate-200 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[0.8fr_1.2fr] md:p-12"
      >
        <div
          aria-hidden="true"
          className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-full border border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-slate-950"
        >
          <div className="absolute h-2/3 w-2/3 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-800" />
          <span className="relative text-7xl font-bold tracking-tight text-blue-600 dark:text-blue-400 sm:text-8xl">
            404
          </span>
        </div>

        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Page unavailable
          </p>

          <h1
            id="not-found-heading"
            className="mt-3 text-4xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl"
          >
            This page took a wrong turn.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            The address may be outdated or the page may have moved. Return to
            the portfolio and continue exploring the work.
          </p>

          <div className="mt-8">
            <Button to="/">Back to homepage</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage