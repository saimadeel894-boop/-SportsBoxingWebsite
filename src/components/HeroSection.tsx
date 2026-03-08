import { useEffect } from "react";
import fighterImg from "@/assets/fighter-hero.webp";
import pinkGloveImg from "@/assets/pink-glove.png";
import mouthGuardImg from "@/assets/mouth-guard.svg";
import jerseyFanImg from "@/assets/jersey-fan.webp";
import logoImg from "@/assets/eikyo-logo.jpg";

const HeroSection = () => {
  return (
    <section
      className="hero-section relative w-full overflow-hidden"
      style={{ height: "72vh", backgroundColor: "#FFFFFF" }}
    >
      {/* z-index 1 — BOXER IMAGE (BEHIND text) */}
      <img
        src={fighterImg}
        alt="Professional fighter in fighting stance"
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "100%",
          width: "auto",
          zIndex: 1,
          objectFit: "contain",
        }}
      />

      {/* z-index 2 — EIKYO TEXT (IN FRONT of boxer) */}
      <h1
        className="absolute pointer-events-none select-none whitespace-nowrap"
        style={{
          bottom: "-5%",
          left: "50%",
          transform: "translateX(-50%) scaleX(1.55)",
          transformOrigin: "bottom center",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "22vw",
          fontWeight: 400,
          color: "#E8171A",
          lineHeight: 1,
          letterSpacing: "6px",
          display: "block",
          textAlign: "center",
          zIndex: 2,
          opacity: 1,
          WebkitTextStroke: "0",
        }}
      >
        EIKYO
      </h1>

      {/* z-index 4 — PINK GLOVE top-left */}
      <img
        src={pinkGloveImg}
        alt=""
        aria-hidden="true"
        className="absolute hidden md:block"
        style={{
          top: "8%",
          left: "23%",
          width: "90px",
          zIndex: 4,
          transform: "rotate(-5deg)",
        }}
      />

      {/* z-index 4 — MOUTH GUARD lower-left */}
      <img
        src={mouthGuardImg}
        alt=""
        aria-hidden="true"
        className="absolute hidden md:block"
        style={{
          bottom: "22%",
          left: "8%",
          width: "155px",
          zIndex: 4,
          opacity: 0.4,
        }}
      />

      {/* z-index 4 — 5K+ CUSTOMERS top-right */}
      <div
        className="absolute hidden md:flex items-center"
        style={{
          top: "8%",
          right: "5%",
          fontSize: "1.5rem",
          fontWeight: 900,
          color: "#000000",
          zIndex: 4,
        }}
      >
        <h3 className="font-heading uppercase" style={{ letterSpacing: "0.05em" }}>
          5K + CUSTOMERS
        </h3>
      </div>

      {/* z-index 4 — JERSEY FAN right side */}
      <div
        className="absolute hidden md:block"
        style={{ top: "17%", right: "4%", zIndex: 4 }}
      >
        <img
          src={jerseyFanImg}
          alt=""
          aria-hidden="true"
          style={{ width: "185px", height: "auto" }}
        />
      </div>

      {/* z-index 4 — BRAND SEAL bottom-right */}
      <div
        className="absolute hidden md:flex items-center"
        style={{ bottom: "4%", right: "3%", width: "115px", zIndex: 4 }}
      >
        <div className="relative w-full" style={{ aspectRatio: "1" }}>
          <svg viewBox="0 0 200 200" className="w-full h-full" style={{ animation: "spin 12s linear infinite" }}>
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
              className="w-12 h-12 object-contain rounded-full"
            />
          </div>
        </div>
      </div>

      {/* z-index 4 — CHOICE OF CHAMPIONS */}
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "33%", left: "3%", zIndex: 4 }}
      >
        <p
          className="font-heading uppercase"
          style={{
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "5px",
            color: "#000000",
            background: "none",
            border: "none",
            padding: 0,
          }}
        >
          choice of champions
        </p>
      </div>

      {/* z-index 4 — 10+ STAT BLOCK */}
      <div
        className="absolute"
        style={{ bottom: "11%", left: "3%", zIndex: 4 }}
      >
        <h3
          className="font-heading leading-none"
          style={{ fontSize: "3.2rem", fontWeight: 900, color: "#000000" }}
        >
          10+
        </h3>
        <p
          className="font-heading mt-1"
          style={{ fontSize: "0.82rem", color: "#000000" }}
        >
          Years Of
          <br />
          Experience
        </p>
      </div>

      {/* z-index 4 — WHATSAPP BUTTON */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute flex items-center gap-2"
        style={{ left: "3%", bottom: "3%", zIndex: 4 }}
      >
        <div
          className="rounded-full flex items-center justify-center"
          style={{ width: 44, height: 44, background: "#25D366" }}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.804-6.352-2.158l-.324-.255-3.363 1.128 1.128-3.363-.255-.324A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </div>
        <span className="font-heading hidden md:inline" style={{ fontSize: 14, fontWeight: 600, color: "#000" }}>
          WhatsApp
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
