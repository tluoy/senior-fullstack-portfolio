function ProfessionalSummary() {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <h2
        id="summary-heading"
        className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
      >
        Professional Summary
      </h2>
      <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        <p>
          I design, develop, and maintain enterprise software solutions with a
          focus on scalability, maintainability, performance, and real-world
          business outcomes.
        </p>

        <p>
          My experience spans enterprise systems, fintech, ERP, CRM, analytics,
          cloud-based applications, and modern AI-powered solutions.
        </p>

        <p>
          My current areas of focus include modern React and Next.js
          development, modern .NET, cloud-native architecture, generative AI,
          LLM integration, RAG, and AI-driven workflow automation.
        </p>
      </div>
    </section>
  );
}

export default ProfessionalSummary;
