import { useEffect, useRef } from "react";
import fighterImg from "@/assets/fighter-hero.webp";
import pinkGloveImg from "@/assets/pink-glove.png";
import mouthGuardImg from "@/assets/mouth-guard.svg";
import jerseyFanImg from "@/assets/jersey-fan.webp";
import logoImg from "@/assets/eikyo-logo.jpg";

const HeroSection = () => {
  return (
    <>
      <style>{`
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .seal-spin {
          animation: heroSpin 12s linear infinite;
        }
        .hero-eikyo-text {
          position: absolute;
          bottom: -2%;
          left: 50%;
          transform: translateX(-50%) scaleX(1.55);
          transform-origin: bottom center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28vw;
          font-weight: 400;
          color: #E8171A;
          line-height: 1;
          letter-spacing: 6px;
          white-space: nowrap;
          z-index: 2;
          opacity: 1;
          -webkit-text-stroke: 0px transparent;
          user-select: none;
          pointer-events: none;
        }
      `}</style>

      <section
        style={{
          position: "relative",
          width: "100%",
          height: "80vh",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        {/* LAYER 1 — BOXER — BEHIND EVERYTHING */}
        <img
          src={fighterImg}
          alt="Fighter"
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            height: "95%",
            width: "auto",
            objectFit: "contain",
            objectPosition: "bottom center",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* LAYER 2 — EIKYO TEXT — IN FRONT OF BOXER */}
        <h1 className="hero-eikyo-text">EIKYO</h1>

        {/* LAYER 3 — PINK GLOVE top-left */}
        <img
          src={pinkGloveImg}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "5%",
            left: "20%",
            width: "100px",
            zIndex: 4,
            transform: "rotate(-10deg)",
          }}
        />

        {/* LAYER 3 — MOUTH GUARD lower-left */}
        <img
          src={mouthGuardImg}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "18%",
            left: "5%",
            width: "160px",
            zIndex: 4,
            opacity: 0.45,
          }}
        />

        {/* LAYER 3 — 5K+ CUSTOMERS top-right */}
        <div
          style={{
            position: "absolute",
            top: "6%",
            right: "5%",
            zIndex: 4,
          }}
        >
          <p style={{
            fontSize: "1.4rem",
            fontWeight: 900,
            color: "#000000",
            margin: 0,
            letterSpacing: "0.05em",
          }}>
            5K+ CUSTOMERS
          </p>
        </div>

        {/* LAYER 3 — JERSEY FAN right side */}
        <img
          src={jerseyFanImg}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "20%",
            right: "4%",
            width: "185px",
            zIndex: 4,
          }}
        />

        {/* LAYER 3 — CHOICE OF CHAMPIONS left */}
        <p
          style={{
            position: "absolute",
            bottom: "30%",
            left: "3%",
            fontSize: "0.82rem",
            fontWeight: 700,
            letterSpacing: "5px",
            color: "#000000",
            textTransform: "uppercase",
            zIndex: 4,
            margin: 0,
            background: "none",
            border: "none",
            padding: 0,
          }}
        >
          CHOICE OF CHAMPIONS
        </p>

        {/* LAYER 3 — 10+ STAT bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "13%",
            left: "3%",
            zIndex: 4,
          }}
        >
          <p style={{
            fontSize: "3.2rem",
            fontWeight: 900,
            color: "#000000",
            margin: 0,
            lineHeight: 1,
          }}>
            10+
          </p>
          <p style={{
            fontSize: "0.82rem",
            color: "#000000",
            margin: 0,
            marginTop: 4,
          }}>
            Years Of Experience
          </p>
        </div>

        {/* LAYER 3 — WHATSAPP bottom-left */}
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "3%",
            left: "3%",
            zIndex: 4,
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
          }}
        >
          <div style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg viewBox="0 0 24 24" style={{ width: 24, height: 24, fill: "white" }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.804-6.352-2.158l-.324-.255-3.363 1.128 1.128-3.363-.255-.324A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#000" }}>WhatsApp</span>
        </a>

        {/* LAYER 3 — BRAND SEAL bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "4%",
            right: "2%",
            width: "110px",
            zIndex: 4,
          }}
        >
          <div style={{ position: "relative", width: "100%", aspectRatio: "1" }}>
            <svg
              viewBox="0 0 200 200"
              style={{ width: "100%", height: "100%", animation: "heroSpin 12s linear infinite" }}
            >
              <defs>
                <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text style={{ fontSize: 15, fontWeight: "bold", fill: "#000", letterSpacing: "0.3em" }}>
                <textPath href="#circlePath">• EIKYO INTERNATIONAL • EIKYO INTERNATIONAL •</textPath>
              </text>
            </svg>
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img
                src={logoImg}
                alt="EIKYO"
                style={{ width: 48, height: 48, objectFit: "contain", borderRadius: "50%" }}
              />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default HeroSection;
