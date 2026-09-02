# Senior Full-Stack Portfolio

A professional React and TypeScript portfolio application designed to showcase senior full-stack engineering experience, technical skills, selected projects, and modern software engineering practices.

The project is being developed incrementally using an Agile approach, with an initial MVP followed by continuous improvements in areas such as testing, accessibility, performance, security, and documentation.

## Overview

The portfolio is built as a modern React application with a focus on:

- Maintainable component architecture
- Type-safe development with TypeScript
- Responsive UI with Tailwind CSS
- Client-side routing
- Form validation
- Automated testing
- Accessibility
- Performance optimization
- Secure-by-design development practices
- Clear project documentation

## Technology Stack

### Application

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS

### Forms & Validation

- React Hook Form
- Zod
- `@hookform/resolvers`

### Testing

- Vitest
- React Testing Library
- Testing Library User Event
- JSDOM

### Code Quality

- ESLint
- TypeScript

### Development Workflow

- Git
- GitHub
- Pull Requests
- CodeRabbit
- Feature-branch workflow

## Current Features

### Portfolio Pages

The application currently includes:

- Home
- About
- Skills
- Experience
- Projects
- Contact
- Login
- Dashboard
- Not Found

### Project Showcase

The Projects section currently contains representative projects covering:

- Enterprise software
- FinTech
- Cloud & DevOps
- Artificial Intelligence

The project data is structured separately from the presentation layer to keep the UI reusable and maintainable.

### Authentication Demo

The application includes a deliberately simplified authentication flow for demonstrating client-side authentication concepts.

It includes:

- Login
- Logout
- Authentication state
- React Context
- Protected routes
- Public-only routes
- Persisted demo user state

The authentication implementation is **not intended to provide production-grade authentication**.

User state is persisted using browser `localStorage` for demonstration purposes. Persisted data is runtime-validated before being trusted by the application.

Production authentication would require a backend or identity provider, server-side authorization, and an appropriate secure session-management strategy.

### Forms

The Contact page uses:

- React Hook Form
- Zod validation
- Accessible form labels
- Validation messages
- `aria-invalid`
- `aria-describedby`
- Submission state
- Accessible success/status messaging

## Performance

The application uses route-level code splitting so that individual pages can be loaded when required instead of placing every page into the initial JavaScript bundle.

Lazy-loaded routes include:

- Home
- About
- Skills
- Experience
- Projects
- Contact
- Login
- Dashboard
- Not Found

A reusable page-loading component provides feedback while lazy-loaded route modules are being fetched.

The initial bundle was reduced from approximately **416 KB to 284 KB** after introducing route-level code splitting.

## Accessibility

Accessibility is treated as an ongoing engineering concern.

Current improvements include:

- Semantic HTML
- Accessible form labels
- Validation state communication
- Screen-reader status messaging
- Proper navigation semantics
- Keyboard-accessible interactive controls

Accessibility improvements will continue as the application evolves.

## Testing

The project uses Vitest and React Testing Library for automated tests.

Current tests cover areas including:

- Project card rendering
- Protected route behavior
- Authentication provider behavior
- Authentication persistence
- Logout behavior
- Invalid persisted authentication data

Run the test suite with:

```bash
npm run test:run
```

For watch mode:

```bash
npm test
```

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Testing

```bash
npm test
```

Runs Vitest in watch mode.

```bash
npm run test:run
```

Runs the test suite once.

### Linting

```bash
npm run lint
```

Runs ESLint against the project.

### Production Build

```bash
npm run build
```

Runs TypeScript checking and creates the production Vite build.

### Preview

```bash
npm run preview
```

Serves the production build locally for preview.

## Getting Started

### Prerequisites

Install:

- Node.js
- npm
- Git

### Installation

Clone the repository and enter the project directory:

```bash
git clone https://senior-fullstack-portfolio.git
cd senior-fullstack-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project Structure

The current frontend structure is organized around application responsibilities:

```text
src/
├── components/
│   ├── auth/
│   ├── forms/
│   ├── sections/
│   └── ui/
├── features/
│   └── auth/
├── layouts/
├── pages/
├── router/
├── data/
├── test/
├── App.tsx
├── main.tsx
└── index.css
```

Documentation is maintained under:

```text
docs/
└── architecture/
    └── overview.md
```

## Development Workflow

Development follows a feature-branch and pull-request workflow.

The main development branch is:

```text
dev
```

Feature work is developed on dedicated branches:

```text
feature/<feature-name>
```

Changes are reviewed through Pull Requests before being merged into `dev`.

The general workflow is:

```text
dev
  │
  ├── feature branch
  │       │
  │       ├── development
  │       ├── tests
  │       ├── lint
  │       └── build
  │
  └────── Pull Request
              │
              ├── Code review
              └── Merge → dev
```

The `main` branch is treated as the stable branch and changes are promoted through Pull Requests rather than pushed directly.

## Quality Gates

Before submitting changes for review, the project should pass:

```bash
npm run test:run
npm run lint
npm run build
```

All three checks should pass before creating or merging a Pull Request.

## Architecture

A more detailed description of the application's architecture and technology strategy is available in:

```text
docs/architecture/overview.md
```

The architecture emphasizes:

- Separation of concerns
- Reusable components
- Maintainability
- Scalability
- Accessibility
- Performance
- Security
- Testability

## Project Status

The project is being developed incrementally.

Completed engineering improvements currently include:

- Core portfolio pages
- Project showcase
- Authentication demonstration
- Protected routing
- Automated testing foundation
- Accessibility improvements
- Route-level code splitting
- Lazy-loading experience
- Authentication storage validation
- Security-boundary documentation
- Project README documentation

Planned improvements will be introduced as the project evolves.

## License

This project is a personal portfolio application.