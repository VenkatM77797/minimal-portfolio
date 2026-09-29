import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as education, c as projects, i as contact, l as skills, n as about, o as experience, r as certifications, s as hero } from "./router-Bv5HjZec.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dw5dILQi.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Section({ id, title, eyebrow, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		"aria-labelledby": `${id}-heading`,
		className: cn("border-t border-border py-16 sm:py-20", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-4xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-8 sm:mb-10",
				children: [eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
					children: eyebrow
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: `${id}-heading`,
					className: "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
					children: title
				})]
			}), children]
		})
	});
}
function Tag({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: "rounded-md border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground",
		children
	});
}
function ExternalLink({ href, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer noopener",
		className: cn("text-foreground underline decoration-border decoration-1 underline-offset-4 transition-colors hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring", className),
		children
	});
}
function Card({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-lg border border-border bg-card p-5 transition-colors hover:border-foreground/30 sm:p-6", className),
		children
	});
}
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "flex h-full flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-base font-semibold tracking-tight text-foreground",
					children: project.name
				}), project.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 rounded-md border border-border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
					children: "Featured"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: project.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap gap-2",
				"aria-label": `${project.name} tech stack`,
				children: project.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: t }, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-2 pt-1",
				children: [project.github ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.github,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
					children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sr-only",
						children: [" repository for ", project.name]
					})]
				}) : null, project.demo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: project.demo,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "rounded-md border border-foreground bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
					children: ["Live demo", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "sr-only",
						children: [" of ", project.name]
					})]
				}) : null]
			})
		]
	});
}
var NAV = [
	{
		id: "about",
		label: "About"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "education",
		label: "Education"
	},
	{
		id: "certifications",
		label: "Certifications"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function Index() {
	const featured = projects.filter((p) => p.featured);
	const others = projects.filter((p) => !p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background font-sans text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border focus:border-border focus:bg-card focus:px-3 focus:py-2 focus:text-sm",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Section navigation",
					className: "mx-auto flex w-full max-w-4xl items-center justify-between gap-4 px-6 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#main",
							className: "text-sm font-semibold tracking-tight",
							children: hero.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "hidden items-center gap-1 md:flex",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#${item.id}`,
								className: "rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
								children: item.label
							}) }, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${contact.email}`,
							className: "rounded-md border border-border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-secondary md:hidden",
							children: "Contact"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-labelledby": "hero-heading",
						className: "py-20 sm:py-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto w-full max-w-4xl px-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
									children: [
										hero.role,
										" · ",
										hero.location
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									id: "hero-heading",
									className: "mt-4 text-4xl font-semibold tracking-tight sm:text-5xl",
									children: hero.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground",
									children: hero.tagline
								}),
								hero.availability ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 inline-block rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground",
									children: hero.availability
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#projects",
											className: "rounded-md border border-foreground bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
											children: "View projects"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${contact.email}`,
											className: "rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
											children: "Get in touch"
										}),
										hero.resumeUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: hero.resumeUrl,
											className: "px-1 py-2 text-sm font-medium text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground",
											children: "Download Resume"
										}) : null
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "about",
						title: "About",
						eyebrow: "01",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-10 md:grid-cols-[1.5fr_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-4",
								children: about.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed text-muted-foreground",
									children: p
								}, p))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "divide-y divide-border border-t border-border",
								children: about.facts.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-4 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-sm text-muted-foreground",
										children: f.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "text-sm font-medium",
										children: f.value
									})]
								}, f.label))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "skills",
						title: "Skills",
						eyebrow: "02",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2",
							children: skills.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold uppercase tracking-wide text-muted-foreground",
								children: group.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 flex flex-wrap gap-2",
								children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { children: item }, item))
							})] }, group.category))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "experience",
						title: "Experience",
						eyebrow: "03",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-10",
							children: experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "text-base font-semibold tracking-tight",
										children: [
											job.role,
											" · ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-normal",
												children: job.company
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: [job.period, job.location ? ` · ${job.location}` : ""]
									})]
								}),
								job.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: job.summary
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2 border-l border-border pl-4",
									children: job.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "text-sm leading-relaxed text-muted-foreground",
										children: h
									}, h))
								})
							] }, `${job.company}-${job.period}`))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						id: "projects",
						title: "Projects",
						eyebrow: "04",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "-mt-4 mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground",
								children: "Selected open-source and side projects. Every card is rendered from the same reusable component, so adding a project only means adding an entry to the config file."
							}),
							featured.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-5 md:grid-cols-2",
								children: featured.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.name))
							}) : null,
							others.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid gap-5 md:grid-cols-2",
								children: others.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.name))
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "education",
						title: "Education",
						eyebrow: "05",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "space-y-6",
							children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-base font-semibold tracking-tight",
										children: item.degree
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: item.period
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: item.school
								}),
								item.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: item.detail
								}) : null
							] }, `${item.school}-${item.period}`))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						id: "certifications",
						title: "Certifications",
						eyebrow: "06",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "divide-y divide-border border-y border-border",
							children: certifications.map((cert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-base font-medium",
									children: cert.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
										href: cert.href,
										children: cert.name
									}) : cert.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: cert.issuer
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: cert.year
								})]
							}, cert.name))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						id: "contact",
						title: "Contact",
						eyebrow: "07",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-base leading-relaxed text-muted-foreground",
							children: contact.blurb
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${contact.email}`,
								className: "rounded-md border border-foreground bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
								children: contact.email
							}), contact.socials.map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: social.href,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
								children: social.label
							}, social.label))]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-6 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						hero.name
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Open-source resume template · MIT licensed" })]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
