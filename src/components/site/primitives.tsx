import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  inverted = false,
  className,
}: {
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow", inverted && "!text-sage")}>{label}</p>
      <h2 className={cn("mt-4 text-3xl font-extrabold leading-[1.1] md:text-5xl", inverted ? "text-ink-foreground" : "text-ink")}>
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-lg leading-relaxed", inverted ? "text-ink-foreground/70" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({ label, title, intro, children }: { label: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-sage" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[24rem] w-[24rem] rounded-full border border-dashed border-sage" aria-hidden="true" />
      <div className="container-site relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{label}</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-ink md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function TextLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link to={to} className={cn("group inline-flex items-center gap-1.5 text-sm font-bold text-primary", className)}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function CtaBand({
  title = "Let's build something meaningful together.",
  text = "Whether you are a financial institution, business, investor, organisation or technology partner, we would love to explore how we can create value together.",
}: { title?: string; text?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-site relative overflow-hidden py-20 md:py-28">
        <svg className="pointer-events-none absolute -right-24 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 opacity-20" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="42" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </svg>
        <Reveal className="relative max-w-3xl">
          <h2 className="text-4xl font-extrabold leading-[1.05] md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">{text}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="onBrand" size="xl">
              <Link to="/contact">Start a Conversation <ArrowRight /></Link>
            </Button>
            <Button asChild variant="onBrandOutline" size="xl">
              <Link to="/solutions">Explore Our Solutions</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
