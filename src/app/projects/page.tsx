"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Pill } from "@/components/Pill";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/cn";

type Category = "Frontend" | "Backend" | "DevOps";
type Filter = "All" | Category;

type Project = {
  title: string;
  description: string;
  categories: Category[];
  tags: string[];
  github: string;
  demo?: string;
  status?: "coming-soon";
};

const filters: Filter[] = ["All", "Frontend", "Backend", "DevOps"];

const projects: Project[] = [
  {
    title: "Flowboard (Kanban)",
    description:
      "Collaborative task boards with drag-and-drop lanes, role-based access, and live updates.",
    categories: ["Frontend", "Backend", "DevOps"],
    tags: ["Next.js", "TypeScript", "Prisma", "Postgres", "Realtime"],
    github: "https://github.com/ChrisPa691/flowboard",
    status: "coming-soon",
  },
  {
    title: "christosp (Portfolio)",
    description: "The site you are viewing: dark split-hero, services, projects, and contact CTA.",
    categories: ["Frontend"],
    tags: ["Next.js", "Tailwind", "Design system", "Framer Motion"],
    github: "https://github.com/ChrisPa691/christosp",
    demo: "/",
  },
  {
    title: "Fundflow (Finance Tracker)",
    description: "Lightweight expense tracking with category insights and exportable reports.",
    categories: ["Backend", "Frontend"],
    tags: ["Next.js", "TypeScript", "Supabase"],
    github: "https://github.com/ChrisPa691/fundflow",
    status: "coming-soon",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <main>
      <div className="py-32 space-y-16 px-8 lg:px-0 max-w-6xl mx-auto">
        <SectionHeader
          title="Projects"
          subtitle="Use the filters to jump to what you care about."
        />

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-3 text-sm rounded-full border transition-colors shadow-sm",
                  isActive
                    ? "bg-(--surface-elevated) border-(--accent) text-(--text-primary) shadow-blue-500/10"
                    : "border-(--border) text-(--text-secondary) hover:border-(--accent) hover:text-(--text-primary)"
                )}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {visibleProjects.map((project) => {
            const showDemoButton = Boolean(project.demo);
            return (
              <motion.div
                key={project.title}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <Card className="h-full flex flex-col gap-5 shadow-lg shadow-blue-500/10 hover:-translate-y-1 transition-transform">
                  <div className="flex flex-wrap gap-3">
                    {project.categories.map((category) => (
                      <Pill
                        key={`${project.title}-${category}`}
                        className="bg-(--surface-elevated) text-(--text-secondary)"
                      >
                        {category}
                      </Pill>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-(--text-primary)">{project.title}</h3>
                    <p className="text-(--text-secondary)">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <Pill key={`${project.title}-${tag}`}>{tag}</Pill>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-3 mt-auto">
                    <Button href={project.github} variant="secondary">
                      GitHub
                    </Button>
                    {showDemoButton ? (
                      <Button href={project.demo} variant="primary">
                        Live Demo
                      </Button>
                    ) : (
                      <Pill className="bg-(--surface-elevated) text-(--text-secondary)">
                        Coming soon
                      </Pill>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
