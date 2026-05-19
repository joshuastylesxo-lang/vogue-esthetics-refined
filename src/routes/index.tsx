import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Award, ShieldCheck, Clock, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import t1 from "@/assets/treatment-1.jpg";
import t2 from "@/assets/treatment-2.jpg";
import t3 from "@/assets/treatment-3.jpg";
import interior from "@/assets/clinic-interior.png";
import entrance from "@/assets/clinic-entrance.png";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vogue Esthetics — Premium Skin, Hair & Laser Clinic | Bahria Town" },
      { name: "description", content: "Bahria Town's premier aesthetic clinic. Pico Laser, HIFU, Hydrafacial, Botox, Fillers, PRP. Open 24 hours. Book your consultation today." },
      { property: "og:title", content: "Vogue Esthetics — Premium Aesthetic Clinic" },
      { property: "og:description", content: "Skin, Hair & Laser experts in Bahria Town, Rawalpindi." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const reviews = [
  { name: "Imama Firdous", text: "Amazing results 🤍 The team is meticulous and the experience feels truly luxurious.", rating: 5 },
  { name: "Zaid Khan", text: "I've been getting my skin treatments here for two years. Highly satisfied — I recommend Vogue to all my friends.", rating: 5 },
  { name: "Abdul Mohaimen", text: "Very great experience. The doctor is wonderful and the bodymilk she recommended gave outstanding results.", rating: 5 },
  { name: "Alyan Khurram", text: "Very friendly staff and excellent customer service from start to finish.", rating: 5 },
  { name: "Muhammad Hasnain", text: "Great services overall — the clinic is beautiful and the treatments are top tier. Highly recommend.", rating: 5 },
  { name: "Gull Zahid", text: "Excellent experience. Calm atmosphere, professional team and visible results.", rating: 5 },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Vogue Esthetics interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-28 md:py-40 lg:py-48 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="divider-gold reveal">Bahria Town · Rawalpindi</div>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-charcoal reveal delay-100">
              Timeless beauty,<br />
              <span className="italic text-gold-gradient">crafted with science.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-charcoal/70 leading-relaxed reveal delay-200">
              Bahria Town's premier aesthetic destination for skin, hair & laser
              excellence — where every treatment is tailored, every detail is
              considered, and every client leaves radiant.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 reveal delay-300">
              <Link to="/book" className="btn-gold"><span>Book Appointment <ArrowRight className="h-4 w-4" /></span></Link>
              <Link to="/services" className="btn-outline-gold">Explore Services</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 reveal delay-400">
              <Stat n="4.3★" l="Google rated" />
              <Stat n="13+" l="Premium services" />
              <Stat n="24/7" l="Open hours" />
            </div>
          </div>
          <div className="hidden lg:block float-soft">
            <div className="relative ring-gold-soft shadow-luxe overflow-hidden hover-zoom card-shine">
              <img src={interior} alt="Vogue Esthetics clinic interior" className="w-full h-[560px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / VALUE STRIP */}
      <section className="bg-charcoal text-cream py-6 overflow-hidden border-y border-gold/20">
        <div className="flex gap-16 whitespace-nowrap animate-[shimmer_30s_linear_infinite] justify-around text-xs tracking-[0.4em] uppercase text-gold-light/90">
          <span>✦ Pico Laser</span><span>✦ Soprano Hair Removal</span><span>✦ Hydrafacial</span>
          <span>✦ HIFU</span><span>✦ Botox & Fillers</span><span>✦ PRP</span><span>✦ Profhilo</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={entrance} alt="Vogue Esthetics entrance" className="w-full h-[520px] object-cover shadow-luxe" />
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-cream-deep p-8 md:p-10 max-w-xs shadow-luxe ring-gold-soft">
            <div className="font-display text-5xl text-gold-gradient">10+</div>
            <div className="mt-2 text-sm text-charcoal/70">Years caring for Bahria Town's skin, hair and confidence.</div>
          </div>
        </div>
        <div>
          <div className="divider-gold">About the clinic</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-charcoal">
            A sanctuary of <span className="italic text-gold-gradient">precision & poise.</span>
          </h2>
          <p className="mt-6 text-charcoal/75 leading-relaxed">
            Vogue Esthetics blends advanced medical technology with the
            hospitality of a five-star spa. From our certified physicians to our
            FDA-approved devices, every element of your visit is engineered to
            deliver visible, lasting results — in an environment designed for
            calm and confidentiality.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Award, t: "Certified physicians & licensed therapists" },
              { icon: ShieldCheck, t: "FDA-approved devices & medical-grade protocols" },
              { icon: Sparkles, t: "Personalised treatment plans for every skin type" },
              { icon: Clock, t: "Open 24 hours — by appointment" },
            ].map((f) => (
              <li key={f.t} className="flex items-start gap-4 group">
                <span className="h-10 w-10 shrink-0 rounded-full border border-gold/40 flex items-center justify-center text-gold-dark transition-all duration-500 group-hover:bg-gold group-hover:text-cream group-hover:rotate-6">
                  <f.icon className="h-4 w-4" />
                </span>
                <span className="pt-2 text-charcoal/80">{f.t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link to="/about" className="btn-outline-gold">Our Story</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="divider-gold">Signature treatments</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-charcoal">
              The full <span className="italic text-gold-gradient">Vogue</span> menu
            </h2>
            <p className="mt-5 text-charcoal/70">From laser to luxury injectables, every protocol is performed by qualified hands using world-class technology.</p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.name}
                className="group relative bg-background p-8 border border-border hover-lift card-shine cursor-pointer"
                style={{ animation: `reveal .8s cubic-bezier(.2,.7,.1,1) ${i * 0.05}s both` }}
              >
                <div className="text-xs tracking-[0.3em] uppercase text-gold-dark mb-4">0{(i % 9) + 1}</div>
                <h3 className="font-display text-2xl text-charcoal group-hover:text-gold-dark transition-colors duration-500">{s.name}</h3>
                <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold-dark opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  Discover <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/book" className="btn-gold"><span>Reserve Your Treatment</span></Link>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center max-w-xl mx-auto">
          <div className="divider-gold">Inside Vogue</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-charcoal">A space designed to <span className="italic text-gold-gradient">indulge.</span></h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {[interior, t1, entrance, t2, t3, hero].map((img, i) => (
            <div key={i} className={`hover-zoom card-shine overflow-hidden shadow-luxe ${i === 0 || i === 5 ? "md:col-span-2" : ""}`}>
              <img src={img} alt={`Vogue Esthetics ${i + 1}`} loading="lazy" className="w-full h-80 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-charcoal text-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <div className="divider-gold" style={{ color: "var(--gold-light)" }}>Words from clients</div>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Loved across <span className="italic text-shimmer">Bahria Town.</span></h2>
            <div className="mt-5 flex items-center justify-center gap-2 text-gold-light">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-sm text-cream/70">4.3 · 48 Google reviews</span>
            </div>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="group p-8 border border-cream/10 hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 bg-cream/[0.02] hover:bg-cream/[0.05]">
                <div className="flex gap-1 text-gold">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="mt-5 text-cream/85 italic leading-relaxed font-display text-lg">"{r.text}"</p>
                <div className="mt-6 text-sm tracking-[0.2em] uppercase text-gold-light">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="relative overflow-hidden p-12 md:p-20 text-center bg-cream-deep ring-gold-soft shadow-luxe">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative">
            <div className="divider-gold">Ready to glow?</div>
            <h2 className="mt-5 font-display text-4xl md:text-6xl text-charcoal">Your radiance, <span className="italic text-gold-gradient">reserved.</span></h2>
            <p className="mt-5 max-w-xl mx-auto text-charcoal/70">Book a complimentary consultation. We'll design a treatment plan around your goals, your timeline and your skin.</p>
            <div className="mt-9 flex flex-wrap gap-4 justify-center">
              <Link to="/book" className="btn-gold"><span>Book Now</span></Link>
              <a href="tel:+923331116662" className="btn-outline-gold">Call 0333 1116662</a>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="divider-gold">Find us</div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-charcoal">Visit the <span className="italic text-gold-gradient">clinic.</span></h2>
          <p className="mt-4 text-charcoal/70">Plaza 5 & 6, Corniche Road, Bahria Town Phase IV, Islamabad</p>
        </div>
        <div className="overflow-hidden shadow-luxe ring-gold-soft hover-lift">
          <iframe
            title="Vogue Esthetics location"
            src="https://www.google.com/maps?q=Vogue+Esthetics+Plaza+5+6+Corniche+Road+Bahria+Town+Phase+4+Islamabad&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="group cursor-default">
      <div className="font-display text-4xl text-gold-gradient transition-transform duration-500 group-hover:scale-110 origin-left">{n}</div>
      <div className="mt-1 text-[11px] tracking-[0.25em] uppercase text-charcoal/60">{l}</div>
    </div>
  );
}
