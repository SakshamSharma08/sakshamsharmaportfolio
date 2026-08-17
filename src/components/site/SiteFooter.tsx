import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="hairline mt-24 px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 text-xs tracking-[0.2em] uppercase text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Saksham Sharma</span>
        <span>Jaipur, India — Open to internships</span>
        <Link to="/contact" className="text-primary hover:opacity-80">
          Say hello →
        </Link>
      </div>
    </footer>
  );
}