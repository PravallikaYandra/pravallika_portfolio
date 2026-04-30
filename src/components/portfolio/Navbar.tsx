import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Palette, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, setTheme, themes } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${scrolled ? "" : ""}`}>
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 ${
            scrolled ? "glass shadow-card" : ""
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground font-display font-bold text-lg shadow-glow">
              N
            </span>
            <span className="hidden sm:block font-display font-semibold tracking-tight">
              Pravallika<span className="text-muted-foreground">.portfolio</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute inset-x-3 bottom-1 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform bg-gradient-primary" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-xl" aria-label="Change theme">
                  <Palette className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {themes.map((t) => (
                  <DropdownMenuItem
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className="cursor-pointer"
                  >
                    <span className={`h-2 w-2 rounded-full mr-2 ${
                      theme === t.id ? "bg-primary" : "bg-muted"
                    }`} />
                    {t.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>

            <a href="#contact" className="hidden sm:inline-flex">
              <Button size="sm" className="rounded-xl bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
                Hire me
              </Button>
            </a>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-in">
            <div className="grid gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-muted/50"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}