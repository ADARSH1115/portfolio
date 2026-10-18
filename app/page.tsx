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
                <span className="tiny-dot" /> Engineering, from end to end.
              </p>
              <h1>
                Building reliable
                <br />
                software, data systems,
                <br />
                and <em>intelligent</em>
                <br />
                applications.
              </h1>
              <p className="hero-description">
                I’m Adarsh, a computer science engineer focused on backend
                development, data engineering, and applied AI. I enjoy turning
                complex problems into practical, well-engineered solutions.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowDown size={17} />
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
              <h2>Ideas, built into systems.</h2>
            </div>
            <p>
              A closer look at the software I build,
              <br />
              and the engineering behind it.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="container experience-grid" data-reveal>
            <div>
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                Connecting software
                <br />
                to the physical world.
              </h2>
              <p className="section-intro">
                Hands-on engineering at the intersection of embedded hardware,
                backend services, and machine learning.
              </p>
            </div>
            <div className="experience-content">
              <div className="experience-meta">
                <span>FEB — JUN 2026</span>
                <span>INTERNSHIP</span>
              </div>
              <h3>Industry 4.0 & IIoT Intern</h3>
              <p className="experience-org">
                Bajaj Engineering Skills Training (BEST)
              </p>
              <p className="muted">
                Thapar Institute of Engineering & Technology · Patiala
              </p>
              <ul>
                <li>
                  Developed Smart Twin, bringing sensor telemetry, model
                  inference, and a monitoring interface into one application.
                </li>
                <li>
                  Integrated ESP32 sensor inputs with Python/Flask APIs and an
                  XGBoost model for machine-health insights.
                </li>
                <li>
                  Built a React dashboard to present sensor readings, fault
                  probabilities, and maintenance recommendations.
                </li>
              </ul>
              <a className="text-link" href="#smart-twin-project">
                Explore the project <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section id="skills" className="section container">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">03 / TOOLKIT</p>
              <h2>The tools behind the work.</h2>
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
                  <h3>{title}</h3>
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
              Curious about how
              <br />
              things work.
              <br />
              <em>Intentional</em> about
              <br />
              how they’re built.
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
                  Good software starts
                  <br />
                  with a <em>conversation.</em>
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
