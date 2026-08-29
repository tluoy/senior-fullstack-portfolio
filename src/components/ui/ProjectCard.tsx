import type { Project } from '../../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {project.category}
      </p>

      <h3 className="mt-3 text-xl font-semibold text-slate-950">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 leading-7 text-slate-600">
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard