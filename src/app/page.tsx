"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Pill } from "@/components/Pill";

export default function Home() {
  const history = [
    { year: "2024", title: "CS studies", detail: "Advanced algorithms, databases, and distributed systems." },
    { year: "2026", title: "Portfolio refresh", detail: "Rebuilt christosp with Next.js and Tailwind v4." },
    { year: "2025", title: "Flowboard v1", detail: "Shipped kanban app with auth and real-time lanes." },
    { year: "2023", title: "First production site", detail: "Delivered a responsive client site with modern UI." },
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.12),transparent_32%)]" />

      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-32">
          <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center px-8 lg:px-0">
            {/* Portrait / Visual */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="order-2 lg:order-2"
            >
              <Card className="relative overflow-hidden w-full max-w-md mx-auto bg-(--surface-elevated)">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.22),transparent_35%)]" />
                <div className="relative aspect-3/4 rounded-lg border border-(--border) flex items-center justify-center bg-[linear-gradient(145deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
                  <div className="text-center text-(--text-muted)">
                    <svg className="w-16 h-16 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <p className="text-xs tracking-wide">Portrait coming soon</p>
                  </div>
                </div>

                <div className="relative mt-6 grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: "Projects", value: "12+" },
                    { label: "Years", value: "2+" },
                    { label: "Stack", value: "TypeScript" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-(--surface) border border-(--border) py-3">
                      <div className="text-xl font-semibold text-(--text-primary)">{stat.value}</div>
                      <div className="text-xs text-(--text-muted)">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-1 lg:order-1 space-y-10"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-(--border) bg-(--surface) px-6 py-3 text-(--text-secondary) text-sm shadow-sm shadow-blue-500/10">
                <span className="h-2 w-2 rounded-full bg-(--accent) animate-pulse" />
                Available for freelance & collaborations
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                  I build confident web experiences that feel fast, clear, and intentional.
                </h1>
                <p className="text-lg text-(--text-secondary) max-w-2xl leading-relaxed">
                  Full-stack developer and CS student focused on product velocity and polish. I ship React/Next.js apps,
                  design systems, and thoughtful UX with solid engineering practices.
                </p>
              </div>

              <motion.div
                className="flex flex-wrap gap-6"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              >
                {[{ href: "/projects", label: "View projects", variant: "primary" }, { href: "/contact", label: "Get in touch", variant: "secondary" }].map((cta) => (
                  <motion.div key={cta.href} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                    <Button href={cta.href} variant={cta.variant as "primary" | "secondary"}>
                      {cta.label}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-4 pt-4 text-sm text-(--text-muted)">
                {["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Prisma", "Postgres"].map((tool) => (
                  <Pill key={tool} className="bg-(--surface-elevated) text-(--text-secondary)">{tool}</Pill>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* My History */}
        <section className="py-32 border-t border-(--border)">
          <div className="space-y-16 px-8 lg:px-0 max-w-6xl mx-auto">
            <SectionHeader
              title="My History"
              subtitle="A quick look at milestones and recent work."
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {history.map((item) => (
                <motion.div
                  key={item.year}
                  variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Card className="h-full flex flex-col gap-5 shadow-lg shadow-blue-500/10 hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-4">
                      <Pill className="bg-(--surface-elevated) text-(--accent) border border-(--accent)/50">{item.year}</Pill>
                      <h3 className="text-lg font-semibold text-(--text-primary)">{item.title}</h3>
                    </div>
                    <p className="text-(--text-secondary) leading-relaxed">{item.detail}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>
    </main>
  );
}
