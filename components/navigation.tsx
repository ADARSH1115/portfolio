"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "@/data/site";
export function Navigation({
  experiencePage = false,
}: {
  experiencePage?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="header">
      <div className="container nav-inner">
        <a
          className="wordmark"
          href={experiencePage ? "/" : "#top"}
          aria-label="Adarsh Kumar, back to top"
        >
          ak<span>.</span>
        </a>
        <button
          ref={button}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              button.current?.focus();
            }
          }}
        >
          {navigation.map((label) => (
            <a
              key={label}
              href={
                label === "Experience"
                  ? "/experience"
                  : `${experiencePage ? "/" : ""}#${label.toLowerCase()}`
              }
              aria-current={
                experiencePage
                  ? label === "Experience"
                    ? "page"
                    : undefined
                  : active === label.toLowerCase() && label !== "Experience"
                    ? "location"
                    : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          {site.resume && (
            <a
              className="nav-resume"
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <ArrowUpRight size={15} />
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
