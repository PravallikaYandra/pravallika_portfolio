import { useState } from "react";
import { z } from "zod";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent", description: "Thanks — I'll get back to you soon." });
    }, 800);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build <span className="text-gradient">something great.</span></>}
      description="Have a project, a role, or a stubborn integration problem? Drop me a line."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <div className="space-y-6">
          <ContactRow icon={Mail} label="Email" value="pravallika2117@gmail.com" href="mailto:pravallika2117@gmail.com" />
          <ContactRow icon={Github} label="GitHub" value="github.com/PravallikaYandra" href="https://github.com/PravallikaYandra/pravallika_portfolio" />
          <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/pravallika" href="www.linkedin.com/in/naga-pravallika-yandra-077692325" />
          <div className="glass rounded-2xl p-5 mt-8">
            <p className="text-sm text-muted-foreground">
              Currently based in Kuwait · open to remote, hybrid and relocation for the right role.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5 border-gradient">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name}>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={100}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                maxLength={255}
              />
            </Field>
          </div>
          <Field label="Message" error={errors.message}>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project…"
              rows={6}
              maxLength={1000}
            />
          </Field>
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="w-full sm:w-auto rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          >
            <Send className="mr-1 h-4 w-4" />
            {submitting ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 group">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl glass group-hover:shadow-glow transition-all">
        <Icon className="h-5 w-5 text-primary" />
      </span>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="text-foreground font-medium">{value}</p>
      </div>
    </a>
  );
}