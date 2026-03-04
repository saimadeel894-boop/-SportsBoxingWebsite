import { useEffect, useRef, useState, useCallback } from "react";
import fighterImg from "@/assets/fighter-hero.webp";
import pinkGloveImg from "@/assets/pink-boxing-glove.png";
import headguardImg from "@/assets/headguard.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

const RedArrow = ({
  direction,
  style,
  className = "",
}: {
  direction: "down" | "right" | "diagonal-sw";
  style?: React.CSSProperties;
  className?: string;
}) => {
  const paths: Record<string, string> = {
    down: "M12 2 L12 38 M6 32 L12 38 L18 32",
    right: "M2 12 L38 12 M32 6 L38 12 L32 18",
    "diagonal-sw": "M34 2 L6 34 M6 24 L6 34 L16 34",
  };
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} style={style}>
      <path d={paths[direction]} stroke="#E8171A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const heroHeight = section.offsetHeight;
    // progress 0 at top, 1 when scrolled past hero
    const progress = Math.min(1, Math.max(0, -rect.top / (heroHeight * 0.6)));
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleParallax = () => {
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>(".hero-eikyo-parallax").forEach((el) => {
        el.style.transform = `translate(-50%, -30%) translateY(${y * 0.2}px)`;
      });
    };

    window.addEventListener("scroll", handleParallax, { passive: true });
    handleParallax();
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  // Fix 2: Boxer scale 0.75 → 1.0
  const boxerScale = 0.75 + scrollProgress * 0.25;
  const textOpacity = 1;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background overflow-hidden"
      style={{ height: "min(100vh, 950px)", backgroundColor: "#FFFFFF" }}
    >
      {/* === LAYER 1: Solid red brand text — BEHIND fighter === */}
      <h1
        className="absolute pointer-events-none select-none font-accent whitespace-nowrap hero-eikyo-parallax"
        style={{
          fontSize: "28vw",
          lineHeight: "0.92",
          letterSpacing: "0.04em",
          color: "#E8171A",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -30%)",
          zIndex: 1,
          opacity: textOpacity,
        }}
      >
        <span className="hero-eikyo-text">EIKYO</span>
      </h1>

      {/* === LAYER 2: Fighter image — ABOVE solid text === */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          transform: `translateX(-50%) scale(${boxerScale})`,
          transformOrigin: "bottom center",
          bottom: 0,
          zIndex: 2,
          height: "95%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src={fighterImg}
          alt="Professional fighter in fighting stance"
          className="h-full w-auto object-contain object-bottom hero-boxer-image"
        />
      </div>

      {/* === LAYER 3: Outline text — IN FRONT of fighter (3D depth) === */}
      <h1
        className="absolute pointer-events-none select-none font-accent whitespace-nowrap hero-eikyo-parallax"
        style={{
          fontSize: "28vw",
          lineHeight: "0.92",
          letterSpacing: "0.04em",
          color: "transparent",
          WebkitTextStroke: "3px #E8171A",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -30%)",
          zIndex: 3,
          opacity: 1,
        }}
      >
        EIKYO
      </h1>

      {/* === FLOATING BOXING GLOVE — top-left with arrow === */}
      <div
        className="absolute hero-fade-in hero-float hero-glove"
        style={{
          top: "8%",
          left: "18%",
          zIndex: 5,
          animationDelay: "0.2s, 0.2s",
        }}
      >
        <RedArrow
          direction="diagonal-sw"
          className="absolute w-8 md:w-10 hero-fade-in"
          style={{ top: "-10px", left: "-30px", animationDelay: "1.0s" }}
        />
        <img
          src={pinkGloveImg}
          alt=""
          aria-hidden="true"
          className="w-20 md:w-32"
          style={{ transform: "rotate(-15deg)" }}
        />
      </div>

      {/* === FLOATING SHIN GUARD (mouth guard equivalent) — bottom-left === */}
      <img
        src={shinGuardsImg}
        alt=""
        aria-hidden="true"
        className="absolute w-20 md:w-36 opacity-40 hero-fade-in hero-float"
        style={{
          bottom: "8%",
          left: "14%",
          zIndex: 4,
          animationDelay: "0.6s, 0.5s",
        }}
      />

      {/* === "CHOICE OF CHAMPIONS" — lower-left below red text === */}
      <div
        className="absolute pointer-events-none hero-fade-in"
        style={{ left: "5%", bottom: "38%", zIndex: 6, animationDelay: "0.4s" }}
      >
        <p
          className="font-heading text-foreground uppercase"
          style={{
            fontSize: "clamp(13px, 1.4vw, 20px)",
            fontWeight: 700,
            letterSpacing: "0.18em",
          }}
        >
          choice of champions
        </p>
      </div>

      {/* === ARROW + "30+ Years of Experience" — bottom-left === */}
      <div className="absolute hero-fade-in hero-stat-block" style={{ left: "3%", bottom: "4%", zIndex: 10, animationDelay: "0.5s" }}>
        <RedArrow direction="down" className="w-6 md:w-8 mb-1 hero-fade-in" style={{ animationDelay: "1.0s" }} />
        <h3
          className="font-heading text-foreground leading-none"
          style={{ fontSize: "clamp(36px, 4vw, 64px)", fontWeight: 900 }}
        >
          10+
        </h3>
        <p
          className="font-heading text-foreground/70 mt-1"
          style={{ fontSize: "clamp(11px, 1vw, 15px)", fontWeight: 400 }}
        >
          Years Of
          <br />
          Experience
        </p>
      </div>

      {/* === WHATSAPP BUTTON — next to 30+ stat === */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute flex items-center gap-2 hero-fade-in"
        style={{ left: "12%", bottom: "4%", zIndex: 10, animationDelay: "0.5s" }}
      >
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            background: "#25D366",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.804-6.352-2.158l-.324-.255-3.363 1.128 1.128-3.363-.255-.324A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </div>
        <span className="font-heading text-foreground hidden md:inline" style={{ fontSize: 14, fontWeight: 600 }}>
          WhatsApp
        </span>
      </a>

      {/* === ARROW + "5K+ CUSTOMERS" — top-right === */}
      <div
        className="absolute hidden md:flex items-center gap-3 hero-fade-in"
        style={{ top: "12%", right: "5%", zIndex: 10, animationDelay: "0.4s" }}
      >
        <RedArrow direction="right" className="w-8 md:w-10 hero-fade-in" style={{ animationDelay: "1.0s" }} />
        <h3
          className="font-heading text-foreground uppercase"
          style={{ fontSize: "clamp(22px, 2.2vw, 32px)", fontWeight: 800, letterSpacing: "0.05em" }}
        >
          5k+ Customers
        </h3>
      </div>

      {/* === ARROW + PRODUCT IMAGES (jerseys equivalent) — right side === */}
      <div
        className="absolute hidden md:flex items-center gap-3 hero-fade-in"
        style={{ top: "28%", right: "5%", zIndex: 10, animationDelay: "0.6s" }}
      >
        <RedArrow direction="right" className="w-8 hero-fade-in" style={{ animationDelay: "1.0s" }} />
        <div className="flex items-center gap-1">
          {[glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg, uniformImg].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-contain bg-secondary"
            />
          ))}
        </div>
      </div>

      {/* === FLOATING HEADGUARD — right side mid === */}
      <img
        src={headguardImg}
        alt=""
        aria-hidden="true"
        className="absolute w-16 md:w-28 opacity-50 hidden md:block hero-fade-in hero-float"
        style={{
          bottom: "32%",
          right: "6%",
          zIndex: 5,
          animationDelay: "0.6s, 1.5s",
        }}
      />

      {/* === BRAND SEAL — bottom-right with arrow === */}
      <div
        className="absolute flex items-center gap-2 hero-fade-in"
        style={{ right: "4%", bottom: "6%", zIndex: 10, animationDelay: "0.8s" }}
      >
        <RedArrow direction="right" className="w-8 hidden md:block hero-fade-in" style={{ animationDelay: "1.0s" }} />
        <div className="relative w-28 h-28 md:w-40 md:h-40 hero-float" style={{ animationDelay: "2s" }}>
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
            <defs>
              <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
            </defs>
            <text className="fill-foreground font-heading text-[15px] font-bold uppercase tracking-[0.3em]">
              <textPath href="#circlePath">• EIKYO INTERNATIONAL • EIKYO INTERNATIONAL •</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logoImg}
              alt="EIKYO International"
              className="w-12 h-12 md:w-20 md:h-20 object-contain rounded-full"
            />
          </div>
        </div>
      </div>

      {/* === Mobile: CHOICE OF CHAMPIONS at bottom center === */}
      <div
        className="absolute bottom-[22%] left-0 right-0 pointer-events-none md:hidden text-center"
        style={{ zIndex: 4 }}
      >
        <p className="font-heading text-xs font-bold text-foreground uppercase tracking-[0.15em]">
          choice of champions
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
