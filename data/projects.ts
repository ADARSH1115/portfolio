export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  implementation: string;
  decision: string;
  technologies: string[];
  github?: string;
  demo?: string;
};
// Curated from public repositories; demo URLs come from repository metadata.
export const projects: Project[] = [
  {
    id: "dreamx",
    number: "01",
    name: "DreamX",
    category: "Full-stack commerce",
    description:
      "Product discovery, shopping, and account management in one application.",
    implementation:
      "A Next.js storefront backed by Express APIs and MongoDB. Built product browsing, a persistent cart, account-based wishlists, and JWT authentication with protected admin endpoints.",
    decision:
      "Separated the storefront and API into independent services. Authentication middleware verifies JWTs and loads the user before checking admin permissions; browser-local cart state and database-backed wishlists serve different persistence needs.",
    technologies: [
      "Next.js",
      "React",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/ADARSH1115/dreamx-ecommerce",
    demo: "https://dreamx-frontend.vercel.app/",
  },
  {
    id: "gaming-leaderboard",
    number: "02",
    name: "Gaming Leaderboard",
    category: "Backend systems",
    description:
      "Keeping player scores durable and rankings quick to retrieve.",
    implementation:
      "A Node.js API with PostgreSQL, Prisma, and Redis, paired with a React dashboard for score submission and player lookup. Caches top-player responses and individual rankings.",
    decision:
      "Writes game sessions and score increments in a database transaction, then updates Redis sorted sets. Rank lookup falls back to PostgreSQL when Redis has no result, keeping durable storage separate from the ranking cache.",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "React",
    ],
    github: "https://github.com/ADARSH1115/gaming-leaderboard",
  },
  {
    id: "smart-twin",
    number: "03",
    name: "Smart Twin",
    category: "Internship project · Applied AI / IIoT",
    description: "From sensor signals to machine-health insights.",
    implementation:
      "A predictive-maintenance application built during my BEST internship. A Python/Flask backend processes ESP32 telemetry and runs XGBoost inference; a React dashboard presents readings, fault probabilities, and maintenance recommendations.",
    decision:
      "Connected MPU6050, LM35, DHT22, ACS712, and rotary encoder inputs through an ESP32 to backend APIs, keeping telemetry processing, inference, and visualization distinct.",
    technologies: ["Python", "Flask", "React", "ESP32", "XGBoost", "REST APIs"],
  },
  {
    id: "quiz-masters",
    number: "04",
    name: "Quiz Masters",
    category: "Frontend application",
    description:
      "A subject-based quiz experience with a personal score history.",
    implementation:
      "A React application with subject selection, client-side page routing, and score history stored in the browser. Organizes Math, JavaScript, HTML, and CSS into reusable subject cards.",
    decision:
      "Kept score history in localStorage for persistence on the same browser without an account. React Router separates the home, about, and contact pages; shared components keep navigation and subject presentation consistent.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "localStorage",
    ],
    github: "https://github.com/ADARSH1115/quiz-masters",
    demo: "https://quiz-masters-project.vercel.app",
  },
];
