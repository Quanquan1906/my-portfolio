import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Fast Food Microservices",
    category: "Full-stack / Microservices",
    role: "Full-stack Developer",
    description:
      "A fast food ordering system designed with a microservices architecture. The system separates core business capabilities into independent services to improve scalability, maintainability, and service responsibility.",
    techStack: [
      "TypeScript",
      "Microservices",
      "Docker",
      "Kafka",
      "API Gateway",
      "Authentication",
    ],
    highlights: [
      "Microservices-based backend architecture",
      "Separated services for product, order, payment, authentication, notification, and delivery",
      "Docker-based development environment",
      "Kafka message broker integration",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Quanquan1906/fast_food-microservices",
      },
    ],
    featured: true,
  },
  {
    title: "Goshu HRM Platform",
    category: "Full-stack / HRM System",
    role: "Frontend & Backend Developer",
    description:
      "A human resource management platform built with a separated frontend and backend architecture. The frontend focuses on building a clean HRM interface, while the backend provides authentication, user management, and API services.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    highlights: [
      "Separated frontend and backend repositories",
      "HRM-oriented user interface",
      "Authentication and user management",
      "API integration between frontend and backend",
    ],
    links: [
      {
        label: "Frontend Repo",
        href: "https://github.com/Kaicity/goshu-app",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/Kaicity/goshu-be",
      },
    ],
    featured: true,
  },
  {
    title: "FinTrack AI",
    category: "Full-stack / Finance",
    role: "Full-stack Developer",
    description:
      "A Vietnamese personal finance management web application integrated with Google Gemini AI. Users can track income and expenses via manual input, natural language (NLP), or receipt image scanning (OCR). The system provides dashboard analytics, spending reports, an AI chatbot, and anomaly detection.",
    techStack: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "MongoDB",
      "Google Gemini AI",
      "Vite",
      "Tailwind CSS",
    ],
    highlights: [
      "NLP input: type a Vietnamese sentence to auto-parse transaction data",
      "Multi-mode AI chatbot: query, OCR receipt, anomaly detection, savings plan",
      "Receipt OCR using Gemini Vision API",
      "Dashboard with Area Chart, Pie Chart, and Bar Chart analytics",
      "Separated FastAPI backend and React frontend",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Quanquan1906/web-finance",
      },
    ],
    featured: true,
  },
  {
    title: "Todo List",
    category: "Frontend / Angular",
    role: "Frontend Developer",
    description:
      "A simple Todo List application built with Angular. This project demonstrates basic frontend structure, component-based development, task management features, and deployment practice.",
    techStack: ["Angular", "TypeScript", "HTML", "SCSS"],
    highlights: [
      "Angular frontend project",
      "Component-based UI structure",
      "Basic task management features",
      "Deployed demo available",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/Quanquan1906/Todo-List",
      },
      {
        label: "Live Demo",
        href: "https://todo-list-eight-lemon-16.vercel.app",
      },
    ],
    featured: false,
  },
];
