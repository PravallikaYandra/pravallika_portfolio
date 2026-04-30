import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Section from "./Section";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Project = {
  title: string;
  category: string;
  summary: string;
  details: string;
  role: string;
  status?: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "TR Services — Vehicle Service Management",
    category: "Enterprise / SAP",
    summary: "End-to-end vehicle service workflow integrated with SAP for live quotation generation.",
    details: "Service intake, technician assignment, parts catalogue, and quotation workflow with bidirectional SAP sync. Owned SAP integration, deployment and CI pipeline.",
    role: "SAP integration · Workflow · Deployment",
    tech: ["Laravel", "SAP", "MySQL", "jQuery", "AJAX", "PHP"],
  },
  {
    title: "TR Seervice - Sticker Printing",
    category: "Operations",
    summary: "QR-driven vehicle history tracking with print-ready sticker generation.",
    details: "Generates unique QR codes per vehicle, captures full service history, and produces print-ready stickers for workshops.",
    role: "Full-stack ownership",
    tech: ["Laravel", "MySQL", "QR.js", "PHP"],
  },
  {
    title: "AME Engineering Services",
    category: "Multi-app Ecosystem",
    summary: "Web + mobile + SAP + Maps system with live technician tracking.",
    details: "Multi-application ecosystem — admin web app, technician mobile apps, SAP sync layer, and live map tracking for jobs and routes.",
    role: "Architecture · APIs · SAP",
    tech: ["Laravel", "PHP", "SAP", "Google Maps", "REST"],
  },
  {
    title: "Agent Portal — HR System",
    category: "Internal Tools",
    summary: "Employee lifecycle management with role-based access control.",
    details: "Onboarding, profile, documents, attendance and approvals with granular RBAC across HR, manager and employee roles.",
    role: "Backend · RBAC · UI",
    tech: ["Laravel", "MySQL", "PHP", "JavaScript"],
  },
  {
    title: "AMCMS — Manpower Management",
    category: "Enterprise / SAP",
    summary: "Contract workforce tracking integrated with SAP master data.",
    details: "Tracks contractor manpower across sites with SAP-synchronised cost centres and approval workflows.",
    role: "SAP sync · Workflow",
    tech: ["PHP", "SAP", "MySQL"],
  },
  {
    title: "Vendor Portal",
    category: "SAP Integration",
    summary: "SAP PO → invoice bidirectional sync with vendor self-service.",
    details: "Vendors view POs, submit invoices, track payment — all bidirectionally synchronised with SAP. Currently 70% complete.",
    role: "Lead engineer",
    status: "30% complete",
    tech: ["Laravel", "React", "SAP", "REST"],
  },
  {
    title: "Timesheet System",
    category: "Enterprise",
    summary: "Multi-project allocation, approvals and SAP export.",
    details: "Per-project time entry, manager approval flows, exports to SAP for payroll and project costing.",
    role: "Full-stack ownership",
    tech: ["Laravel", "MySQL", "SAP Export", "PHP", "TAILWIND"],
  },
  {
    title: "SAP Embedded Dashboard",
    category: "SAP",
    summary: "Real-time production dashboard rendered inside SAP GUI.",
    details: "Live production KPIs streamed into an embedded dashboard inside SAP — zero context-switching for plant managers.",
    role: "SAP UI · Realtime",
    tech: ["CSS", "HTML"],
  },
];

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work.</span></>}
      description="A snapshot of enterprise platforms I've designed, built and shipped."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.button
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onClick={() => setActive(p)}
            className="group text-left relative glass rounded-2xl p-6 overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary">{p.category}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-primary" />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.summary}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/60">
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md text-muted-foreground">
                    +{p.tech.length - 4}
                  </span>
                )}
              </div>
              {p.status && (
                <span className="absolute top-0 right-0 text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary/20 text-secondary border border-secondary/30">
                  {p.status}
                </span>
              )}
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl glass border-border/60">
          {active && (
            <>
              <DialogHeader>
                <span className="text-[11px] font-mono uppercase tracking-widest text-primary">{active.category}</span>
                <DialogTitle className="font-display text-2xl mt-1">{active.title}</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                  {active.details}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 space-y-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                  <p className="text-sm">{active.role}</p>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Tech stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}