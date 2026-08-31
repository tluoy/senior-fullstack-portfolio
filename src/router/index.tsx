import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import PublicOnlyRoute from "../components/auth/PublicOnlyRoute";

import {
  HomePage,
  AboutPage,
  SkillsPage,
  ExperiencePage,
  ProjectsPage,
  ContactPage,
  LoginPage,
  DashboardPage,
  NotFoundPage,
} from "./lazyPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "skills",
        element: <SkillsPage />,
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        element: <PublicOnlyRoute />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
