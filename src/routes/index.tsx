import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Brain,
  ChevronDown,
  Eye,
  EyeOff,
  Globe,
  Heart,
  Lock,
  Mail,
  ShieldCheck,
  Target,
  Users,
  UserPlus,
} from "lucide-react";

import mascot from "@/assets/mascot.png";
import logoMark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RafiqCare Workplace — Sign in to your organization" },
      {
        name: "description",
        content:
          "RafiqCare Workplace helps organizations understand, support, and improve the mental well-being of their teams. Sign in or set up your organization.",
      },
      { property: "og:title", content: "RafiqCare Workplace — Stronger minds. Better workplaces." },
      {
        property: "og:description",
        content:
          "Science-backed assessments, confidential data, and actionable insights for healthier teams.",
      },
    ],
  }),
  component: Index,
});

const featureChips = [
  {
    icon: ShieldCheck,
    title: "Confidential\n& Secure",
    body: "Your data is encrypted and always protected.",
    className: "left-[2%] top-[6%] w-[16rem]",
  },
  {
    icon: Brain,
    title: "Science-Backed\nAssessments",
    body: "Validated tools to measure what truly matters.",
    className: "right-[1%] top-[16%] w-[15rem]",
  },
  {
    icon: BarChart3,
    title: "Actionable\nInsights",
    body: "Turn data into meaningful action for your team.",
    className: "right-[4%] top-[46%] w-[15rem]",
  },
];

const valueProps = [
  {
    icon: Heart,
    title: "Employee Well-being\nat the Core",
    body: "Understand and support your team better.",
  },
  {
    icon: Target,
    title: "Data-Driven\nDecisions",
    body: "Make informed decisions that drive real impact.",
  },
  {
    icon: Users,
    title: "Build a Healthier\nWorkplace",
    body: "Foster a culture of care, trust, and resilience.",
  },
  {
    icon: ShieldCheck,
    title: "Safe. Private.\nTrusted.",
    body: "We follow the highest security standards.",
  },
];

