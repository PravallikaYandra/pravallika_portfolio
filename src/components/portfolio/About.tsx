import { motion } from "framer-motion";
import { GraduationCap, Trophy, Code2, Cpu } from "lucide-react";
import Section from "./Section";

const education = [
  { school: "Hindustan University, Chennai, TN ", degree: "B.Tech, Computer Science & Engineering", grade: "CGPA 9.1", year: "2015 — 2019" },
  { school: "NRI Junior College, Vijayawada, AP", degree: "Intermediate (MPC)", grade: "CGPA 9.1", year: "2013 — 2015" },
  { school: "Corbett School, Palakollu, AP", degree: "10th Standard", grade: "CGPA 9.0", year: "2013" },
];

const highlights = [
  { icon: Code2, label: "4+ years building web applications with Laravel + PHP platforms" },
  { icon: Cpu, label: "API & system integrations with external platforms (including SAP where needed)" },
  { icon: Trophy, label: "CI/CD pipelines with GitLab & Jenkins for production deployments" },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Full Stack Builder. <span className="text-gradient">Problem solver.</span></>}
      description="I design and ship scalable web applications across development, deployment, and production environments."
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            I'm a Full Stack Developer with deep experience building business-critical
            web applications across the browser, the API layer, the database, and SAP.
            My focus is reliability, automation, and developer experience — shipping
            features behind clean CI/CD pipelines without breaking things.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {/* I've led SAP integrations for vehicle service workflows, built field-service
            platforms used by technicians in the field, and embedded real-time dashboards
            inside SAP itself.  */}
             I've worked on engineering service platforms, enterprise web systems, and dashboards
            that support daily business operations. I also have experience integrating external
            systems where needed to support end-to-end application workflows. Lately I'm exploring AI-assisted development to ship faster.
          </p>
          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                  <h.icon className="h-4 w-4" />
                </span>
                <span className="text-sm text-foreground/90">{h.label}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative glass rounded-2xl p-6 sm:p-8 border-gradient">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-display font-semibold">Education</h3>
          </div>
          <ol className="relative border-l border-border/60 ml-3 space-y-8">
            {education.map((e, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="ml-6"
              >
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-gradient-primary shadow-glow" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-medium text-foreground">{e.school}</p>
                  <span className="text-xs font-mono text-muted-foreground">{e.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{e.degree}</p>
                <span className="inline-block mt-2 text-xs font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                  {e.grade}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}