import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as __exportAll } from "./server-Bnq3qCBb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Bv5HjZec.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CFDlmp0Y.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Developer Resume Portfolio" },
			{
				name: "description",
				content: "A minimal, config-driven resume portfolio for developers."
			},
			{
				property: "og:title",
				content: "Developer Resume Portfolio"
			},
			{
				property: "og:description",
				content: "A minimal, config-driven resume portfolio for developers."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var { meta, hero, about, skills, experience, projects, education, certifications, contact } = {
	meta: {
		siteTitle: "Alex Doe — Software Engineer Resume & Portfolio",
		siteDescription: "Resume and project portfolio of Alex Doe, a software engineer building reliable web platforms with TypeScript, React and Node."
	},
	hero: {
		name: "Alex Doe",
		role: "Software Engineer",
		tagline: "I build fast, accessible web products and the developer tooling that keeps them shipping.",
		location: "Berlin, Germany",
		availability: "Open to senior frontend & full-stack roles",
		resumeUrl: "/resume.pdf"
	},
	about: {
		paragraphs: ["I'm a software engineer with 7 years of experience across product teams and platform work. I care about clear interfaces, small dependencies, and code that the next person can read without a guide.", "Most of my work sits between design systems and backend APIs: shipping accessible UI, tightening build pipelines, and turning slow pages into fast ones."],
		facts: [
			{
				label: "Experience",
				value: "7 years"
			},
			{
				label: "Focus",
				value: "Frontend & platform"
			},
			{
				label: "Stack",
				value: "TypeScript, React, Node"
			},
			{
				label: "Timezone",
				value: "CET (UTC+1)"
			}
		]
	},
	skills: [
		{
			category: "Languages",
			items: [
				"TypeScript",
				"JavaScript",
				"Python",
				"SQL",
				"Go"
			]
		},
		{
			category: "Frontend",
			items: [
				"React",
				"Vite",
				"Tailwind CSS",
				"TanStack Query",
				"Accessibility (WCAG)"
			]
		},
		{
			category: "Backend",
			items: [
				"Node.js",
				"PostgreSQL",
				"REST",
				"GraphQL",
				"Redis"
			]
		},
		{
			category: "Tooling",
			items: [
				"Git",
				"GitHub Actions",
				"Docker",
				"Vitest",
				"Playwright"
			]
		}
	],
	experience: [
		{
			role: "Senior Frontend Engineer",
			company: "Northwind Labs",
			period: "2022 — Present",
			location: "Berlin, Germany",
			summary: "Design system and web performance for a B2B analytics suite.",
			highlights: [
				"Led a design-system rewrite adopted by 6 product teams, cutting UI bug reports by 40%.",
				"Reduced median page load from 3.1s to 1.2s by code-splitting and trimming bundle size 55%.",
				"Introduced automated accessibility checks in CI, reaching WCAG 2.1 AA on all core flows."
			]
		},
		{
			role: "Full-Stack Engineer",
			company: "Kite & Co.",
			period: "2019 — 2022",
			location: "Remote",
			highlights: [
				"Built a multi-tenant billing dashboard serving 20k monthly active users.",
				"Migrated a legacy jQuery app to React and TypeScript with zero downtime.",
				"Mentored 4 junior engineers through structured code review and pairing."
			]
		},
		{
			role: "Software Engineer",
			company: "Bitworks",
			period: "2017 — 2019",
			highlights: ["Shipped internal tooling that removed ~10 hours of manual reporting per week.", "Owned the public API client libraries in TypeScript and Python."]
		}
	],
	projects: [
		{
			name: "Resume Portfolio Template",
			description: "An open-source, config-driven resume portfolio for developers. Edit one file, deploy to GitHub Pages.",
			tech: [
				"React",
				"TypeScript",
				"Vite",
				"Tailwind CSS"
			],
			github: "https://github.com/your-username/resume-portfolio",
			demo: "https://your-username.github.io/resume-portfolio/",
			featured: true
		},
		{
			name: "Queryscope",
			description: "A local-first SQL explorer that profiles slow Postgres queries and suggests indexes from EXPLAIN output.",
			tech: [
				"TypeScript",
				"Node.js",
				"PostgreSQL"
			],
			github: "https://github.com/your-username/queryscope",
			demo: "https://queryscope.example.com",
			featured: true
		},
		{
			name: "a11y-audit-action",
			description: "GitHub Action that runs accessibility audits on every pull request and comments a diff of new violations.",
			tech: [
				"TypeScript",
				"GitHub Actions",
				"Playwright"
			],
			github: "https://github.com/your-username/a11y-audit-action"
		},
		{
			name: "Tinybus",
			description: "A 1.2 kB typed event bus with zero dependencies, used in production by several small teams.",
			tech: ["TypeScript", "Vitest"],
			github: "https://github.com/your-username/tinybus",
			demo: "https://tinybus.example.com"
		}
	],
	education: [{
		degree: "B.Sc. Computer Science",
		school: "Technical University of Munich",
		period: "2013 — 2017",
		detail: "Thesis on incremental static analysis for JavaScript build tools."
	}],
	certifications: [{
		name: "Certified Kubernetes Application Developer",
		issuer: "Cloud Native Computing Foundation",
		year: "2024",
		href: "https://www.cncf.io/training/certification/ckad/"
	}, {
		name: "Web Accessibility Specialist",
		issuer: "IAAP",
		year: "2023"
	}],
	contact: {
		email: "hello@example.com",
		blurb: "The fastest way to reach me is email. I reply to most messages within a couple of days.",
		socials: [
			{
				label: "GitHub",
				href: "https://github.com/your-username"
			},
			{
				label: "LinkedIn",
				href: "https://linkedin.com/in/your-username"
			},
			{
				label: "Website",
				href: "https://example.com"
			}
		]
	}
};
var $$splitComponentImporter = () => import("./routes-Dw5dILQi.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: meta.siteTitle },
		{
			name: "description",
			content: meta.siteDescription
		},
		{
			property: "og:title",
			content: meta.siteTitle
		},
		{
			property: "og:description",
			content: meta.siteDescription
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		...meta.ogImage ? [{
			property: "og:image",
			content: meta.ogImage
		}, {
			name: "twitter:image",
			content: meta.ogImage
		}] : []
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { education as a, projects as c, contact as i, skills as l, about as n, experience as o, certifications as r, hero as s, router_exports as t };
