import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vogue Esthetics | Bahria Town, Rawalpindi" },
      { name: "description", content: "Get in touch with Vogue Esthetics. Plaza 5 & 6, Corniche Road, Bahria Town Phase IV. Call 0333 1116662 or visit us 24/7 by appointment." },
      { property: "og:title", content: "Contact Vogue Esthetics" },
      { property: "og:description", content: "Reach out — we'd love to hear from you." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, t: "Address", d: "Plaza 5 & 6, Corniche Road,\nBahria Town Phase IV, Islamabad", href: "https://www.google.com/maps?q=Vogue+Esthetics+Bahria+Town+Phase+4+Islamabad" },
  { icon: Phone, t: "Phone", d: "0333 1116662", href: "tel:+923331116662" },
  { icon: Mail, t: "Email", d: "hello@vogueesthetics.pk", href: "mailto:hello@vogueesthetics.pk" },
  { icon: Clock, t: "Hours", d: "Open 24 hours\nBy appointment" },
];

function ContactPage() {
  return (
    <>
      <section className="bg-cream-deep py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="divider-gold">Get in touch</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-charcoal">
            We'd love to <span className="italic text-gold-gradient">hear from you.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-5">
        {details.map((d) => {
          const Wrap: any = d.href ? "a" : "div";
          const props: any = d.href ? { href: d.href, target: d.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" } : {};
          return (
            <Wrap key={d.t} {...props} className="group bg-cream-deep p-10 border border-border hover-lift card-shine flex gap-6 items-start">
              <span className="h-14 w-14 shrink-0 rounded-full border border-gold/40 flex items-center justify-center text-gold-dark transition-all duration-500 group-hover:bg-gold group-hover:text-cream group-hover:rotate-6">
                <d.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs tracking-[0.3em] uppercase text-gold-dark">{d.t}</div>
                <div className="mt-2 font-display text-2xl text-charcoal whitespace-pre-line group-hover:text-gold-dark transition-colors duration-500">{d.d}</div>
              </div>
            </Wrap>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="overflow-hidden shadow-luxe ring-gold-soft hover-lift">
          <iframe
            title="Vogue Esthetics location"
            src="https://www.google.com/maps?q=Vogue+Esthetics+Plaza+5+6+Corniche+Road+Bahria+Town+Phase+4+Islamabad&output=embed"
            width="100%"
            height="520"
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
