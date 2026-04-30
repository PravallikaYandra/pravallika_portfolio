import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2026 Naga Pravallika Yandra. All rights reserved.</p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="#" aria-label="GitHub" className="hover:text-foreground transition-colors"><Github className="h-4 w-4" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>
          <a href="#contact" aria-label="Email" className="hover:text-foreground transition-colors"><Mail className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}