import { motion } from "framer-motion";
import Section from "./Section";

const groups = [
  {
    name: "Backend",
    skills: [
      { name: "Laravel", level: 95 },
      { name: "PHP", level: 95 },
      { name: "REST APIs", level: 92 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "Python (basics)", level: 55 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 88 },
      { name: "HTML / CSS", level: 95 },
      { name: "jQuery / AJAX", level: 92 },
    ],
  },
  {
    name: "Integration & DevOps",
    skills: [
      { name: "SAP (SAPNWRFC)", level: 90 },
      { name: "Mobile App APIs (iOS / Android)", level: 80 },
      { name: "GitLab CI/CD", level: 88 },
      { name: "Jenkins", level: 80 },
      { name: "AI-assisted Development", level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>Tools that ship <span className="text-gradient">production systems.</span></>}
      description="Hands-on across the stack — backend, frontend, integration layers and the pipelines that deliver them."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6 border-gradient hover:shadow-glow transition-shadow duration-500"
          >
            <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gradient-primary" />
              {g.name}
            </h3>
            <div className="space-y-4">
              {g.skills.map((s, si) => (
                <div key={s.name} className="group">
                  <div className="flex items-center justify-between mb-1.5 text-xs font-mono">
                    <span className="text-foreground/90">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.1 + si * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-primary group-hover:animate-pulse"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}