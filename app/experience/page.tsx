import Link from "next/link";
import { InteractiveWords } from "@/components/interactive-words";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Reveal } from "@/components/reveal";
import { siteUrl } from "@/data/site";
const origin = siteUrl();
export const metadata: Metadata = {
  title: "Experience — Adarsh Kumar",
  description:
    "Adarsh Kumar’s Industry 4.0 and IIoT internship at BEST: sensor integration, backend APIs, and machine-health visualization.",
  ...(origin
    ? {
        alternates: { canonical: `${origin}/experience` },
        openGraph: {
          url: `${origin}/experience`,
          title: "Experience — Adarsh Kumar",
        },
      }
    : {}),
};
export default function Experience() {
  return (
    <>
      <Link className="skip-link" href="#main">
        Skip to content
      </Link>
      <Navigation experiencePage />
      <Reveal />
      <main id="main">
        <section className="container experience-intro" id="top">
          <Link className="text-link" href="/">
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
          <p className="eyebrow">EXPERIENCE</p>
          <h1>
            <InteractiveWords>
              Learning by building.
              <br />
              <em>Engineering in practice.</em>
            </InteractiveWords>
          </h1>
          <p className="hero-description">
            A closer look at my internship, the systems I worked on, and how I
            connected software to real-world sensor data.
          </p>
        </section>
        <section id="experience" className="section experience-section">
          <div className="container experience-grid" data-reveal>
            <div>
              <p className="eyebrow">BEST / FEB — JUN 2026</p>
              <h2>
                <InteractiveWords>
                  Connecting software
                  <br />
                  to the physical world.
                </InteractiveWords>
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
              <h3>
                <InteractiveWords>Industry 4.0 & IIoT Intern</InteractiveWords>
              </h3>
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
              <Link className="text-link" href="/#smart-twin-project">
                Explore the project <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="container experience-next">
          <h2>
            <InteractiveWords>
              Explore the work behind the experience.
            </InteractiveWords>
          </h2>
          <Link className="button button-primary" href="/#projects">
            View projects <ArrowUpRight size={17} />
          </Link>
          <Link className="text-link" href="/#contact">
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </section>
      </main>
      <footer className="container footer">
        <span>Adarsh Kumar · Software Engineer</span>
        <Link href="/">
          Back to portfolio <ArrowLeft size={14} />
        </Link>
      </footer>
    </>
  );
}
