import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ProjectCard from '../ProjectCard'
import type { Project } from '../../../data/projects'

describe('ProjectCard', () => {
  const project: Project = {
    id: 'test-project',
    title: 'Test Project',
    description: 'A test project used to verify the ProjectCard component.',
    technologies: ['React', 'TypeScript', 'Vitest'],
    category: 'Testing',
  }

  it('renders the project information', () => {
    render(<ProjectCard project={project} />)

    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(
      screen.getByText(
        'A test project used to verify the ProjectCard component.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByText('Testing')).toBeInTheDocument()
  })

  it('renders all project technologies', () => {
    render(<ProjectCard project={project} />)

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Vitest')).toBeInTheDocument()
  })
})