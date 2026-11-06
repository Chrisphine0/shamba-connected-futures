import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { PRODUCTS, INDUSTRIES } from "@/lib/content";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/solutions", label: "Solutions", menu: "solutions" },
  { to: "/industries", label: "Industries", menu: "industries" },
  { to: "/technology", label: "Technology" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

const linkCls = "relative px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-ink";
const activeCls = "!text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background",
      )}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />
        <nav aria-label="Main" className="hidden items-center lg:flex">
          {NAV.map((item) =>
            "menu" in item ? (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className={cn(linkCls, "inline-flex items-center gap-1")}
                  activeProps={{ className: activeCls }}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border bg-popover p-3 shadow-soft">
                    {item.menu === "solutions" ? (
                      <div className="grid grid-cols-2 gap-1">
                        {PRODUCTS.map((p) => (
                          <Link
                            key={p.slug}
                            to="/solutions/$slug"
                            params={{ slug: p.slug }}
                            className="rounded-xl px-3 py-2.5 transition-colors hover:bg-ivory"
                          >
                            <div className="text-sm font-bold text-ink">{p.name}</div>
                            <div className="text-xs text-muted-foreground">{p.area}</div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-1">
                        {INDUSTRIES.map((i) => (
                          <Link
                            key={i.slug}
                            to="/industries"
                            hash={i.slug}
                            className="rounded-xl px-3 py-2.5 transition-colors hover:bg-ivory"
                          >
                            <div className="text-sm font-bold text-ink">{i.title}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                    <Link
                      to={item.to}
                      className="mt-2 flex items-center justify-between rounded-xl bg-ivory px-3 py-2.5 text-sm font-semibold text-primary"
                    >
                      View all {item.label.toLowerCase()} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={linkCls}
                activeProps={{ className: activeCls }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="brand" className="hidden h-10 px-5 sm:inline-flex">
            <Link to="/contact">Partner With Us</Link>
          </Button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto border-t bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-site flex flex-col py-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b py-4 text-lg font-bold text-ink"
                activeProps={{ className: "!text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="brand" size="xl" className="mt-6">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Partner With Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
