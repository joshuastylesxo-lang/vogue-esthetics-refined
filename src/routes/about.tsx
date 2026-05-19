import { createFileRoute, Link } from "@tanstack/react-router";
import interior from "@/assets/clinic-interior.png";
import entrance from "@/assets/clinic-entrance.png";
import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vogue Esthetics | Bahria Town's Premier Aesthetic Clinic" },
      { name: "description", content: "Discover the story behind Vogue Esthetics — Bahria Town's trusted name in skin, hair and laser care for over a decade." },
      { property: "og:title", content: "About Vogue Esthetics" },
      { property: "og:description", content: "Where advanced science meets timeless beauty." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, t: "Expertise", d: "A decade of clinical experience and continuous training in the latest aesthetic medicine." },
  { icon: ShieldCheck, t: "Safety", d: "Every device is FDA-approved, every product medical-grade, every protocol evidence-based." },
  { icon: Heart, t: "Hospitality", d: "We treat clients the way we'd want our family treated — with warmth, discretion and patience." },
  { icon: Sparkles, t: "Results", d: "Visible, natural, lasting outcomes — never overdone, always refined." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="divider-gold">About Us</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-charcoal">
            The story of <span className="italic text-gold-gradient">Vogue.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="hover-zoom card-shine overflow-hidden shadow-luxe">
          <img src={interior} alt="Vogue Esthetics interior" className="w-full h-[560px] object-cover" />
        </div>
        <div>
          <div className="divider-gold">Our philosophy</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-charcoal">Beauty is <span className="italic text-gold-gradient">personal.</span></h2>
          <p className="mt-6 text-charcoal/75 leading-relaxed">
            Vogue Esthetics was founded on a simple belief: every face tells a
            story, and every treatment plan should honour that story. We don't
            chase trends — we listen. We assess. We craft a protocol built
            around your skin, your features and your aspirations.
          </p>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            From our flagship clinic on Corniche Road, our team has cared for
            thousands of clients across Bahria Town, Rawalpindi and Islamabad —
            many of whom have stayed with us for years. That trust is our most
            valuable asset, and we protect it with everything we do.
          </p>
        </div>
      </section>

      <section className="bg-cream-deep py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-xl mx-auto">
            <div className="divider-gold">What guides us</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-charcoal">Four <span className="italic text-gold-gradient">commitments.</span></h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.t} className="group bg-background p-10 border border-border hover-lift card-shine text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold-dark transition-all duration-500 group-hover:bg-gold group-hover:text-cream group-hover:rotate-6">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-charcoal">{v.t}</h3>
                <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="divider-gold">Visit us</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-charcoal">Step inside our <span className="italic text-gold-gradient">sanctuary.</span></h2>
          <p className="mt-6 text-charcoal/75 leading-relaxed">
            Located on Corniche Road in the heart of Bahria Town Phase IV, our
            clinic is open 24 hours by appointment — making world-class
            aesthetic care available on your schedule.
          </p>
          <div className="mt-8"><Link to="/book" className="btn-gold"><span>Book a Visit</span></Link></div>
        </div>
        <div className="order-1 md:order-2 hover-zoom card-shine overflow-hidden shadow-luxe">
          <img src={entrance} alt="Vogue Esthetics entrance" className="w-full h-[560px] object-cover" />
        </div>
      </section>
    </>
  );
}
