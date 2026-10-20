import { InteractiveWords } from "@/components/interactive-words";
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
        <h3>
          <InteractiveWords>{project.name}</InteractiveWords>
        </h3>
        <p className="project-hook">{project.description}</p>
        <p>{project.implementation}</p>
        <ul className="technology-list" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {(project.github || project.demo) && (
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source code for ${project.name}`}
              >
                Source code <ArrowUpRight size={15} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.name}`}
              >
                Live demo <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        )}
        <details>
          <summary>
            Engineering notes <Plus size={16} />
          </summary>
          <p>{project.decision}</p>
        </details>
      </div>
    </article>
  );
}
