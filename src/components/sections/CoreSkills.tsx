type SkillGroup = {
  title: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Angular',
      'Vue.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'Node.js',
      'Python',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'Microsoft Azure',
      'AWS',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'GitHub Actions',
      'Azure DevOps',
    ],
  },
  {
    title: 'Data & AI',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'LLMs',
      'RAG',
      'Vector Databases',
      'AI Agents',
    ],
  },
]

function CoreSkills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="max-w-3xl">
        <h2
          id="skills-heading"
          className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
        >
          Core Technical Skills
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          A broad engineering toolkit spanning modern frontend
          development, backend systems, cloud infrastructure,
          data platforms, and AI-powered applications.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="group rounded-2xl border border-slate-200 bg-slate-200 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-700"
          >
            <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
              {group.title}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CoreSkills