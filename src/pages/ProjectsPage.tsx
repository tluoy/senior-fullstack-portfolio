import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Projects
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Selected engineering projects
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          A selection of projects demonstrating full-stack engineering,
          cloud architecture, modern application development, and
          AI-powered solutions.
        </p>
      </div>

      <section
        aria-labelledby="projects-heading"
        className="mt-12"
      >
        <h2 id="projects-heading" className="sr-only">
          Project portfolio
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;