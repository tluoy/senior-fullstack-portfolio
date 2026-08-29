import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

function FeaturedProjects() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="max-w-3xl">
        <h2
          id="projects-heading"
          className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
        >
          Featured Projects
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          A selection of full-stack, cloud, fintech, and AI-focused
          applications demonstrating modern engineering practices.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects