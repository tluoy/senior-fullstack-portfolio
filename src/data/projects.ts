export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
};

export const projects: Project[] = [
  {
    id: "enterprise-workflow-platform",
    title: "Enterprise Workflow Platform",
    description: "A scalable full-stack platform for managing enterprise workflows, approvals, reporting, and operational processes.",
    technologies: ["React", ".NET", "PostgreSQL", "Azure"],
    category: "Enterprise Software",
  },
  {
    id: "fintech-transaction-platform",
    title: "FinTech Transaction Platform",
    description: "A modern financial transaction platform designed around secure APIs, transactional processing, reporting, and operational visibility.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    category: "FinTech",
  },
  {
    id: "cloud-operations-dashboard",
    title: "Cloud Operations Dashboard",
    description: "A cloud operations dashboard providing visibility into application health, infrastructure metrics, deployments, and operational events.",
    technologies: ["React", "Python", "Azure", "Docker"],
    category: "Cloud & DevOps",
  },
  {
    id: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    description: "An AI-powered knowledge assistant using retrieval-augmented generation to provide contextual answers from an organization's knowledge base.",
    technologies: ["React", "Python", "LLMs", "RAG", "Vector Database"],
    category: "Artificial Intelligence",
  },
];
