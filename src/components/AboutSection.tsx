import glovesImg from "@/assets/boxing-gloves.png";
import uniformImg from "@/assets/martial-arts-uniform.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#F5F0E8" }}>
      {/* Green fingerprint wave pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <g stroke="#2D6A4F" fill="none" strokeWidth="1.5">
            <ellipse cx="300" cy="400" rx="280" ry="260" />
            <ellipse cx="300" cy="400" rx="240" ry="220" />
            <ellipse cx="300" cy="400" rx="200" ry="180" />
            <ellipse cx="300" cy="400" rx="160" ry="140" />
            <ellipse cx="300" cy="400" rx="120" ry="100" />
            <ellipse cx="900" cy="400" rx="260" ry="240" />
            <ellipse cx="900" cy="400" rx="220" ry="200" />
            <ellipse cx="900" cy="400" rx="180" ry="160" />
            <ellipse cx="900" cy="400" rx="140" ry="120" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <div className="relative">
            <h2
              className="font-heading text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.85] uppercase text-foreground/10 mb-6"
            >
              About Us
            </h2>
            <div className="relative bg-primary rounded-2xl p-8 md:p-10 aspect-[4/3] flex items-center justify-center overflow-hidden -mt-16 md:-mt-24">
              <h3 className="absolute top-6 left-6 md:top-8 md:left-8 font-heading text-white text-4xl md:text-5xl uppercase z-10">
                Boxing
              </h3>
              <img src={glovesImg} alt="Boxing Gloves" className="max-h-[75%] w-auto object-contain relative z-10" />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6 pt-4 lg:pt-10">
            <p
              className="text-foreground text-lg md:text-xl leading-relaxed font-medium"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              EIKYO International® Is Based In Wiesbaden And Powered By Global Expertise. It Develops Boxing, Martial Arts, MMA, And Sports Gear Where Enduring Quality Meets Modern Performance.
            </p>
            <p
              className="text-foreground/60 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Driven by passion and precision, every EIKYO International® product is designed to empower athletes at every level — from amateurs to professionals — ensuring maximum comfort, durability, and confidence in every movement.
            </p>

            {/* Dark card with martial arts image */}
            <div className="relative rounded-2xl overflow-hidden aspect-video mt-6" style={{ background: "#1A1A1A" }}>
              <img src={uniformImg} alt="Martial Arts" className="w-full h-full object-contain p-6" />
              <p className="absolute bottom-4 left-6 font-heading text-white text-2xl uppercase">Martial Arts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
