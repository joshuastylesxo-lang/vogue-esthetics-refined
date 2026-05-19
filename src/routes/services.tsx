import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vogue Esthetics | Skin, Hair & Laser Treatments" },
      { name: "description", content: "Explore Pico Laser, HIFU, Hydrafacial, Botox, Dermal Fillers, PRP, Mesotherapy, Profhilo and more at Vogue Esthetics, Bahria Town." },
      { property: "og:title", content: "Services — Vogue Esthetics" },
      { property: "og:description", content: "The complete menu of premium aesthetic treatments." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="divider-gold reveal">Our Menu</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-charcoal reveal delay-100">
            Treatments curated for <span className="italic text-gold-gradient">every concern.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-charcoal/70 reveal delay-200">
            Each protocol below is delivered by certified practitioners using
            FDA-approved devices and medical-grade products. Pricing is provided
            during your complimentary consultation, tailored to your treatment plan.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className="group relative bg-background p-10 border border-border hover-lift card-shine"
              style={{ animation: `reveal .8s cubic-bezier(.2,.7,.1,1) ${i * 0.04}s both` }}
            >
              <div className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-4">{String(i + 1).padStart(2, "0")}</div>
              <h2 className="font-display text-3xl text-charcoal group-hover:text-gold-dark transition-colors duration-500">{s.name}</h2>
              <p className="mt-4 text-sm text-charcoal/65 leading-relaxed">{s.desc}</p>
              <Link to="/book" className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold-dark link-underline">
                Book this <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 text-center">
        <div className="relative overflow-hidden p-12 md:p-16 bg-charcoal text-cream shadow-luxe">
          <h2 className="font-display text-4xl md:text-5xl">Not sure where to begin?</h2>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto">Book a complimentary skin assessment with our specialists — we'll guide you to the right treatment for your goals.</p>
          <div className="mt-8"><Link to="/book" className="btn-gold"><span>Book Free Consultation</span></Link></div>
        </div>
      </section>
    </>
  );
}
