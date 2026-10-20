export const site = {
  name: "Padigela Adarsh Kumar",
  email: "adarshpadigela@gmail.com",
  github: "https://github.com/ADARSH1115",
  linkedin: "https://www.linkedin.com/in/adarsh-kumar-1115pa/",
  resume: "", // Intentionally disabled: no resume PDF is published.
  availability: "", // Optional, verified availability statement.
  description:
    "Adarsh Kumar is a software engineer building backend services and full-stack applications with Node.js, React, PostgreSQL, MongoDB, and Python.",
};
export function siteUrl() {
  const value = process.env.SITE_URL;
  if (!value) return undefined;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("SITE_URL must use HTTP or HTTPS");
  return url.origin;
}
export const navigation = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];
export const skills = [
  ["01", "Programming", "C++ · Python · JavaScript · SQL"],
  ["02", "Backend & APIs", "Node.js · Flask · REST APIs · JWT authentication"],
  [
    "03",
    "Frontend",
    "React · Tailwind CSS",
    "This portfolio: Next.js · TypeScript",
  ],
  [
    "04",
    "Data engineering",
    "SQL Server · PySpark · ETL pipelines · Dimensional modeling · MongoDB",
  ],
  [
    "05",
    "Applied AI / ML",
    "XGBoost · PyTorch · Model inference · Retrieval-based applications",
  ],
  ["06", "Developer tools", "Git · GitHub · Postman · Jupyter · npm"],
];
