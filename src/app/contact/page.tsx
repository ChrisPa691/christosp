"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const isDisabled = useMemo(() => status === "loading", [status]);

  const handleChange = (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill out all fields.";
    }

    const emailPattern = /.+@.+\..+/;
    if (!emailPattern.test(form.email.trim())) {
      return "Please enter a valid email.";
    }

    if (form.message.trim().length < 10) {
      return "Message should be at least 10 characters.";
    }

    return "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({} as { error?: string }));
        throw new Error(result.error || "Failed to send. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email me directly."
      );
    }
  };

  return (
    <main>
      <div className="py-20 space-y-12">
        <SectionHeader
          title="Contact"
          subtitle="Reach out about collaborations, freelance work, or questions. I usually reply within a day."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-(--accent) to-transparent" />

            <div className="space-y-2 pt-1">
              <h3 className="text-2xl font-semibold text-(--text-primary)">Let&apos;s talk</h3>
              <p className="text-sm text-(--text-secondary)">
                Prefer email? Use the form or reach out directly — I usually reply within a day.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:christos@example.com"
                className="flex items-center gap-3 group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface-elevated) border border-(--border) text-(--text-muted) group-hover:border-(--accent)/50 group-hover:text-(--accent) transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-(--text-muted) mb-0.5">Email</div>
                  <div className="text-sm font-medium text-(--text-primary) group-hover:text-(--accent) transition-colors">christos@example.com</div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-(--surface-elevated) border border-(--border) text-(--text-muted)">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                <div>
                  <div className="text-xs text-(--text-muted) mb-0.5">Location</div>
                  <div className="text-sm font-medium text-(--text-secondary)">Remote · EET</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2 border-t border-(--border)">
              {[
                { href: "https://github.com/ChrisPa691", label: "GitHub" },
                { href: "https://www.linkedin.com/in/cpaparistodemou/", label: "LinkedIn" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-(--text-secondary) hover:text-(--accent) transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </Card>

          <Card className="space-y-4">
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="space-y-2">
                <label className="text-sm text-(--text-secondary)" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full rounded-lg border border-(--border) bg-(--surface-elevated) px-4 py-3 text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--focus-ring)"
                  placeholder="Your name"
                  disabled={isDisabled}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-(--text-secondary)" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-lg border border-(--border) bg-(--surface-elevated) px-4 py-3 text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--focus-ring)"
                  placeholder="you@example.com"
                  disabled={isDisabled}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-(--text-secondary)" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  className="w-full rounded-lg border border-(--border) bg-(--surface-elevated) px-4 py-3 text-(--text-primary) placeholder-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--focus-ring)"
                  placeholder="What would you like to build?"
                  disabled={isDisabled}
                  required
                />
              </div>

              {error && <p className="text-sm text-(--warning)">{error}</p>}
              {status === "success" && (
                <p className="text-sm text-(--success)">Thanks! Your message was sent. I will reply shortly.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-(--error)">{error || "Could not send message. Please email me directly."}</p>
              )}

              <Button type="submit" variant="primary" className={cn("w-full sm:w-auto", isDisabled && "opacity-70 cursor-not-allowed")}>
                {status === "loading" ? "Sending…" : "Send message"}
              </Button>
            </form>
          </Card>
        </div>

      </div>
    </main>
  );
}
