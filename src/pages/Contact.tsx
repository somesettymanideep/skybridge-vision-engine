import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, ArrowRight, Lock, Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone required").max(30),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget"),
  message: z.string().trim().min(10, "Message too short").max(1000),
});

const faqs = [
  ["How quickly will you respond to my inquiry?", "We respond to every qualified inquiry within one business day, often within hours."],
  ["How does your pricing work?", "We tailor every engagement. After a free discovery call we send a fixed-scope proposal with transparent pricing."],
  ["What contract terms do you offer?", "Most engagements are month-to-month after an initial 90-day strategy sprint — no long-term lock-ins."],
  ["What does onboarding look like?", "Discovery → strategy blueprint → kickoff workshop → execution. Most clients are live within 2-3 weeks."],
  ["Which industries do you serve?", "We've worked across SaaS, e-commerce, real estate, finance, hospitality, healthcare, and more."],
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("Please fix the errors and try again.");
      return;
    }
    setErrors({});
    toast.success("Message sent! We'll be in touch within one business day.");
    setForm({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });
  };

  return (
    <Layout>
      <PageHero
        breadcrumb="Contact Us"
        title="Let's Start Something Great Together"
        subtitle="Reach out today — your free strategy consultation is just one message away."
      />

      <section className="py-24 bg-background">
        <div className="container grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-card">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-2">Tell us about your project</h2>
              <p className="text-muted-foreground text-sm mb-8">All fields confidential. We respond within 1 business day.</p>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <Label>Full Name</Label>
                  <Input value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Jane Doe" maxLength={100} />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Label>Business Email</Label>
                  <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@company.com" maxLength={255} />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+971 50 000 0000" maxLength={30} />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <Label>Company Name</Label>
                  <Input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Acme Inc." maxLength={120} />
                </div>
                <div>
                  <Label>Service Interested In</Label>
                  <Select value={form.service} onValueChange={(v) => set("service", v)}>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      {["SEO", "Web Development", "Social Media", "Paid Ads", "Branding", "Other"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
                </div>
                <div>
                  <Label>Budget Range</Label>
                  <Select value={form.budget} onValueChange={(v) => set("budget", v)}>
                    <SelectTrigger><SelectValue placeholder="Select a range" /></SelectTrigger>
                    <SelectContent>
                      {["< $5K", "$5K – $15K", "$15K – $50K", "$50K+"].map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budget && <p className="text-xs text-destructive mt-1">{errors.budget}</p>}
                </div>
              </div>

              <div className="mt-5">
                <Label>Message</Label>
                <Textarea value={form.message} onChange={(e) => set("message", e.target.value)} rows={5} placeholder="Tell us about your goals…" maxLength={1000} />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full mt-6">
                Send My Message <ArrowRight />
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-2">
                <Lock className="w-3 h-3" /> Your information is 100% confidential
              </p>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal className="lg:col-span-2" delay={120}>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Office Address", value: "Sheikh Zayed Road, Dubai, UAE" },
                { icon: Phone, label: "Phone Number", value: "+971 4 123 4567" },
                { icon: Mail, label: "Email Address", value: "hello@skybridge.com" },
                { icon: Clock, label: "Business Hours", value: "Sun – Thu · 9:00 – 18:00 GST" },
              ].map((c) => (
                <div key={c.label} className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4 hover:shadow-glow hover:border-primary/30 transition-smooth">
                  <span className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                    <c.icon className="w-5 h-5 text-white" />
                  </span>
                  <div>
                    <p className="font-accent text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="font-display font-bold mt-1">{c.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                {[Linkedin, Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:gradient-primary hover:text-white hover:border-transparent transition-smooth">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-border h-64 mt-2">
                <iframe
                  title="SkyBridge office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=55.27%2C25.19%2C55.30%2C25.21&layer=mapnik"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-accent text-xs uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl">Frequently Asked Questions</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map(([q, a], i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-5">
                  <AccordionTrigger className="font-display font-bold text-left">{q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
