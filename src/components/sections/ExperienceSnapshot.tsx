function ExperienceSnapshot() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Experience
          </p>

          <h2
            id="experience-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Engineering experience built around real-world systems.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Over 13 years of experience designing, developing, and
            maintaining software solutions across enterprise systems,
            fintech, ERP, CRM, analytics, and cloud-based applications.
          </p>

          <p>
            My work combines hands-on software development with
            architecture, system modernization, integration, DevOps,
            and technical leadership.
          </p>

          <p>
            More recently, my focus has expanded into generative AI,
            LLM integration, retrieval-augmented generation, and
            AI-driven workflow automation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSnapshot