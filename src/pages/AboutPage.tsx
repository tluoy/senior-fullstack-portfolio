import Button from "../components/ui/Button";

function AboutPage() {
  return (
    <main>
      <section
        aria-labelledby="about-heading"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            About Me
          </p>

          <h1
            id="about-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Senior fullstack engineer focused on building reliable software.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            I am a software engineer who enjoys turning complex business
            requirements into maintainable, scalable, and user-focused
            software. My approach combines strong engineering fundamentals
            with practical problem solving and a focus on delivering software
            that creates real value.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            I work across the full software development lifecycle, from
            understanding requirements and designing solutions to building,
            testing, deploying, and continuously improving applications.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="approach-heading"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Engineering Approach
              </p>

              <h2
                id="approach-heading"
                className="mt-4 text-3xl font-bold tracking-tight text-slate-900"
              >
                Think beyond the code.
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Good software is more than working code. I care about
                architecture, maintainability, security, performance,
                accessibility, and the experience of the people using the
                system.
              </p>

              <p>
                I value clear communication, thoughtful technical decisions,
                automated quality checks, and an iterative approach to
                development. The goal is to build systems that teams can
                understand, maintain, and evolve with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="value-heading"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            What I Bring
          </p>

          <h2
            id="value-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Technical depth with a product mindset.
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-md focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-slate-900">
              <h3 className="text-lg font-semibold text-slate-950">
                Fullstack perspective
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Comfortable working across frontend, backend, APIs, databases,
                and the infrastructure required to deliver complete solutions.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-md focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-slate-900">
              <h3 className="text-lg font-semibold text-slate-950">
                Scalable thinking
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Focused on designing systems that remain maintainable and
                adaptable as requirements, users, and teams grow.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-md focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-slate-900">
              <h3 className="text-lg font-semibold text-slate-950">
                Quality mindset
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Strong emphasis on testing, code quality, security, and
                continuous improvement throughout the development lifecycle.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-md focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-slate-900">
              <h3 className="text-lg font-semibold text-slate-950">
                Collaboration
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                I believe effective engineering involves clear communication,
                constructive reviews, and working closely with others to solve
                the right problems.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <Button to="/contact">Let's Connect</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;