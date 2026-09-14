import Link from "next/link";
import {
  Mail, Github, Linkedin, ArrowRight, ArrowUpRight,
  MapPin, Code2, Globe, ExternalLink, Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects, experience, sites, skills } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-sm font-bold tracking-tight">
            bara<span className="text-muted-foreground">.dev</span>
          </Link>
          <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#work" className="transition hover:text-foreground">Work</a>
            <a href="#experience" className="transition hover:text-foreground">Experience</a>
            <a href="#sites" className="transition hover:text-foreground">Sites</a>
            <a href="#skills" className="transition hover:text-foreground">Skills</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </div>
          <Button size="sm" variant="outline" asChild>
            <a href="mailto:baraahmad232@gmail.com"><Mail /> Contact</a>
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="pointer-events-none absolute inset-0 grid-bg" />
        <div className="pointer-events-none absolute inset-0 glow-blue" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Badge variant="outline" className="mb-6 font-mono">
            <span className="relative mr-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to Backend · Data · Applied AI roles
          </Badge>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Building <span className="text-gradient">intelligent, data-intensive</span> systems from experimentation to production.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            I'm Bara — a Brooklyn-based engineer moving between AI research and production software.
            Backend architecture, data pipelines, multi-tenant SaaS, distributed workflows, agentic automation, and autonomous-vehicle perception research.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href="mailto:baraahmad232@gmail.com"><Mail /> Get in touch <ArrowRight /></a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/bara080" target="_blank" rel="noopener"><Github /> GitHub</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="https://www.linkedin.com/in/abaramoh/" target="_blank" rel="noopener">
                <Linkedin /> LinkedIn <ArrowUpRight />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5"><MapPin className="size-3.5" /> Brooklyn, NY</div>
            <div className="h-4 w-px bg-border" />
            <div>Remote-first · Open to NYC hybrid</div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Code2 className="size-3.5" /> Featured Work
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Systems I've built.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Real projects across SaaS, mobile, agentic automation, and autonomous-vehicle research — from architecture through production.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <Card key={p.name} className="group p-6 transition-all hover:border-border/80 hover:bg-secondary/20">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-secondary/40">
                      <Icon className="size-5 text-foreground/80" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight">{p.name}</h3>
                      <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">{p.role}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="font-mono">{s}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener"
                         className="group/link inline-flex items-center gap-1 text-foreground/80 transition hover:text-foreground">
                        {l.label}
                        <ArrowUpRight className="size-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-border/60 bg-secondary/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Experience</div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Where I've shipped.</h2>
          </div>

          <div className="relative ml-3 space-y-8 border-l border-border pl-8">
            {experience.map((e, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[38px] top-1.5 size-3 rounded-full border-2 ${
                  e.current
                    ? "border-emerald-500 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    : "border-border bg-card"
                }`} />
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-base font-semibold">
                    {e.title} <span className="font-normal text-muted-foreground">·</span>{" "}
                    <span className="text-foreground/80">{e.organization}</span>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">{e.date}</div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITES */}
      <section id="sites" className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Globe className="size-3.5" /> Production Portfolio
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Live properties I own and operate.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Six domains under active production — DNS, email routing, deployments, and ongoing operations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {sites.map((s) => (
              <a key={s} href={`https://${s}`} target="_blank" rel="noopener" className="group">
                <Card className="flex items-center justify-between p-5 transition-all hover:border-border/80 hover:bg-secondary/20">
                  <div>
                    <p className="font-mono text-sm font-medium">{s}</p>
                    <div className="mt-1 flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                      <Circle className="size-2 fill-emerald-500 text-emerald-500" /> Live
                    </div>
                  </div>
                  <ExternalLink className="size-4 text-muted-foreground transition group-hover:text-foreground" />
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-border/60 bg-secondary/10 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <div className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">Toolkit</div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Day-to-day stack.</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Deep in Python, Node, and TypeScript. Comfortable across the AI/ML stack, distributed workflows, and cloud infrastructure.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="size-4 text-muted-foreground" />
                    <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/80">{s.title}</h4>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {s.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Card className="border-border/60 bg-gradient-to-br from-secondary/40 to-background p-10 text-center md:p-14">
            <div className="mb-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Let's build something
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Currently open to Backend, Data, and Applied AI roles.
            </h2>
            <p className="mb-8 text-muted-foreground">
              Remote-first · Open to NYC / hybrid · Also Austin, Bay Area, Boston, Denver.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="lg" asChild>
                <a href="mailto:baraahmad232@gmail.com"><Mail /> baraahmad232@gmail.com</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/abaramoh/" target="_blank" rel="noopener"><Linkedin /> LinkedIn</a>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <a href="https://github.com/bara080" target="_blank" rel="noopener"><Github /> GitHub</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bara Ahmad · Next.js · shadcn/ui · Lucide ·{" "}
        <Link href="/classic" className="underline underline-offset-2 hover:text-foreground">Classic variant</Link>
      </footer>
    </main>
  );
}
