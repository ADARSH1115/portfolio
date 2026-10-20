import Link from "next/link";
import { InteractiveWords } from "@/components/interactive-words";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { HeroVisual } from "@/components/visuals";
import { ProjectCard } from "@/components/project";
import { projects } from "@/data/projects";
import { site, siteUrl, skills } from "@/data/site";
export default function Home() {
  const url = siteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    ...(url ? { url } : {}),
    sameAs: [site.github, site.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Thapar Institute of Engineering & Technology",
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <Reveal />
      <main id="main">
        <section className="hero container" id="top">
          <div className="hero-topline">
            <span>PADIGELA ADARSH KUMAR</span>
            <span>SOFTWARE ENGINEER / PORTFOLIO</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="tiny-dot" /> SOFTWARE / BACKEND ENGINEERING
              </p>
              <h1>
                <InteractiveWords>
                  Backend services.
                  <br />
                  Full-stack apps.
                  <br />
                  <em>Built with purpose.</em>
                </InteractiveWords>
              </h1>
              <p className="hero-description">
                I’m Adarsh, a computer science engineering graduate building
                APIs, data-backed services, and the interfaces that bring them
                together. Explore my work with Node.js, React, PostgreSQL,
                MongoDB, and Python.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View projects <ArrowDown size={17} />
                </a>
                <a className="button button-secondary" href="#contact">
                  Contact me <ArrowUpRight size={17} />
                </a>
                {site.resume && (
                  <a
                    className="text-link"
                    href={site.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View resume <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
              <div className="social-links">
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  <Github size={16} /> GitHub <ArrowUpRight size={12} />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
                </a>
              </div>
              {site.availability && <p>{site.availability}</p>}
            </div>
            <HeroVisual />
          </div>
          <div className="hero-foot">
            <span>Backend systems</span>
            <span>Full-stack applications</span>
            <span>Data engineering</span>
            <span>Applied AI / ML</span>
          </div>
        </section>
        <section id="projects" className="section container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                <InteractiveWords>
                  The code. The decisions. The work.
                </InteractiveWords>
              </h2>
            </div>
            <p>
              Explore the implementation,
              <br />
              and the decisions behind each project.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section
          id="experience"
          className="experience-preview container"
          aria-labelledby="experience-preview-title"
        >
          <div>
            <p className="eyebrow">02 / EXPERIENCE</p>
            <h2 id="experience-preview-title">
              <InteractiveWords>
                Engineering beyond the classroom.
              </InteractiveWords>
            </h2>
            <p>Industry 4.0 & IIoT internship · BEST · Feb–Jun 2026</p>
          </div>
          <Link className="button button-secondary" href="/experience">
            View my experience <ArrowUpRight size={17} />
          </Link>
        </section>
        <section id="skills" className="section container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">03 / TOOLKIT</p>
              <h2>
                <InteractiveWords>The tools behind the work.</InteractiveWords>
              </h2>
            </div>
            <p>
              Grounded in fundamentals.
              <br />
              Always adding to the toolkit.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(([number, title, list, note]) => (
              <div className="skill" key={number} data-reveal>
                <span className="skill-number">{number}</span>
                <div>
                  <h3>
                    <InteractiveWords>{title}</InteractiveWords>
                  </h3>
                  <p>{list}</p>
                  {note && <small>{note}</small>}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="section container about-grid"
          data-reveal
        >
          <div>
            <p className="eyebrow">04 / A LITTLE ABOUT ME</p>
            <h2>
              <InteractiveWords>
                Curious about how
                <br />
                things work.
                <br />
                <em>Intentional</em> about
                <br />
                how they’re built.
              </InteractiveWords>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Adarsh, a computer science engineering graduate from Thapar
              Institute of Engineering & Technology, Patiala.
            </p>
            <p>
              I enjoy following a problem through the whole system: how data
              arrives, how a service processes it, and how an interface makes
              the result useful. That curiosity has taken me from connected
              sensors and backend APIs to data warehouses and experiments with
              language models.
            </p>
            <p>
              I’m building my engineering fundamentals through practical
              projects, with a focus on clear architecture, maintainable code,
              and software that solves a concrete problem.
            </p>
            <div className="education">
              <span>B.E. / COMPUTER SCIENCE ENGINEERING</span>
              <strong>Thapar Institute of Engineering & Technology</strong>
              <small>Patiala · 2022–2026</small>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container" data-reveal>
            <p className="eyebrow">05 / WHAT’S NEXT?</p>
            <div className="contact-grid">
              <div>
                <h2>
                  <InteractiveWords>
                    Good software starts
                    <br />
                    with a <em>conversation.</em>
                  </InteractiveWords>
                </h2>
                <p>
                  Have an opportunity in software, backend, data, or applied AI?
                  <br />
                  I’d be glad to connect with your team.
                </p>
              </div>
              <a
                className="contact-arrow"
                href={`mailto:${site.email}`}
                aria-label={`Email Adarsh at ${site.email}`}
              >
                <ArrowUpRight size={42} />
              </a>
            </div>
            <a className="email-link" href={`mailto:${site.email}`}>
              <Mail size={20} />
              {site.email}
              <ArrowUpRight size={20} />
            </a>
            <div className="contact-links">
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={15} />
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={15} />
              </a>
              {site.resume && (
                <a href={site.resume} target="_blank" rel="noopener noreferrer">
                  Resume <ArrowRight size={15} />
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Thoughtfully built with Next.js.</span>
        <a href="#top">
          Back to top <ArrowUp size={14} />
        </a>
      </footer>
    </>
  );
}
