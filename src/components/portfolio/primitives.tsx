import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("border-t border-border py-16 sm:py-20", className)}
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        <header className="mb-8 sm:mb-10">
          {eyebrow ? (
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </li>
  );
}

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "text-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/30 sm:p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
