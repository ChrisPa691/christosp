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
          <Card className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-(--text-primary)">Let&apos;s talk</h3>
              <p className="text-(--text-secondary)">
                Prefer email? Use the form or click below to open your mail client.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-sm text-(--text-muted)">Email</div>
                <a
                  className="text-(--text-primary) hover:text-(--accent) transition-colors"
                  href="mailto:christos@example.com"
                >
                  christos@example.com
                </a>
              </div>

              <div>
                <div className="text-sm text-(--text-muted)">Location</div>
                <div className="text-(--text-secondary)">Remote • EET</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ChrisPa691"
                className="text-(--text-secondary) hover:text-(--accent) transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/cpaparistodemou/"
                className="text-(--text-secondary) hover:text-(--accent) transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
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

              <Button type="submit" variant="primary" className={cn(isDisabled && "opacity-70 cursor-not-allowed")}> 
                {status === "loading" ? "Sending..." : "Send message"}
              </Button>
            </form>
          </Card>
        </div>

        <div className="pt-12 space-y-8">
          <SectionHeader
            title="Let&apos;s build something"
            subtitle="Have an idea or need a hand? I&apos;m open to collaborations and freelance work."
          />

        </div>
      </div>
    </main>
  );
}
