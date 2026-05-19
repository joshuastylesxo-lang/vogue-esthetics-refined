import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Vogue Esthetics" className="h-14 w-14 object-contain transition-transform duration-700 group-hover:rotate-3 group-hover:scale-105" />
          <div className="leading-tight">
            <div className="font-display text-xl text-charcoal tracking-wide">Vogue Esthetics</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold-dark">Skin · Hair · Laser</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-sm tracking-[0.18em] uppercase text-charcoal/80 hover:text-gold-dark transition-colors"
              activeProps={{ className: "link-underline text-sm tracking-[0.18em] uppercase text-gold-dark" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+923331116662" className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-charcoal/70 hover:text-gold-dark transition-colors">
            <Phone className="h-3.5 w-3.5" /> 0333 1116662
          </a>
          <Link to="/book" className="btn-gold"><span>Book Now</span></Link>
        </div>

        <button className="md:hidden text-charcoal" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm tracking-[0.18em] uppercase text-charcoal/80">
                {n.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="btn-gold self-start"><span>Book Now</span></Link>
          </div>
        </div>
      )}
    </header>
  );
}
