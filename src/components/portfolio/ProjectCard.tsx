import { Card, Tag } from "./primitives";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        {project.featured ? (
          <span className="shrink-0 rounded-md border border-border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            Featured
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.name} tech stack`}>
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            GitHub
            <span className="sr-only"> repository for {project.name}</span>
          </a>
        ) : null}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-foreground bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Live demo
            <span className="sr-only"> of {project.name}</span>
          </a>
        ) : null}
      </div>
    </Card>
  );
}
