import { useEffect, useRef } from "react";
import fighterImg from "@/assets/fighter-hero.webp";
import pinkGloveImg from "@/assets/pink-glove.png";
import mouthGuardImg from "@/assets/mouth-guard.svg";
import jerseyFanImg from "@/assets/jersey-fan.webp";
import logoImg from "@/assets/eikyo-logo.jpg";

const EIKYO_LETTERS = ["E", "I", "K", "Y", "O"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const boxerRef = useRef<HTMLImageElement>(null);
  const gloveRef = useRef<HTMLImageElement>(null);
  const mouthguardRef = useRef<HTMLImageElement>(null);
  const customersRef = useRef<HTMLParagraphElement>(null);
  const jerseysRef = useRef<HTMLImageElement>(null);
  const choiceRef = useRef<HTMLParagraphElement>(null);
  const statRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entry animation: per-character 3D rotateX flip-in
    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "perspective(600px) rotateX(-90deg)";
      el.style.transition = "none";

      setTimeout(() => {
        el.style.transition = `opacity 0.6s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;
        el.style.opacity = "1";
        el.style.transform = "perspective(600px) rotateX(0deg)";
      }, 200 + i * 120);
    });

    // Boxer fade-in
    if (boxerRef.current) {
      const b = boxerRef.current;
      b.style.opacity = "0";
      b.style.transform = "translateX(-50%) translateY(20px)";
      b.style.transition = "none";
      setTimeout(() => {
        b.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        b.style.opacity = "1";
        b.style.transform = "translateX(-50%) translateY(0)";
      }, 100);
    }

    // Glove float-in
    if (gloveRef.current) {
      const g = gloveRef.current;
      g.style.opacity = "0";
      g.style.transform = "rotate(-8deg) translateY(-30px)";
      g.style.transition = "none";
      setTimeout(() => {
        g.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        g.style.opacity = "1";
        g.style.transform = "rotate(-8deg) translateY(0)";
      }, 400);
    }

    // Right-side elements fade-in
    [customersRef.current, jerseysRef.current].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateX(30px)";
      el.style.transition = "none";
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, 500 + i * 100);
    });

    // Choice of champions slide-in (mask reveal)
    if (choiceRef.current) {
      const c = choiceRef.current;
      c.style.opacity = "0";
      c.style.transform = "translateX(-100%)";
      c.style.transition = "none";
      setTimeout(() => {
        c.style.transition = "opacity 0.5s ease-out, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
        c.style.opacity = "1";
        c.style.transform = "translateX(0)";
      }, 700);
    }

    // Stat & mouthguard fade-in
    [statRef.current, mouthguardRef.current].forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transition = "none";
      setTimeout(() => {
        el.style.transition = "opacity 0.5s ease-out";
        el.style.opacity = "1";
      }, 800 + i * 100);
    });

    // Seal fade-in
    if (sealRef.current) {
      sealRef.current.style.opacity = "0";
      sealRef.current.style.transition = "none";
      setTimeout(() => {
        sealRef.current!.style.transition = "opacity 0.5s ease-out";
        sealRef.current!.style.opacity = "1";
      }, 900);
    }

    // Scroll parallax
    const handleScroll = () => {
      const y = window.scrollY;
      lettersRef.current.forEach((el) => {
        if (el) el.style.transform = `perspective(600px) rotateX(0deg) translateY(${y * 0.15}px)`;
      });
      if (boxerRef.current) boxerRef.current.style.transform = `translateX(-50%) translateY(${y * 0.05}px)`;
      if (gloveRef.current) gloveRef.current.style.transform = `rotate(-8deg) translateY(${y * 0.4}px)`;
      if (mouthguardRef.current) mouthguardRef.current.style.transform = `translateY(${y * 0.3}px)`;
      if (customersRef.current) customersRef.current.style.transform = `translateY(${y * 0.6}px)`;
      if (sealRef.current) sealRef.current.style.transform = `translateY(${y * 0.5}px)`;
      if (statRef.current) statRef.current.style.transform = `translateY(${y * 0.7}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px) rotate(-8deg); }
          50% { transform: translateY(-10px) rotate(-8deg); }
        }

        .hero-wrap {
          position: relative;
          width: 100%;
          height: 78vh;
          background: #FFFFFF;
          overflow: hidden;
        }

        .hero-boxer {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: auto;
          object-fit: contain;
          object-position: bottom center;
          z-index: 3;
          pointer-events: none;
          will-change: transform;
        }

        /* Outlined text layer (behind) */
        .hero-eikyo-wrap {
          position: absolute;
          bottom: -4%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          display: flex;
          gap: 0;
        }

        .hero-eikyo-letter {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26vw;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 4px;
          display: inline-block;
          will-change: transform, opacity;
          transform-origin: bottom center;
          /* Outlined stroke style matching reference */
          color: transparent;
          -webkit-text-stroke: 6px #E8171A;
          paint-order: stroke fill;
        }

        /* Solid fill text layer (in front, same position) */
        .hero-eikyo-wrap-fill {
          position: absolute;
          bottom: -4%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          display: flex;
          gap: 0;
        }

        .hero-eikyo-letter-fill {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 26vw;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 4px;
          display: inline-block;
          will-change: transform, opacity;
          transform-origin: bottom center;
          color: #E8171A;
          -webkit-text-stroke: 0px transparent;
        }

        .hero-glove {
          position: absolute;
          top: 8%;
          left: 22%;
          width: 95px;
          z-index: 4;
          transform: rotate(-8deg);
          will-change: transform;
          animation: floatBob 3s ease-in-out infinite;
        }

        .hero-mouthguard {
          position: absolute;
          bottom: 24%;
          left: 6%;
          width: 150px;
          z-index: 4;
          opacity: 0.42;
          will-change: transform;
        }

        .hero-customers {
          position: absolute;
          top: 7%;
          right: 5%;
          z-index: 4;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: #000000;
          letter-spacing: 0.05em;
          margin: 0;
          will-change: transform;
        }

        .hero-jerseys {
          position: absolute;
          top: 18%;
          right: 4%;
          width: 185px;
          z-index: 4;
        }

        .hero-choice-mask {
          position: absolute;
          bottom: 32%;
          left: 3%;
          z-index: 4;
          overflow: hidden;
        }

        .hero-choice {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 5px;
          color: #000000;
          text-transform: uppercase;
          margin: 0;
          will-change: transform, opacity;
        }

        .hero-stat {
          position: absolute;
          bottom: 13%;
          left: 3%;
          z-index: 4;
          will-change: transform;
        }

        .hero-stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3.4rem;
          font-weight: 900;
          color: #000000;
          line-height: 1;
          margin: 0;
        }

        .hero-stat-label {
          font-size: 0.82rem;
          color: #000000;
          margin: 4px 0 0 0;
        }

        .hero-whatsapp {
          position: absolute;
          bottom: 3%;
          left: 3%;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .hero-wa-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-seal-wrap {
          position: absolute;
          bottom: 4%;
          right: 2%;
          width: 115px;
          z-index: 4;
          will-change: transform;
        }

        .hero-seal-svg {
          width: 100%;
          height: 100%;
          animation: heroSpin 8s linear infinite;
        }

        .hero-seal-logo {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-wrap { height: 100svh; }
          .hero-eikyo-wrap,
          .hero-eikyo-wrap-fill { bottom: -2%; }
          .hero-eikyo-letter,
          .hero-eikyo-letter-fill { font-size: 40vw; -webkit-text-stroke-width: 3px; }
          .hero-boxer { height: 80%; }
          .hero-glove,
          .hero-mouthguard,
          .hero-customers,
          .hero-jerseys,
          .hero-seal-wrap { display: none; }
          .hero-choice { font-size: 0.7rem; }
          .hero-choice-mask { bottom: 28%; }
          .hero-stat { bottom: 10%; }
        }
      `}</style>

      <section className="hero-wrap" ref={sectionRef}>
        {/* Outlined text layer */}
        <div className="hero-eikyo-wrap" aria-hidden="true">
          {EIKYO_LETTERS.map((letter, i) => (
            <span
              key={`stroke-${i}`}
              className="hero-eikyo-letter"
              ref={(el) => { lettersRef.current[i] = el; }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Solid fill text layer */}
        <h1 className="hero-eikyo-wrap-fill">
          {EIKYO_LETTERS.map((letter, i) => (
            <span
              key={`fill-${i}`}
              className="hero-eikyo-letter-fill"
              ref={(el) => { lettersRef.current[EIKYO_LETTERS.length + i] = el; }}
            >
              {letter}
            </span>
          ))}
        </h1>

        <img src={fighterImg} alt="Fighter" className="hero-boxer" ref={boxerRef} />

        <img src={pinkGloveImg} alt="" aria-hidden="true" className="hero-glove" ref={gloveRef} />

        <img src={mouthGuardImg} alt="" aria-hidden="true" className="hero-mouthguard" ref={mouthguardRef} />

        <p className="hero-customers" ref={customersRef}>5K+ CUSTOMERS</p>

        <img src={jerseyFanImg} alt="" aria-hidden="true" className="hero-jerseys" ref={jerseysRef} />

        <div className="hero-choice-mask">
          <p className="hero-choice" ref={choiceRef}>CHOICE OF CHAMPIONS</p>
        </div>

        <div className="hero-stat" ref={statRef}>
          <p className="hero-stat-num">10+</p>
          <p className="hero-stat-label">Years Of Experience</p>
        </div>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-whatsapp"
        >
          <div className="hero-wa-icon">
            <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: "white" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.804-6.352-2.158l-.324-.255-3.363 1.128 1.128-3.363-.255-.324A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#000" }}>WhatsApp</span>
        </a>

        <div className="hero-seal-wrap" ref={sealRef}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "1" }}>
            <svg viewBox="0 0 200 200" className="hero-seal-svg">
              <defs>
                <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text style={{ fontSize: 15, fontWeight: "bold", fill: "#000", letterSpacing: "0.3em" }}>
                <textPath href="#circlePath">• EIKYO INTERNATIONAL • EIKYO INTERNATIONAL •</textPath>
              </text>
            </svg>
            <div className="hero-seal-logo">
              <img src={logoImg} alt="EIKYO" style={{ width: 48, height: 48, objectFit: "contain", borderRadius: "50%" }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
