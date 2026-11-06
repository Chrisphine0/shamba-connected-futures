import { Link } from "@tanstack/react-router";
import { Mail, Globe, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { COMPANY, PRODUCTS, INDUSTRIES } from "@/lib/content";

const heading = "mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sage";
const item = "text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            A technology and financial innovation company building intelligent digital infrastructure that connects
            businesses, institutions and communities.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/80">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-sage" aria-hidden="true" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-ink-foreground">{COMPANY.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-sage" aria-hidden="true" />
              <a href="https://www.shambarecords.com" className="hover:text-ink-foreground">{COMPANY.website}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-sage" aria-hidden="true" />
              <span>Kenya</span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className={heading}>Company</h2>
          <ul className="space-y-2.5">
            <li><Link to="/about" className={item}>About Us</Link></li>
            <li><Link to="/technology" className={item}>Technology</Link></li>
            <li><Link to="/insights" className={item}>Insights</Link></li>
            <li><Link to="/contact" className={item}>Contact</Link></li>
            <li><Link to="/contact" className={item}>Partner With Us</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className={heading}>Solutions</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to="/solutions/$slug" params={{ slug: p.slug }} className={item}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h2 className={heading}>Industries</h2>
          <ul className="space-y-2.5">
            {INDUSTRIES.map((i) => (
              <li key={i.slug}>
                <Link to="/industries" hash={i.slug} className={item}>{i.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-ink-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Shamba Records. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-ink-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-ink-foreground">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
