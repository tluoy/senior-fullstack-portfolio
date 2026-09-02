import Button from "../components/ui/Button";

type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible, and maintainable interfaces using modern frontend technologies and component-driven development.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Engineering",
    description:
      "Designing APIs and backend services with a focus on clean architecture, reliability, scalability, and maintainability.",
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Node.js",
      "Python",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Working with cloud platforms, containers, automation, and delivery pipelines to build reliable software delivery processes.",
    skills: [
      "Microsoft Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Azure DevOps",
    ],
  },
  {
    title: "Data & AI",
    description:
      "Working with relational and NoSQL data platforms while exploring modern AI application patterns and intelligent systems.",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "LLMs",
      "RAG",
      "Vector Databases",
      "AI Agents",
    ],
  },
];

function SkillsPage() {
  return (
    <main>
      <section
        aria-labelledby="skills-page-heading"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Technical Skills
          </p>

          <h1
            id="skills-page-heading"
            className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            A broad engineering toolkit built for modern software systems.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            My technical experience spans frontend and backend development,
            cloud infrastructure, DevOps, data platforms, and AI-powered
            applications. I focus on choosing the right tools for the problem
            rather than treating technology as an end in itself.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h2 className="text-2xl font-semibold text-slate-950">
                {group.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {group.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="engineering-principles-heading"
        className="border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Beyond Technologies
            </p>

            <h2
              id="engineering-principles-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
            >
              Engineering is about more than knowing a technology.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Strong software engineering also requires architectural thinking,
              problem solving, communication, collaboration, and a commitment
              to quality throughout the development lifecycle.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Architecture
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Designing systems that are maintainable, scalable, and aligned
                with business requirements.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Problem Solving
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Breaking complex requirements into practical technical
                solutions and delivering them incrementally.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-950">
                Quality
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Using testing, code review, automation, security, and
                continuous improvement to build confidence in software.
              </p>
            </article>
          </div>

          <div className="mt-10">
            <Button to="/projects">Explore My Projects</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SkillsPage;