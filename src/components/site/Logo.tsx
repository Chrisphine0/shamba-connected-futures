import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)} aria-label="Shamba Records — home">
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-xl",
          inverted ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 21V11" />
          <path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z" />
          <path d="M12 14c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5Z" />
        </svg>
      </span>
      <span className={cn("text-[1.05rem] font-extrabold leading-none tracking-tight", inverted ? "text-primary-foreground" : "text-ink")}>
        Shamba<span className={inverted ? "text-sage" : "text-primary"}> Records</span>
      </span>
    </Link>
  );
}
