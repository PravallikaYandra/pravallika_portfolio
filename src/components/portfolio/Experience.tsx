import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import Section from "./Section";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Almulla Group",
    location: "Kuwait",
    period: "2023 — Present",
    points: [
      // "Architected enterprise systems integrating Laravel, React and SAP via SAPNWRFC.",
      // "Built CI/CD pipelines (GitLab, Jenkins) for multi-app ecosystems with zero-downtime deploys.",
      // "Led SAP-embedded dashboards, vendor portals, and mobile-API platforms used in production.",
      "Built and maintained enterprise applications using Laravel, PHP, and modern frontend technologies.",
      "Developed backend APIs, dashboards, and vendor-facing systems used in production environments.",
      "Worked on system integrations and deployment workflows using CI/CD pipelines (GitLab, Jenkins) across multiple applications.",
    ],
    tags: ["Laravel", "PHP", "SAP", "GitLab CI", "Jenkins" ,"HTML" , "AJAX" , "REST API's" , "JavaScript"],
  },
  {
    role: "Laravel Web Developer",
    company: "Chettinad Hospital & Research Institute",
    location: "Chennai, TN, India",
    period: "2020 — 2022",
    points: [
      "Delivered web modules — Student exam evaluation, enabling professors to review and manage marks through internal dashboards, secure APIs.",
      "Optimised MySQL queries and refactored legacy modules for maintainability.",
    ],
    tags: ["Laravel", "PHP", "MySQL", "jQuery", "AJAX"],
  },
  {
    role: "Java Developer",
    company: "HCL Technologies",
    location: "Chennai, India",
    period: "2019 — 2020",
    points: [
      "Built backend Java services, REST endpoints and business-logic modules for enterprise clients.",
    ],
    tags: ["Java", "Spring", "REST"],
  },
  {
    role: "Software Intern",
    company: "IoT Solutions",
    location: "Vijayawada, India",
    period: "2019",
    points: ["Developed an Android mobile application for a smart home automation system, allowing users to control and monitor home devices remotely."],
    tags: ["Android Studio", "IoT", "Java"],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A timeline of <span className="text-gradient">shipped systems.</span></>}
      description="From healthcare web modules to SAP-integrated enterprise platforms across the Middle East."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="space-y-12">
          {experience.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative grid sm:grid-cols-2 gap-6 ${
                i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
              }`}
            >
              <span className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                <span className="text-xs font-mono text-primary tracking-widest">{e.period}</span>
                <h3 className="mt-1 font-display text-xl font-semibold">{e.role}</h3>
                <p className="text-muted-foreground inline-flex items-center gap-2 text-sm mt-1">
                  <Briefcase className="h-3.5 w-3.5" />
                  {e.company}
                  <MapPin className="h-3.5 w-3.5 ml-2" />
                  {e.location}
                </p>
              </div>
              <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                <div className="glass rounded-2xl p-5 hover:shadow-glow transition-all duration-500">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {e.points.map((p, j) => (
                      <li key={j} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                  <div className={`flex flex-wrap gap-1.5 mt-4 ${i % 2 === 0 ? "" : "sm:justify-end"}`}>
                    {e.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}