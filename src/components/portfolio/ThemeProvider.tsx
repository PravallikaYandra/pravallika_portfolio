import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "futuristic" | "dark" | "light" | "corporate";

const THEMES: { id: Theme; label: string }[] = [
  { id: "futuristic", label: "AI Futuristic" },
  { id: "dark", label: "Dark Modern" },
  { id: "light", label: "Light Clean" },
  { id: "corporate", label: "Corporate" },
];

type Ctx = { theme: Theme; setTheme: (t: Theme) => void; themes: typeof THEMES };
const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "futuristic";
    return (localStorage.getItem("portfolio-theme") as Theme) || "futuristic";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "futuristic") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}