import boxerImg from "@/assets/boxer-hero.png";
import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-background">
      {/* === LAYER 1: Center fighter — behind text === */}
      <div className="absolute inset-0 flex items-end justify-center z-[1] pointer-events-none">
        <img
          src={boxerImg}
          alt="Professional fighter in fighting stance"
          className="h-[55vh] md:h-[88vh] lg:h-[92vh] max-w-[240px] md:max-w-[560px] lg:max-w-[620px] object-contain object-bottom"
        />
      </div>

      {/* === LAYER 2: Giant brand text — overlaps fighter === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[2]">
        <h1
          className="font-black leading-[0.85] text-primary tracking-[-0.02em] whitespace-nowrap"
          style={{ fontSize: "clamp(60px, 20vw, 380px)", opacity: 0.82, fontFamily: "'Anton', sans-serif" }}
        >
          EIKYO
        </h1>
      </div>

      {/* === Floating products === */}
      <img
        src={glovesImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[12%] left-[4%] md:top-[12%] md:left-[24%] w-14 md:w-32 lg:w-36 z-[3] animate-float-1 pointer-events-none select-none opacity-70 mix-blend-multiply"
      />
      <img
        src={headguardImg}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-[8%] left-[42%] w-28 lg:w-32 z-[1] animate-float-2 pointer-events-none select-none opacity-40 mix-blend-multiply"
      />
      <img
        src={uniformImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[30%] md:top-[22%] left-[2%] md:left-[1%] w-14 md:w-36 lg:w-44 z-[3] animate-float-3 pointer-events-none select-none opacity-60 mix-blend-multiply"
      />
      <img
        src={glovesImg}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute bottom-[2%] left-[26%] w-28 lg:w-32 z-[3] animate-float-4 pointer-events-none select-none opacity-60 mix-blend-multiply"
      />
      <img
        src={shinGuardsImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[45%] md:top-[38%] right-[3%] md:right-[6%] w-12 md:w-24 lg:w-28 z-[1] animate-float-5 pointer-events-none select-none opacity-30 mix-blend-multiply"
      />

      {/* === "choice of champions" === */}
      <div className="absolute top-[38%] md:top-[32%] left-1/2 -translate-x-1/2 z-[4] pointer-events-none select-none">
        <p className="font-heading text-[7px] md:text-xs text-muted-foreground uppercase tracking-[0.35em]">
          choice of champions
        </p>
      </div>

      {/* === 5K+ Customers — top right === */}
      <div className="absolute top-[70px] md:top-[140px] right-[12px] md:right-[100px] lg:right-[140px] z-[5]">
        <p className="font-heading font-black text-sm md:text-3xl lg:text-4xl text-foreground leading-none tracking-wider uppercase">
          5K+ <span className="text-[10px] md:text-xl lg:text-2xl font-bold">Customers</span>
        </p>
        <div className="flex gap-1 md:gap-1.5 mt-1 md:mt-4">
          {[glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg, uniformImg].map((src, i) => (
            <div
              key={i}
              className="w-5 h-5 md:w-11 md:h-11 rounded-full bg-secondary overflow-hidden border-2 border-background shadow-sm"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* === 10 Years Experience — bottom left === */}
      <div className="absolute bottom-[70px] md:bottom-[100px] left-[12px] md:left-[100px] lg:left-[140px] z-[5]">
        <p className="font-heading font-black text-2xl md:text-7xl lg:text-8xl text-foreground leading-none">
          10
        </p>
        <p className="font-heading font-medium text-[9px] md:text-lg text-foreground tracking-wide mt-0.5 md:mt-1">
          Years Of Experience
        </p>
        <div className="flex items-center gap-1.5 md:gap-2.5 mt-1.5 md:mt-6">
          <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
            <svg viewBox="0 0 24 24" className="w-3 h-3 md:w-5 md:h-5 text-primary-foreground fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.702-1.236A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.32 0-4.47-.767-6.2-2.063l-.353-.283-3.66.963.978-3.572-.31-.493A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
          <span className="font-heading text-[9px] md:text-sm font-semibold text-foreground">WhatsApp</span>
        </div>
      </div>

      {/* === Circular brand badge — bottom right === */}
      <div className="absolute bottom-[55px] md:bottom-[70px] right-[12px] md:right-[100px] lg:right-[140px] z-[5]">
        <div className="relative w-16 h-16 md:w-40 md:h-40 lg:w-[180px] lg:h-[180px]">
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
            <img src={logoImg} alt="Eikyo" className="w-6 h-6 md:w-16 md:h-16 object-contain rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
