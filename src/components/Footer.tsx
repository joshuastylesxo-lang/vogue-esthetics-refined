import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Vogue Esthetics" className="h-16 w-16 object-contain" />
            <div>
              <div className="font-display text-2xl text-shimmer">Vogue Esthetics</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-light/80">Skin · Hair · Laser Experts</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-cream/70 max-w-md leading-relaxed">
            Premium aesthetic care in Bahria Town, Rawalpindi. Where advanced
            science meets timeless beauty — delivered by certified professionals
            in a serene, world-class setting.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-500 hover:-translate-y-1"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="h-10 w-10 rounded-full border border-gold/40 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-500 hover:-translate-y-1"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold-light mb-5">Visit Us</h4>
          <ul className="space-y-4 text-sm text-cream/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /><span>Plaza 5 & 6, Corniche Road, Bahria Town Phase IV, Islamabad</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-gold mt-0.5 shrink-0" /><a href="tel:+923331116662" className="hover:text-gold transition-colors">0333 1116662</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 text-gold mt-0.5 shrink-0" />Open 24 hours</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold-light mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="text-cream/70 hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-cream/70 hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-cream/70 hover:text-gold transition-colors">Contact</Link></li>
            <li><Link to="/book" className="text-cream/70 hover:text-gold transition-colors">Book Appointment</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-[0.18em] uppercase text-cream/50">
          <div>© {new Date().getFullYear()} Vogue Esthetics. All rights reserved.</div>
          <div>Crafted with care · Rawalpindi · Islamabad</div>
        </div>
      </div>
    </footer>
  );
}
