import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/HomePage"));
export const AboutPage = lazy(() => import("../pages/AboutPage"));
export const SkillsPage = lazy(() => import("../pages/SkillsPage"));
export const ExperiencePage = lazy(() => import("../pages/ExperiencePage"));
export const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
export const ContactPage = lazy(() => import("../pages/ContactPage"));
export const LoginPage = lazy(() => import("../pages/LoginPage"));
export const DashboardPage = lazy(() => import("../pages/DashboardPage"));
export const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));