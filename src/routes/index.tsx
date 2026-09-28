import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import projectFinance from "@/assets/project-finance.jpg";
import projectReading from "@/assets/project-reading.jpg";
import projectWellness from "@/assets/project-wellness.jpg";
import projectCollab from "@/assets/project-collab.jpg";
import aboutDesk from "@/assets/about-desk.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nagaraj Bhat — Product Designer" },
      {
        name: "description",
        content:
          "Portfolio of Nagaraj Bhat — selected projects, a short bio, and ways to get in touch.",
      },
      { property: "og:title", content: "Nagaraj Bhat — Product Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of Nagaraj Bhat — selected projects, a short bio, and ways to get in touch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "Lumen Banking",
    year: "2024",
    description:
      "A personal finance app that makes budgeting feel less like a chore and more like a habit.",
    tags: ["Product", "Mobile"],
    image: projectFinance,
    alt: "Lumen Banking dashboard on a laptop",
  },
  {
    title: "Fable Reader",
    year: "2023",
    description:
      "A distraction-free reading experience built around typography and restful pacing.",
    tags: ["Web", "Design system"],
    image: projectReading,
    alt: "Fable Reader interface with serif typography",
  },
  {
    title: "Tide Wellness",
    year: "2023",
    description:
      "A gentle daily-routine tracker that rewards consistency without guilt or noise.",
    tags: ["Mobile", "Research"],
    image: projectWellness,
    alt: "Tide Wellness app on a phone",
  },
  {
    title: "Studio Canvas",
    year: "2022",
    description: "A shared canvas for small teams to sketch, annotate, and decide together.",
    tags: ["SaaS", "Web"],
    image: projectCollab,
    alt: "Studio Canvas collaborative whiteboard on a monitor",
  },
];

const stats = [
  { value: "8+", label: "Years designing" },
  { value: "40", label: "Products shipped" },
  { value: "12", label: "Design awards" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* Nav */}
      <header className="mx-auto max-w-6xl px-6 lg:px-10">
        <nav className="flex items-center justify-between py-7">
          <a href="#" className="font-display text-2xl font-semibold tracking-tight">
            Nagaraj Bhat
          </a>
          <div className="hidden items-center gap-9 text-sm font-medium text-foreground/70 md:flex">
            <a href="#work" className="transition-colors hover:text-primary">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-primary"
          >
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-16 lg:px-10 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="fade-up-1 mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Product Designer · Available for work
            </p>
            <h1 className="fade-up-2 font-display text-[3.25rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Designing calm, considered interfaces for{" "}
              <span className="italic text-primary">humane</span> products.
            </h1>
            <p className="fade-up-3 mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm Nagaraj — a designer who believes software should feel quiet, honest, and a
              little bit warm. For eight years I've helped teams ship tools people actually enjoy
              using.
            </p>
            <div className="fade-up-3 mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-foreground"
              >
                View selected work
              </a>
              <a
                href="#about"
                className="rounded-full border border-foreground/20 px-7 py-3.5 font-medium transition-colors hover:border-foreground"
              >
                About me
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={portrait}
              alt="Portrait of Nagaraj Bhat in a sunlit studio"
              width={1024}
              height={1280}
              className="fade-up-3 aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-foreground/5"
            />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 lg:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Selected work
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight lg:text-5xl">
              Recent projects
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:inline-block"
          >
            All projects →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl bg-paper p-5 outline-1 -outline-offset-1 outline-foreground/5 transition-all hover:outline-primary/40"
            >
              <img
                src={project.image}
                alt={project.alt}
                width={1024}
                height={768}
                loading="lazy"
                className="mb-5 aspect-[4/3] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-foreground/5"
              />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-medium">{project.title}</h3>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <p className="mt-2 leading-relaxed text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                  {project.tags[0]}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {project.tags[1]}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <img
              src={aboutDesk}
              alt="Nagaraj's desk with sketchbooks and coffee in warm natural light"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-foreground/5"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              About
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight lg:text-5xl">
              Good design is the kind you forget you're using.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I've spent the last eight years working with early-stage teams and established
              studios alike, turning fuzzy ideas into products that feel inevitable. My work sits
              at the intersection of clarity, craft, and a healthy dose of warmth.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-medium">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-16 px-6 pb-20 lg:px-10">
        <div className="rounded-3xl bg-foreground px-8 py-14 text-center text-background lg:px-16 lg:py-20">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Let's talk
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight lg:text-6xl">
            Have a project in mind? I'd love to hear about it.
          </h2>
          <a
            href="mailto:hello@nagarajbhat.dev"
            className="mt-9 inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            hello@nagarajbhat.dev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 pb-12 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 sm:flex-row">
          <p className="font-display text-lg font-medium">Nagaraj Bhat</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-primary">
              Twitter
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Dribbble
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              LinkedIn
            </a>
          </div>
          <p className="text-sm text-muted-foreground/70">© 2026 · Made with care</p>
        </div>
      </footer>
    </div>
  );
}