function Index() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen px-6 py-7 lg:px-12 lg:py-9">
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoMark}
              alt="RafiqCare mascot logo"
              width={816}
              height={816}
              className="h-14 w-14 object-contain"
            />
            <span className="leading-none">
              <span className="block font-display text-[2.1rem] font-semibold tracking-tight text-foreground">
                RafiqCare
              </span>
              <span className="mt-1 block text-sm font-medium text-muted-foreground">
                Workplace
              </span>
            </span>
          </a>

          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex items-center gap-2 text-[0.95rem] font-medium text-secondary-foreground transition-colors hover:text-primary"
            >
              <Globe className="h-5 w-5 text-primary" strokeWidth={1.6} />
              English
              <ChevronDown className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button
              type="button"
              className="flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[0.95rem] font-semibold text-primary-foreground shadow-btn transition-colors hover:bg-primary-deep"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </header>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          {/* Left column */}
          <section>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-accent/70 px-5 py-2.5 text-[0.95rem] font-semibold text-secondary-foreground">
              <Heart className="h-4.5 w-4.5 text-primary" strokeWidth={1.8} />
              A healthier workplace starts with you
            </span>

            <h1 className="mt-7 font-display text-[3.6rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-[4.2rem]">
              Stronger minds.
              <br />
              Better workplaces.
              <br />
              <span className="text-primary">Stronger together.</span>
            </h1>

            <p className="mt-7 max-w-[34rem] text-[1.12rem] leading-relaxed text-secondary-foreground">
              RafiqCare Workplace helps organizations understand, support, and improve the mental
              well-being of their teams.
            </p>

            {/* Sign-in card */}
            <div className="mt-9 max-w-[30rem] rounded-3xl bg-card p-9 shadow-card">
              <h2 className="font-display text-[1.6rem] font-semibold text-foreground">
                Welcome back
              </h2>
              <p className="mt-1.5 text-[0.95rem] text-muted-foreground">
                Sign in to continue to your account
              </p>

              <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Work email"
                    className="h-14 w-full rounded-xl border border-input bg-muted/40 px-5 pr-12 text-[0.98rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                  />
                  <Mail
                    className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                    strokeWidth={1.6}
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="h-14 w-full rounded-xl border border-input bg-muted/40 px-5 pr-20 text-[0.98rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                  />
                  <Lock
                    className="pointer-events-none absolute right-12 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground"
                    strokeWidth={1.6}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" strokeWidth={1.6} />
                    ) : (
                      <Eye className="h-5 w-5" strokeWidth={1.6} />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2.5 text-[0.92rem] text-secondary-foreground">
                    <input
                      type="checkbox"
                      className="h-5 w-5 appearance-none rounded-md border border-input bg-card checked:border-primary checked:bg-primary"
                    />
                    Remember me
                  </label>
                  <a
                    href="#forgot"
                    className="text-[0.92rem] text-secondary-foreground transition-colors hover:text-primary"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="relative flex h-14 w-full items-center justify-center rounded-xl bg-primary text-[1.05rem] font-semibold text-primary-foreground shadow-btn transition-colors hover:bg-primary-deep"
                >
                  Sign in
                  <span className="absolute right-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20">
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </button>
              </form>

              <div className="my-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-border" />
                <span className="text-[0.9rem] text-muted-foreground">or</span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-card text-[0.98rem] font-medium text-secondary-foreground transition-colors hover:bg-muted"
              >
                <UserPlus className="h-5 w-5 text-primary" strokeWidth={1.6} />
                Set up your organization
              </button>

              <a
                href="#learn-more"
                className="mt-5 flex items-center justify-center gap-2 text-[0.92rem] text-secondary-foreground transition-colors hover:text-primary"
              >
                Learn more about RafiqCare Workplace
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </a>
            </div>
          </section>

          {/* Right column */}
          <section className="relative">
            <div className="relative min-h-[36rem]">
              <img
                src={mascot}
                alt="RafiqCare mascot holding a warm cup of coffee"
                width={1200}
                height={1200}
                className="mx-auto w-[80%] max-w-[34rem] object-contain drop-shadow-[0_30px_60px_oklch(0.5_0.03_155_/_0.18)]"
              />

              {featureChips.map(({ icon: Icon, title, body, className }) => (
                <article
                  key={title}
                  className={`glass-card absolute hidden rounded-2xl p-5 lg:block ${className}`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-7 w-7 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <h3 className="whitespace-pre-line text-[1.02rem] font-bold leading-snug text-foreground">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                        {body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Value props band */}
            <div className="mt-2 grid gap-6 rounded-[2rem] bg-primary px-8 py-8 text-primary-foreground sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {valueProps.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className={`lg:px-6 ${i > 0 ? "lg:border-l lg:border-primary-foreground/25" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-8 w-8 shrink-0" strokeWidth={1.4} />
                    <h3 className="whitespace-pre-line text-[1rem] font-semibold leading-snug">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-4 whitespace-pre-line text-[0.86rem] leading-relaxed text-primary-foreground/80">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-10 flex flex-col gap-8 border-t border-border/70 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Lock className="h-5 w-5 text-primary" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block text-[0.95rem] font-semibold text-foreground">
                  Your privacy is our priority.
                </span>
                <span className="block text-[0.9rem] text-muted-foreground">
                  We never share your data.
                </span>
              </span>
            </div>
            <span className="hidden h-12 w-px bg-border sm:block" />
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block text-[0.95rem] font-semibold text-foreground">
                  Secure &amp; Compliant
                </span>
                <span className="block text-[0.9rem] text-muted-foreground">
                  Meet global security and privacy standards.
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <span className="text-center">
              <span className="block text-[0.95rem] text-secondary-foreground">
                Questions before you sign up?
              </span>
              <span className="block text-[0.9rem] text-muted-foreground">We're here to help.</span>
            </span>
            <a
              href="mailto:support@rafiqcare.com"
              className="flex items-center gap-3 text-[1.05rem] font-medium text-primary-deep"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Mail className="h-5 w-5 text-primary" strokeWidth={1.6} />
              </span>
              support@rafiqcare.com
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
