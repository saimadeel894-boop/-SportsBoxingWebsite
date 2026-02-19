import boxerImg from "@/assets/boxer-hero.png";
import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden bg-background">
      {/* === LAYER 1: Center fighter — bottom-aligned === */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[1] pointer-events-none flex justify-center">
        <img
          src={boxerImg}
          alt="Professional boxer in fighting stance"
          className="h-[82vh] md:h-[88vh] max-w-[500px] md:max-w-[550px] lg:max-w-[600px] object-contain object-bottom"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* === LAYER 2: Giant brand text — overlapping fighter === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[2]">
        <h1
          className="font-heading font-black leading-[0.85] text-primary tracking-[-0.04em] whitespace-nowrap opacity-90"
          style={{ fontSize: "clamp(100px, 18vw, 340px)" }}
        >
          EIKYO
        </h1>
      </div>

      {/* === LAYER 3: Floating product — boxing glove top-left area === */}
      <img
        src={glovesImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[18%] left-[28%] md:left-[30%] w-16 md:w-24 lg:w-28 z-[3] animate-float-1 pointer-events-none select-none drop-shadow-lg"
      />

      {/* === LAYER 3: Floating product — glove bottom center-left === */}
      <img
        src={glovesImg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[8%] left-[28%] md:left-[32%] w-14 md:w-20 lg:w-24 z-[3] animate-float-2 pointer-events-none select-none drop-shadow-lg"
      />

      {/* === LAYER 3: Floating product — martial arts uniform far left === */}
      <img
        src={uniformImg}
        alt=""
        aria-hidden="true"
        className="absolute top-[28%] left-0 md:left-[2%] w-20 md:w-28 lg:w-36 z-[3] animate-float-3 pointer-events-none select-none drop-shadow-lg"
      />

      {/* === LAYER 4: 5K+ Customers — top right === */}
      <div className="absolute top-[80px] md:top-[100px] right-[30px] md:right-[100px] z-[4]">
        <p className="font-heading font-black text-xl md:text-2xl lg:text-3xl text-foreground leading-none tracking-wider uppercase">
          5K+ <span className="text-base md:text-lg lg:text-xl">Customers</span>
        </p>
        {/* Product thumbnail row */}
        <div className="flex gap-1 mt-3">
          {[glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg, uniformImg].map((src, i) => (
            <div
              key={i}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary overflow-hidden border-2 border-background shadow-sm"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* === LAYER 4: 30+ Years Experience — bottom left === */}
      <div className="absolute bottom-[60px] md:bottom-[80px] left-[30px] md:left-[120px] z-[4]">
        <p className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-foreground leading-none">
          30+
        </p>
        <p className="font-heading font-medium text-sm md:text-base text-foreground tracking-wide mt-1">
          Years Of Experience
        </p>
        {/* WhatsApp */}
        <div className="flex items-center gap-2 mt-4">
          <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.702-1.236A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.32 0-4.47-.767-6.2-2.063l-.353-.283-3.66.963.978-3.572-.31-.493A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </div>
          <span className="font-heading text-xs font-semibold text-foreground">WhatsApp</span>
        </div>
      </div>

      {/* === LAYER 4: Circular brand badge — bottom right === */}
      <div className="absolute bottom-[50px] md:bottom-[70px] right-[30px] md:right-[90px] z-[4]">
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-[150px] lg:h-[150px]">
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
            <img src={logoImg} alt="Eikyo" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full" />
          </div>
        </div>
      </div>

      {/* === Subtle "choice of champions" text — below center === */}
      <div className="absolute bottom-[22%] md:bottom-[18%] left-1/2 -translate-x-1/2 z-[1] pointer-events-none select-none">
        <p className="font-heading text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.3em]">
          choice of champions
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
