import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Check, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Vogue Esthetics | Bahria Town" },
      { name: "description", content: "Reserve your aesthetic treatment at Vogue Esthetics. Complimentary consultations available. Open 24 hours by appointment." },
      { property: "og:title", content: "Book Appointment — Vogue Esthetics" },
      { property: "og:description", content: "Reserve your moment of radiance." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: SERVICES[0].name, date: "", time: "", notes: "",
  });
  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) {
      toast.error("Please fill in your name, phone and preferred date.");
      return;
    }
    toast.success("Appointment requested!", {
      description: `We'll call you at ${form.phone} to confirm your ${form.service} on ${form.date}.`,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center reveal">
          <span className="inline-flex h-20 w-20 items-center justify-center rounded-full gold-gradient text-cream float-soft">
            <Check className="h-8 w-8" />
          </span>
          <div className="divider-gold mt-8">Reservation received</div>
          <h1 className="mt-5 font-display text-5xl text-charcoal">Thank you, <span className="italic text-gold-gradient">{form.name.split(" ")[0]}.</span></h1>
          <p className="mt-5 text-charcoal/70 leading-relaxed">
            We've received your request for <b>{form.service}</b> on <b>{form.date}</b>{form.time && ` at ${form.time}`}. Our team will call you at <b>{form.phone}</b> shortly to confirm.
          </p>
          <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: SERVICES[0].name, date: "", time: "", notes: "" }); }} className="btn-outline-gold mt-10">
            Book Another
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-cream-deep py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="divider-gold">Reserve your visit</div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl text-charcoal">
            Book your <span className="italic text-gold-gradient">appointment.</span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-charcoal/70">
            Complete the form and our concierge will confirm your booking within hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20">
        <form onSubmit={onSubmit} className="bg-background border border-border shadow-luxe p-8 md:p-14 grid md:grid-cols-2 gap-6">
          <Field label="Full name *" v={form.name} on={(v) => update("name", v)} placeholder="Your name" />
          <Field label="Phone *" v={form.phone} on={(v) => update("phone", v)} placeholder="0333 1234567" type="tel" />
          <Field label="Email" v={form.email} on={(v) => update("email", v)} placeholder="you@email.com" type="email" />
          <div>
            <Label>Service *</Label>
            <select
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
              className="mt-2 w-full bg-cream-deep border border-border px-4 py-3.5 text-charcoal focus:outline-none focus:border-gold transition-colors"
            >
              {SERVICES.map((s) => <option key={s.name}>{s.name}</option>)}
            </select>
          </div>
          <Field label="Preferred date *" v={form.date} on={(v) => update("date", v)} type="date" />
          <Field label="Preferred time" v={form.time} on={(v) => update("time", v)} type="time" />
          <div className="md:col-span-2">
            <Label>Notes</Label>
            <textarea
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              rows={4}
              placeholder="Tell us a little about your skin or what you'd like to achieve..."
              className="mt-2 w-full bg-cream-deep border border-border px-4 py-3.5 text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
            />
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
            <div className="flex items-center gap-3 text-sm text-charcoal/60">
              <Sparkles className="h-4 w-4 text-gold" />
              Complimentary first consultation
            </div>
            <button type="submit" className="btn-gold"><span><Calendar className="h-4 w-4" /> Confirm Booking</span></button>
          </div>
        </form>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-[11px] tracking-[0.25em] uppercase text-gold-dark">{children}</label>;
}

function Field({ label, v, on, type = "text", placeholder }: { label: string; v: string; on: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        value={v}
        onChange={(e) => on(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full bg-cream-deep border border-border px-4 py-3.5 text-charcoal focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
