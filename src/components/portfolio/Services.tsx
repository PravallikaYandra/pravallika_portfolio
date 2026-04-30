import { motion } from "framer-motion";
import { Layers, Server, Smartphone, GitBranch, LayoutDashboard, Sparkles } from "lucide-react";
import Section from "./Section";

const services = [
  { icon: Layers, title: "Full Stack Web Applications", desc: "End-to-end Laravel + React applications, designed for scale and long-term maintainability." },
  { icon: Server, title: "SAP Integration", desc: "Connecting Web apps through SAPNWRFC for data exchange." },
  { icon: Smartphone, title: "Mobile App API Layer", desc: "Hardened REST APIs powering Android & iOS apps with auth, sync and offline support." },
  { icon: GitBranch, title: "CI/CD Pipeline Setup", desc: "GitLab and Jenkins pipelines for fast, safe deployments — tests, builds, releases automated." },
  { icon: LayoutDashboard, title: "Admin Panels & Dashboards", desc: "Role-based admin systems and real-time dashboards built for operations teams." },
  { icon: Sparkles, title: "AI-Assisted Development", desc: "Prototype to production faster using modern AI tooling integrated into your workflow." },
];

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I can <span className="text-gradient">build for you.</span></>}
      description="Senior engineering across the modern web and the enterprise stack — pick a service or compose a complete delivery."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative glass rounded-2xl p-6 overflow-hidden hover:shadow-glow transition-all duration-500"
          >
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}