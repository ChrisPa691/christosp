import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Pill } from "@/components/Pill";

export default function Home() {
  const projects = [
    {
      title: "Flowboard (Kanban)",
      description: "Collaborative task boards with drag-and-drop lanes and real-time updates.",
      tags: ["Next.js", "TypeScript", "Prisma", "Postgres"],
      github: "https://github.com/ChrisPa691/flowboard",
      demo: "#", // replace with live URL when available
    },
    {
      title: "christosp (Portfolio)",
      description: "This portfolio—dark split-hero, projects grid, and contact CTA.",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      github: "https://github.com/ChrisPa691/christosp",
      demo: "#", // replace with live URL when deployed
    },
    {
      title: "Fundflow (Coming Soon)",
      description: "Lightweight finance tracker with category insights and exportable reports.",
      tags: ["Next.js", "TypeScript", "Supabase"],
      github: "https://github.com/ChrisPa691/fundflow",
      demo: "#", // coming soon placeholder
    },
  ];

  const history = [
    { year: "2026", title: "Portfolio refresh", detail: "Rebuilt christosp with Next.js and Tailwind v4." },
    { year: "2025", title: "Flowboard v1", detail: "Shipped kanban app with auth and real-time lanes." },
    { year: "2024", title: "CS studies", detail: "Advanced algorithms, databases, and distributed systems." },
    { year: "2023", title: "First production site", detail: "Delivered a responsive client site with modern UI." },
  ];

  return (
    <main>
      <div className="">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Portrait Card */}
            <div className="order-2 lg:order-2">
              <Card className="relative overflow-hidden w-full max-w-sm mx-auto">
                <div className="aspect-3/4 relative bg-linear-to-br from-(--surface-elevated) to-(--surface) rounded-lg flex items-center justify-center">
                  <div className="text-center text-(--text-muted)">
                    <svg className="w-16 h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <p className="text-xs">Portrait Placeholder</p>
                  </div>
                </div>
                
                {/* Stats/Highlights */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-(--text-primary)">3+</div>
                    <div className="text-sm text-(--text-muted)">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-(--text-primary)">2+</div>
                    <div className="text-sm text-(--text-muted)">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-(--text-primary)">CS</div>
                    <div className="text-sm text-(--text-muted)">Student</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  I&apos;m <span className="text-(--accent)">Christos</span>
                </h1>
                <p className="text-2xl lg:text-3xl font-semibold text-(--text-primary)">
                  Full-Stack Developer & CS Student
                </p>
                <p className="text-lg text-(--text-secondary) max-w-xl leading-relaxed">
                  I build modern web applications with clean code and intuitive user experiences. 
                  Focused on creating scalable solutions using the latest technologies.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button href="/projects" variant="primary">
                  View Projects
                </Button>
                <Button href="/contact" variant="secondary">
                  Get in touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <a 
                  href="https://github.com/ChrisPa691" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-(--text-secondary) hover:text-(--accent) transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/cpaparistodemou/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-(--text-secondary) hover:text-(--accent) transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 border-t border-(--border)">
          <div className="space-y-12">
            <SectionHeader
              title="What I Do"
              subtitle="Building polished experiences end-to-end with modern web tooling."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-(--surface-elevated) text-(--accent) flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5h16a1 1 0 0 1 .894 1.447l-4 8A1 1 0 0 1 16 15H8a1 1 0 0 1-.894-.553l-4-8A1 1 0 0 1 4 5Zm3.382 8h9.236L19.618 7H4.382l3 6ZM6 18h12v2H6v-2Z"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-(--text-primary)">Frontend Engineering</h3>
                  <p className="text-(--text-secondary)">Responsive, accessible interfaces with React, Next.js, and Tailwind.</p>
                </div>
              </Card>

              <Card className="h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-(--surface-elevated) text-(--accent) flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6a2 2 0 0 1 2-2h2v2H6v12h2v2H6a2 2 0 0 1-2-2V6Zm18 0a2 2 0 0 0-2-2h-2v2h2v12h-2v2h2a2 2 0 0 0 2-2V6ZM9 5h6v2H9V5Zm0 6h6v2H9v-2Zm0 6h6v2H9v-2Z"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-(--text-primary)">Backend & APIs</h3>
                  <p className="text-(--text-secondary)">Robust APIs, authentication, and data workflows using Node and TypeScript.</p>
                </div>
              </Card>

              <Card className="h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-(--surface-elevated) text-(--accent) flex items-center justify-center">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 4h10a2 2 0 0 1 2 2v2h-2V6H7v12h10v-2h2v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm6 5h6v2h-6v-2Zm0 4h6v2h-6v-2Zm-6-2h4v2H7v-2Z"/>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-(--text-primary)">DevOps & Delivery</h3>
                  <p className="text-(--text-secondary)">CI/CD pipelines, performance checks, and cloud deploys that keep shipping smooth.</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section className="py-20 border-t border-(--border)">
          <div className="space-y-12">
            <SectionHeader
              title="Featured Work"
              subtitle="Selected projects that blend thoughtful UX with solid engineering."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.title} className="h-full flex flex-col gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-(--text-primary)">{project.title}</h3>
                    <p className="text-(--text-secondary)">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                    <Button href={project.github} variant="secondary">GitHub</Button>
                    <Button href={project.demo} variant="primary">Live Demo</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* My History */}
        <section className="py-20 border-t border-(--border)">
          <div className="space-y-12">
            <SectionHeader
              title="My History"
              subtitle="A quick look at milestones and recent work."
            />

            <div className="space-y-4">
              {history.map((item) => (
                <Card key={item.year} className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-(--accent)">{item.year}</span>
                    <span className="text-lg font-semibold text-(--text-primary)">{item.title}</span>
                  </div>
                  <p className="text-(--text-secondary) md:text-right md:max-w-xl">{item.detail}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 border-t border-(--border)">
          <div className="space-y-12">
            <SectionHeader
              title="Let&apos;s build something"
              subtitle="Have an idea or need a hand? I&apos;m open to collaborations and freelance work."
            />

            <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 max-w-2xl">
                <h3 className="text-2xl font-semibold text-(--text-primary)">Ready when you are</h3>
                <p className="text-(--text-secondary)">
                  Tell me about your project, and I&apos;ll reply within 24 hours with next steps.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="mailto:christos@example.com" variant="primary">Email me</Button>
                <Button href="https://www.linkedin.com/in/cpaparistodemou/" variant="secondary">LinkedIn</Button>
                <Button href="https://github.com/ChrisPa691" variant="secondary">GitHub</Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
