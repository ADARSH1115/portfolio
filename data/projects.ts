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
// Add verified repository and demo URLs here; absent links are intentionally omitted.
export const projects: Project[] = [
  {
    id: "smart-twin",
    number: "01",
    name: "Smart Twin",
    category: "Applied AI / ML · Industrial IoT",
    description: "From sensor signals to machine-health insights.",
    implementation:
      "A predictive-maintenance application built during my BEST internship. A Python/Flask backend processes ESP32 telemetry and runs XGBoost inference; a React dashboard presents readings, fault probabilities, and maintenance recommendations.",
    decision:
      "Connected MPU6050, LM35, DHT22, ACS712, and rotary encoder inputs through an ESP32 to backend APIs, keeping telemetry processing, inference, and visualization distinct.",
    technologies: ["Python", "Flask", "React", "ESP32", "XGBoost", "REST APIs"],
  },
  {
    id: "dreamx",
    number: "02",
    name: "DreamX",
    category: "Full-stack development",
    description: "A storefront with a complete application behind it.",
    implementation:
      "An e-commerce application with product browsing and filtering, a persistent shopping cart, JWT authentication, and MongoDB-backed application data.",
    decision:
      "Connected reusable React components and application state to Node.js APIs, with role-based route protection and persistence across the shopping experience.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "JWT"],
  },
  {
    id: "warehouse",
    number: "03",
    name: "Data Warehouse & ETL",
    category: "Data engineering",
    description: "Turning fragmented source data into a structured foundation.",
    implementation:
      "A Bronze–Silver–Gold workflow bringing together more than seven CRM and ERP datasets. SQL transformations, stored procedures, and PySpark processing prepare data for downstream analytics.",
    decision:
      "Separated raw ingestion, data-quality transformations, and analytics-ready models, using a star schema with fact and dimension tables.",
    technologies: ["SQL Server", "SQL", "SSMS", "PySpark", "Star schema"],
  },
  {
    id: "pdf-trainer",
    number: "04",
    name: "GenAI PDF Trainer",
    category: "Generative AI · Experimental",
    description: "Exploring how language models learn from documents.",
    implementation:
      "An experimental application combining PDF text extraction, text preparation, DistilGPT-2 fine-tuning, and a small retrieval-based workflow to support document-grounded responses.",
    decision:
      "Explored both model training and retrieval of relevant passages. This is a learning project, without claims of production readiness or evaluated response quality.",
    technologies: ["Python", "PyTorch", "PdfPlumber", "DistilGPT-2"],
  },
];
