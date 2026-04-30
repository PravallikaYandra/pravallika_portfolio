import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, eyebrow, title, description, children, className }: Props) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}