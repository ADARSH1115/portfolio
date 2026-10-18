import { ArrowUpRight, Plus } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectVisual } from "./visuals";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={`${project.id}-project`}
      className={`project project-${project.id}`}
      data-reveal
    >
      <ProjectVisual id={project.id} />
      <div className="project-body">
        <div className="project-category">
          <span>
            {project.number} / {project.category}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-hook">{project.description}</p>
        <p>{project.implementation}</p>
        <ul className="technology-list" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <details>
          <summary>
            Engineering notes <Plus size={16} />
          </summary>
          <p>{project.decision}</p>
        </details>
        {(project.github || project.demo) && (
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code <ArrowUpRight size={15} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live demo <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
