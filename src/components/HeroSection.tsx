import boxerImg from "@/assets/boxer-hero.png";
import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-background">
      {/* 
        Layer stack:
        z-1: Giant brand text (background anchor)
        z-2: Fighter image (overlaps text, text visible behind body)
        z-3: Subtitle
        z-4: All supporting UI (stats, floating products, badge)
      */}

      {/* === LAYER 1: Giant brand text — visual anchor === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1]">
        <h1
          className="font-heading font-black leading-[0.85] text-primary tracking-[-0.05em] whitespace-nowrap"
          style={{ fontSize: "clamp(100px, 15vw, 280px)" }}
        >
          EIKYO
        </h1>
      </div>

      {/* === LAYER 2: Center fighter — bottom-aligned, centered === */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] pointer-events-none">
        <img
          src={boxerImg}
          alt="Professional boxer in fighting stance"
          className="h-[82vh] md:h-[88vh] w-auto object-contain"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* === LAYER 3: Subtitle — center, below mid === */}
      <div className="absolute bottom-[18%] md:bottom-[22%] left-1/2 -translate-x-1/2 z-[3] pointer-events-none select-none">
        <p className="font-heading font-black text-sm md:text-base lg:text-lg text-foreground uppercase tracking-[0.25em]">
          Choice Of Champions
        </p>
      </div>

      {/* === LAYER 4: All supporting elements === */}

      {/* -- Floating product: Boxing glove — top left -- */}
      <img
        src={glovesImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[10%] left-[12%] md:left-[16%] w-20 md:w-28 lg:w-32 z-[4] animate-float-1 pointer-events-none select-none opacity-85"
      />
      {/* Arrow pointing to glove */}
      <svg
        className="absolute top-[8%] left-[24%] md:left-[26%] w-8 h-8 z-[4] text-primary animate-float-1"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path d="M30 5L15 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 20L18 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 20L22 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* -- Floating product: headguard — mid-left -- */}
      <img
        src={headguardImg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[30%] left-[4%] md:left-[7%] w-14 md:w-20 lg:w-24 z-[4] animate-float-3 pointer-events-none select-none opacity-75"
      />

      {/* -- Floating product: uniform — bottom right -- */}
      <img
        src={uniformImg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[18%] right-[14%] md:right-[20%] w-14 md:w-22 lg:w-26 z-[4] animate-float-2 pointer-events-none select-none opacity-75"
      />

      {/* -- 5K+ Customers — top right -- */}
      <div className="absolute top-[80px] md:top-[100px] right-[24px] md:right-[120px] z-[4] text-right">
        <div className="flex items-center justify-end gap-2">
          <svg className="w-10 h-4 text-primary" viewBox="0 0 50 15" fill="none">
            <path d="M0 8H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M40 8L34 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M40 8L34 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <div>
            <p className="font-heading font-black text-xl md:text-2xl lg:text-3xl text-foreground leading-none">
              5K+
            </p>
            <p className="font-heading font-bold text-[10px] md:text-xs text-foreground uppercase tracking-[0.2em]">
              Customers
            </p>
          </div>
        </div>
        {/* Product thumbnail row */}
        <div className="flex gap-1.5 mt-3 justify-end">
          {[glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg, uniformImg].map((src, i) => (
            <div
              key={i}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary overflow-hidden border-2 border-background shadow-sm"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <svg className="w-10 h-4 text-primary mt-2 ml-auto" viewBox="0 0 50 15" fill="none">
          <path d="M0 8H40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 8L34 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 8L34 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* -- 30+ Years Experience — bottom left -- */}
      <div className="absolute bottom-[60px] md:bottom-[80px] left-[20px] md:left-[80px] z-[4]">
        <svg className="w-5 h-8 text-primary mb-2" viewBox="0 0 20 40" fill="none">
          <path d="M10 0L10 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 32L4 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 32L16 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <p className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-none">
          30+
        </p>
        <p className="font-heading font-bold text-[11px] md:text-sm text-foreground uppercase tracking-wider mt-1">
          Years Of Experience
        </p>
        {/* WhatsApp */}
        <div className="flex items-center gap-2 mt-3">
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.702-1.236A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.32 0-4.47-.767-6.2-2.063l-.353-.283-3.66.963.978-3.572-.31-.493A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
          <span className="font-heading text-xs font-semibold text-foreground">WhatsApp</span>
        </div>
      </div>

      {/* -- Circular brand badge — bottom right -- */}
      <div className="absolute bottom-[50px] md:bottom-[80px] right-[24px] md:right-[100px] z-[4]">
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-[140px] lg:h-[140px]">
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
            <span className="text-primary text-3xl lg:text-4xl font-heading font-bold">♥</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
