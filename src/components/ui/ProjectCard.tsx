import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          {project.category}
        </p>

        <span
          aria-hidden="true"
          className="text-slate-300 transition-colors duration-300 group-hover:text-blue-500"
        >
          →
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 leading-7 text-slate-600">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;