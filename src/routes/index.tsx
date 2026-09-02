import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";
import { Card, ExternalLink, Section, Tag } from "@/components/portfolio/primitives";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

const { meta, hero, about, skills, experience, projects, education, certifications, contact } =
  portfolio;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: meta.siteTitle },
      { name: "description", content: meta.siteDescription },
      { property: "og:title", content: meta.siteTitle },
      { property: "og:description", content: meta.siteDescription },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(meta.ogImage
        ? [
            { property: "og:image", content: meta.ogImage },
            { name: "twitter:image", content: meta.ogImage },
          ]
        : []),
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function Index() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-border focus:bg-card focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <nav
          aria-label="Section navigation"
          className="mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-6 py-3"
        >
          <a href="#main" className="text-sm font-semibold tracking-tight">
            {hero.name}
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-secondary md:hidden"
          >
            Contact
          </a>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section aria-labelledby="hero-heading" className="py-20 sm:py-28">
          <div className="mx-auto w-full max-w-4xl px-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {hero.role} · {hero.location}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {hero.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {hero.tagline}
            </p>
            {hero.availability ? (
              <p className="mt-4 inline-block rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {hero.availability}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="rounded-md border border-foreground bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                View projects
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Get in touch
              </a>
              {hero.resumeUrl ? (
                <a
                  href={hero.resumeUrl}
                  className="px-1 py-2 text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
                >
                  Download résumé
                </a>
              ) : null}
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About" eyebrow="01">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <dl className="divide-y divide-border border-t border-border">
              {about.facts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm text-muted-foreground">{f.label}</dt>
                  <dd className="text-sm font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" eyebrow="02">
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <Card key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience" eyebrow="03">
          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold tracking-tight">
                    {job.role} · <span className="font-normal">{job.company}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {job.period}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                </div>
                {job.summary ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {job.summary}
                  </p>
                ) : null}
                <ul className="mt-3 space-y-2 border-l border-border pl-4">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm leading-relaxed text-muted-foreground">
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" eyebrow="04">
          <p className="-mt-4 mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Selected open-source and side projects. Every card is rendered from the same reusable
            component, so adding a project only means adding an entry to the config file.
          </p>
          {featured.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {featured.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          ) : null}
          {others.length > 0 ? (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {others.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          ) : null}
        </Section>

        {/* Education */}
        <Section id="education" title="Education" eyebrow="05">
          <ol className="space-y-6">
            {education.map((item) => (
              <li key={`${item.school}-${item.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold tracking-tight">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                {item.detail ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Section>

        {/* Certifications */}
        <Section id="certifications" title="Certifications" eyebrow="06">
          <ul className="divide-y divide-border border-y border-border">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
              >
                <div>
                  <h3 className="text-base font-medium">
                    {cert.href ? (
                      <ExternalLink href={cert.href}>{cert.name}</ExternalLink>
                    ) : (
                      cert.name
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <p className="text-sm text-muted-foreground">{cert.year}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" eyebrow="07">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {contact.blurb}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-md border border-foreground bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {contact.email}
            </a>
            {contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {hero.name}
          </p>
          <p>
            Open-source resume template · MIT licensed
          </p>
        </div>
      </footer>
    </div>
  );
}
