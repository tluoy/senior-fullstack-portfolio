type Experience = {
  role: string
  company: string
  location: string
  period: string
  summary: string
  achievements: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Trigyn Technologies (United Nations)',
    location: 'Entebbe, Uganda',
    period: '2013 – 2025',
    summary:
      'Designed and delivered enterprise-grade software solutions supporting multiple United Nations departments and mission-critical business functions.',
    achievements: [
      'Developed scalable ASP.NET and C# backend services and REST APIs to improve interoperability between enterprise applications.',
      'Modernized legacy enterprise applications into more maintainable and scalable solutions.',
      'Designed and integrated RESTful APIs that streamlined communication between enterprise systems and improved workflow automation.',
      'Contributed to architectural decisions for enterprise software platforms, focusing on scalability, maintainability, and long-term technology strategy.',
    ],
    technologies: ['C#', '.NET Core', 'ASP.NET', 'SQL Server', 'JavaScript'],
  },
  {
    role: 'Software Developer',
    company: 'Cellulant Kenya Ltd',
    location: 'Nairobi, Kenya',
    period: '2012 – 2013',
    summary:
      'Developed fintech web and mobile applications supporting secure payment processing and high-volume transaction management.',
    achievements: [
      'Developed backend services supporting commercial financial services and transaction processing.',
      'Improved transaction processing efficiency and application stability using Java, PHP, MySQL, and Linux.',
      'Automated operational workflows using shell scripting, reducing repetitive manual administration.',
    ],
    technologies: ['Java', 'PHP', 'JavaScript', 'MySQL', 'Linux', 'Shell Scripting'],
  },
  {
    role: 'Systems Support Engineer',
    company: 'Indra Kenya Ltd',
    location: 'Nairobi, Kenya',
    period: '2010 – 2012',
    summary:
      'Supported mission-critical enterprise systems deployed across multiple African markets.',
    achievements: [
      'Supported ERP, CRM, utility management, and customer information systems.',
      'Contributed to regional enterprise system implementations and customer onboarding initiatives.',
      'Delivered software customizations, system integrations, and performance enhancements for enterprise clients.',
    ],
    technologies: ['Oracle DB', 'PowerBuilder', 'C', 'ERP Systems', 'CRM Platforms'],
  },
]

function ExperiencePage() {
  return (
    <main>
      <section
        aria-labelledby="experience-heading"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Experience
          </p>

          <h1
            id="experience-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl"
          >
            13+ years building real-world software systems.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            My experience spans enterprise software, fintech, ERP and CRM
            systems, cloud-native applications, software architecture,
            integrations, and DevOps.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="border-t border-slate-200 pt-10"
            >
              <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {experience.period}
                  </p>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {experience.location}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {experience.role}
                  </h2>

                  <p className="mt-1 text-lg font-medium text-slate-700 dark:text-slate-300">
                    {experience.company}
                  </p>

                  <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
                    {experience.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-base leading-7 text-slate-600 dark:text-slate-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"
                        />

                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ExperiencePage