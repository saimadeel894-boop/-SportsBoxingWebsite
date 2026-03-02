import fighterImg from "@/assets/fighter-hero.webp";
import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden" style={{ height: "min(100vh, 950px)" }}>
      {/* === LAYER 1: Solid red brand text — BEHIND fighter === */}
      <h1
        className="absolute pointer-events-none select-none font-accent whitespace-nowrap"
        style={{
          fontSize: "clamp(220px, 22vw, 420px)",
          lineHeight: "0.92",
          letterSpacing: "0.08em",
          color: "#FF3A2D",
          WebkitTextStroke: "4px #FF0000",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -35%)",
          zIndex: 1,
        }}
      >
        EIKYO
      </h1>

      {/* === LAYER 2: Fighter image — ABOVE solid text === */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 0,
          zIndex: 2,
          height: "95%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <img
          src={fighterImg}
          alt="Professional fighter in fighting stance"
          className="h-full w-auto object-contain object-bottom"
        />
      </div>

      {/* === LAYER 3: Outline text — IN FRONT of fighter (3D depth effect) === */}
      <h1
        className="absolute pointer-events-none select-none font-accent whitespace-nowrap"
        style={{
          fontSize: "clamp(220px, 22vw, 420px)",
          lineHeight: "0.92",
          letterSpacing: "0.08em",
          color: "transparent",
          WebkitTextStroke: "4px #FF3A2D",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -35%)",
          zIndex: 3,
        }}
      >
        EIKYO
      </h1>

      {/* === "choice of champions" — left side === */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{ left: "12%", top: "60%", zIndex: 4 }}
      >
        <p className="font-heading text-lg md:text-[23px] font-bold text-foreground uppercase" style={{ letterSpacing: "3px" }}>
          choice of champions
        </p>
      </div>

      {/* === 5K+ CUSTOMERS — top right === */}
      <div
        className="absolute"
        style={{ right: "8%", top: "7%", zIndex: 4 }}
      >
        <h3
          className="font-accent text-2xl md:text-[30px] text-foreground leading-tight"
        >
          5k+<br />Customers
        </h3>
        <div className="flex -space-x-2 mt-3">
          {[glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-contain bg-secondary border-2 border-white"
            />
          ))}
        </div>
      </div>

      {/* === 10+ Years Of Experience — bottom left === */}
      <div
        className="absolute"
        style={{ left: "12%", bottom: "15%", zIndex: 4 }}
      >
        <h3 className="font-accent text-5xl md:text-7xl text-foreground leading-none">10+</h3>
        <p className="font-heading text-sm md:text-base text-foreground/70 mt-1">Years Of Experience</p>
      </div>

      {/* === Floating products — clean PNGs, no containers === */}
      <img
        src={glovesImg}
        alt=""
        aria-hidden="true"
        className="absolute w-24 md:w-36 animate-float-1"
        style={{ top: "10%", left: "5%", zIndex: 5 }}
      />
      <img
        src={headguardImg}
        alt=""
        aria-hidden="true"
        className="absolute w-16 md:w-28 animate-float-2 opacity-60"
        style={{ top: "8%", right: "22%", zIndex: 5 }}
      />
      <img
        src={uniformImg}
        alt=""
        aria-hidden="true"
        className="absolute w-24 md:w-36 animate-float-3 opacity-80"
        style={{ bottom: "12%", left: "4%", zIndex: 5 }}
      />
      <img
        src={shinGuardsImg}
        alt=""
        aria-hidden="true"
        className="absolute w-16 md:w-24 animate-float-4 opacity-50"
        style={{ bottom: "30%", right: "4%", zIndex: 5 }}
      />

      {/* === Circular brand badge — bottom right === */}
      <div
        className="absolute"
        style={{ right: "6%", bottom: "10%", zIndex: 5 }}
      >
        <div className="relative w-28 h-28 md:w-44 md:h-44">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
            <defs>
              <path
                id="circlePath"
                d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
            </defs>
            <text className="fill-foreground font-heading text-[15px] font-bold uppercase tracking-[0.3em]">
              <textPath href="#circlePath">
                • EIKYO INTERNATIONAL • EIKYO INTERNATIONAL •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logoImg} alt="EIKYO International" className="w-12 h-12 md:w-20 md:h-20 object-contain rounded-full" />
          </div>
        </div>
      </div>

      {/* === Mobile: choice of champions at bottom center === */}
      <div className="absolute bottom-[22%] left-0 right-0 pointer-events-none md:hidden text-center" style={{ zIndex: 4 }}>
        <p className="font-heading text-xs font-bold text-foreground uppercase tracking-[0.15em]">
          choice of champions
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
