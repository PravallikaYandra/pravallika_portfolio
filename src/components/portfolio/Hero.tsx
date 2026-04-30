import { motion } from "framer-motion";
import { Play, Youtube, Instagram, Mail, Menu } from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";
import deskScene from "@/assets/hero-desk-scene.jpg";

const menuItems = [
  "UI",
  "Visual",
  "Interactive",
  "Animation",
  "Creative Direction",
  "3D",
];

const tabs = [
  { label: "About", href: "#about" },
  { label: "Hello", href: "#hero", active: true },
  { label: "Work", href: "#projects" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      <div
        className="absolute left-1/2 top-1/2 aspect-[16/9] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "max(100vw, 177.78vh)",
        }}
      >
        {/* Single desk scene: monitor + keyboard + objects */}
        <img
          src={deskScene}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
        />

        {/* Screen content is clipped exactly inside the one physical monitor */}
        <div
          className="absolute"
          style={{
            left: "26.45%",
            right: "27.25%",
            top: "15.95%",
            bottom: "33.2%",
          }}
        >
          <ScreenContent />
        </div>
      </div>
    </section>
  );
}

function ScreenContent() {
  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      {/* Subtle screen vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Top bar inside screen: logo + menu icon */}
      <div className="absolute top-[4%] left-0 right-0 flex items-center justify-between px-[4%] z-20">
        <span />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
        >
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-white/40 flex items-center justify-center text-white/80 text-[10px] sm:text-xs font-display font-bold">
            M
          </div>
        </motion.div>
        <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-white/70" />
      </div>

      {/* Big circle with portrait in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative aspect-square h-[88%] flex items-center justify-center">
          {/* Outer thin ring */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 rounded-full border border-white/15"
          />
          {/* Orbiting dot */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white/70" />
          </motion.div>

          {/* Inner circle */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute aspect-square h-[78%] rounded-full border border-white/10 overflow-hidden"
          >
            {/* Portrait (head + smoke) inside the inner circle */}
            <motion.img
              src={portrait}
              alt="Portrait"
              width={1024}
              height={1024}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-full w-full object-cover grayscale contrast-110"
            />
            {/* Soft inner vignette */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-black/50" />
          </motion.div>

        </div>
      </div>

      {/* Left text: Hello */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="absolute left-[6%] top-1/2 -translate-y-1/2 z-10"
      >
        <h1 className="font-display font-bold tracking-tight leading-none text-white text-[clamp(1.5rem,4.5vw,4rem)]">
          Hello<span className="text-white">.</span>
        </h1>
        <div className="mt-3 flex items-center gap-2">
          <span className="h-px w-5 sm:w-7 bg-white/80" />
          <span className="font-display text-[10px] sm:text-xs font-semibold text-white tracking-wide">
            Naga Pravallika
          </span>
        </div>
        <p className="mt-2 text-[9px] sm:text-[11px] text-white/60 leading-relaxed max-w-[140px]">
          Full-Stack Developer
          <br />
          based in India
        </p>
      </motion.div>

      {/* Right vertical menu */}
      <motion.ul
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="absolute right-[6%] top-1/2 -translate-y-[60%] z-10 flex flex-col items-end gap-1.5 sm:gap-2"
      >
        {menuItems.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.06 }}
            className="text-[10px] sm:text-xs text-white/75 hover:text-white transition-colors cursor-default"
          >
            {s}
          </motion.li>
        ))}
      </motion.ul>

      {/* Reel button */}
      {/* <motion.a
        href="#projects"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute right-[10%] bottom-[18%] flex items-center gap-2 sm:gap-3 group z-10"
        aria-label="View showreel"
      >
        <span className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-white/50 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-colors">
          <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-white text-white ml-0.5" />
        </span>
        <span className="text-[10px] sm:text-xs text-white/70 group-hover:text-white transition-colors">
          Reel
        </span>
      </motion.a> */}

      {/* Bottom bar inside screen */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute left-0 right-0 bottom-[3%] flex items-center justify-between px-[4%] text-[9px] sm:text-[11px] text-white/60 z-10"
      >
        <span className="font-mono">pravallika.design</span>

        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6">
          {tabs.map((t) => (
            <a
              key={t.label}
              href={t.href}
              className={`relative pb-1 font-medium transition-colors ${
                t.active ? "" : "text-white/60 hover:text-white"
              }`}
              style={t.active ? { color: "hsl(18 95% 55%)" } : undefined}
            >
              {t.label}
              {t.active && (
                <span
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-px w-5"
                  style={{ background: "hsl(18 95% 55%)" }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 text-white/50">
          <a href="#" aria-label="YouTube" className="hover:text-white">
            <Youtube className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <Instagram className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </a>
          <a href="#contact" aria-label="Email" className="hover:text-white">
            <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
