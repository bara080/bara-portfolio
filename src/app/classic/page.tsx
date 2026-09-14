import Link from "next/link";
import {
  Mail, Github, Linkedin, MapPin, Circle, ArrowUpRight,
} from "lucide-react";
import { projects, experience, sites, skills } from "@/lib/portfolio-data";

/**
 * CLASSIC VARIANT — warmer navy palette, no shadcn primitives.
 * Same data, different visual system. Kept as a fallback in case you
 * want a less "shadcn-canonical" look.
 */
export default function Classic() {
  return (
    <main className="relative min-h-screen bg-[#0a0e1a] text-[#e6ebf5]">
      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#232a3d] bg-[#0a0e1a]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-8">
          <Link href="/classic" className="text-sm font-bold tracking-tight">
            bara<span className="text-[#7cc4ff]">.dev</span>
          </Link>
          <div className="hidden gap-7 text-sm text-[#8992a8] md:flex">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#sites" className="hover:text-white">Sites</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden pt-40 pb-24">
        <div className="pointer-events-none absolute inset-0"
             style={{
               background:
                 "radial-gradient(1000px 500px at 20% -10%, rgba(124,196,255,0.10), transparent 60%), radial-gradient(800px 400px at 80% 10%, rgba(167,139,250,0.08), transparent 60%)",
             }} />
        <div className="relative mx-auto max-w-[1120px] px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2f3852] px-3.5 py-1.5 font-mono text-[13px] text-[#8992a8]">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981]" />
            Open to Backend · Data · Applied AI roles · Brooklyn, NY
          </div>
          <h1 className="text-[clamp(38px,6vw,68px)] font-extrabold leading-[1.05] tracking-tight max-w-4xl">
            Building{" "}
            <span className="bg-gradient-to-br from-[#7cc4ff] to-[#a78bfa] bg-clip-text text-transparent">
              intelligent, data-intensive
            </span>{" "}
            systems from experimentation to production.
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-[#8992a8]">
            I'm Bara — a Brooklyn-based engineer moving between AI research and production software.
            Backend architecture, data pipelines, multi-tenant SaaS, distributed workflows, agentic automation, and autonomous-vehicle perception research.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="mailto:baraahmad232@gmail.com"
               className="inline-flex items-center gap-2 rounded-lg bg-[#7cc4ff] px-5 py-3 text-sm font-medium text-[#0a0e1a] transition hover:bg-[#a5d5ff]">
              <Mail className="size-4" /> Get in touch
            </a>
            <a href="https://github.com/bara080" target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 rounded-lg border border-[#2f3852] px-5 py-3 text-sm font-medium transition hover:border-[#7cc4ff]">
              <Github className="size-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/abaramoh/" target="_blank" rel="noopener"
               className="inline-flex items-center gap-2 rounded-lg border border-[#2f3852] px-5 py-3 text-sm font-medium transition hover:border-[#7cc4ff]">
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-xs text-[#5c6478]">
            <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" /> Brooklyn, NY</span>
            <span className="h-4 w-px bg-[#232a3d]" />
            <span>Remote-first · Open to NYC hybrid</span>
          </div>
        </div>
      </header>

      {/* WORK */}
      <section id="work" className="py-20">
        <div className="mx-auto max-w-[1120px] px-8">
          <div className="mb-14">
            <div className="mb-3 font-mono text-xs uppercase tracking-[.15em] text-[#7cc4ff]">Featured Work</div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight">Systems I've built.</h2>
            <p className="mt-3 max-w-[680px] text-[#8992a8]">
              Real projects across SaaS, mobile, agentic automation, and autonomous-vehicle research — from architecture through production.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name}
                     className="group relative overflow-hidden rounded-2xl border border-[#232a3d] bg-[#141a29] p-8 transition hover:-translate-y-0.5 hover:border-[#2f3852] hover:bg-[#1a2136]">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#7cc4ff] to-[#a78bfa] opacity-0 transition group-hover:opacity-100" />
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-[#2f3852] bg-[#0f1420]">
                      <Icon className="size-5 text-[#7cc4ff]" />
                    </div>
                    <div>
                      <h3 className="text-[22px] font-bold tracking-tight">{p.name}</h3>
                      <div className="mt-0.5 font-mono text-[11px] uppercase tracking-[.1em] text-[#7cc4ff]">{p.role}</div>
                    </div>
                  </div>
                  <p className="mb-5 text-[15px] leading-relaxed text-[#8992a8]">{p.description}</p>
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md border border-[#232a3d] bg-[#0f1420] px-2.5 py-1 font-mono text-[11px] text-[#8992a8]">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 font-mono text-[13px]">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener"
                         className="inline-flex items-center gap-1 border-b border-transparent text-[#7cc4ff] transition hover:border-[#7cc4ff]">
                        → {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-[#232a3d] bg-[#0f1420] py-20">
        <div className="mx-auto max-w-[1120px] px-8">
          <div className="mb-14">
            <div className="mb-3 font-mono text-xs uppercase tracking-[.15em] text-[#7cc4ff]">Experience</div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight">Where I've shipped.</h2>
          </div>
          <div className="ml-2 border-l border-[#232a3d] pl-8">
            {experience.map((e, i) => (
              <div key={i} className={`relative py-6 ${i < experience.length - 1 ? "border-b border-[#232a3d]" : ""}`}>
                <div className={`absolute -left-[40px] top-8 size-2.5 rounded-full border-2 ${
                  e.current ? "border-emerald-500 bg-emerald-500 shadow-[0_0_12px_#10b981]" : "border-[#2f3852] bg-[#141a29]"
                }`} />
                <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-[17px] font-semibold">
                    {e.title} <span className="text-[#5c6478]">·</span> <span className="text-[#7cc4ff]">{e.organization}</span>
                  </div>
                  <div className="font-mono text-xs text-[#5c6478]">{e.date}</div>
                </div>
                <p className="text-[14px] leading-relaxed text-[#8992a8]">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SITES */}
      <section id="sites" className="py-20">
        <div className="mx-auto max-w-[1120px] px-8">
          <div className="mb-14">
            <div className="mb-3 font-mono text-xs uppercase tracking-[.15em] text-[#7cc4ff]">Production Portfolio</div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight">Live properties I own and operate.</h2>
            <p className="mt-3 max-w-[680px] text-[#8992a8]">
              Six domains under active production — DNS, email routing, deployments, and ongoing operations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {sites.map((s) => (
              <a key={s} href={`https://${s}`} target="_blank" rel="noopener"
                 className="group flex items-center justify-between rounded-xl border border-[#232a3d] bg-[#141a29] p-5 font-mono transition hover:-translate-y-0.5 hover:border-[#7cc4ff]">
                <div>
                  <div className="text-[15px] font-medium">{s}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <Circle className="size-2 fill-emerald-500 text-emerald-500" /> Live
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-[#8992a8] transition group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-[#232a3d] bg-[#0f1420] py-20">
        <div className="mx-auto max-w-[1120px] px-8">
          <div className="mb-14">
            <div className="mb-3 font-mono text-xs uppercase tracking-[.15em] text-[#7cc4ff]">Toolkit</div>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight">Day-to-day stack.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {skills.map((sk) => {
              const Icon = sk.icon;
              return (
                <div key={sk.title}>
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="size-4 text-[#7cc4ff]" />
                    <h4 className="font-mono text-[11px] uppercase tracking-[.15em] text-[#7cc4ff]">{sk.title}</h4>
                  </div>
                  <ul className="space-y-1.5 text-sm text-[#8992a8]">
                    {sk.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-[900px] px-8">
          <div className="rounded-2xl border border-[#2f3852] bg-gradient-to-br from-[#141a29] to-[#1a2136] p-14 text-center">
            <div className="mb-3 font-mono text-xs uppercase tracking-[.15em] text-[#7cc4ff]">Let's build something</div>
            <h2 className="mb-3 text-[clamp(28px,3.5vw,40px)] font-bold tracking-tight">
              Currently open to Backend, Data, and Applied AI roles.
            </h2>
            <p className="mb-8 text-[#8992a8]">Remote-first · Open to NYC / hybrid · Also Austin, Bay Area, Boston, Denver.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:baraahmad232@gmail.com"
                 className="inline-flex items-center gap-2 rounded-lg bg-[#7cc4ff] px-5 py-3 text-sm font-medium text-[#0a0e1a] hover:bg-[#a5d5ff]">
                <Mail className="size-4" /> baraahmad232@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/abaramoh/" target="_blank" rel="noopener"
                 className="inline-flex items-center gap-2 rounded-lg border border-[#2f3852] px-5 py-3 text-sm font-medium hover:border-[#7cc4ff]">
                <Linkedin className="size-4" /> LinkedIn
              </a>
              <a href="https://github.com/bara080" target="_blank" rel="noopener"
                 className="inline-flex items-center gap-2 rounded-lg border border-[#2f3852] px-5 py-3 text-sm font-medium hover:border-[#7cc4ff]">
                <Github className="size-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#232a3d] py-8 text-center font-mono text-xs text-[#5c6478]">
        © {new Date().getFullYear()} Bara Ahmad · Classic variant ·{" "}
        <Link href="/" className="underline underline-offset-2 hover:text-white">shadcn variant</Link>
      </footer>
    </main>
  );
}
