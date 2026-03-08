import glovesImg from "@/assets/boxing-gloves.png";
import uniformImg from "@/assets/martial-arts-uniform.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#F5F0EB] relative overflow-hidden">
      {/* Green fingerprint wave pattern — subtle SVG background */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <ellipse cx="200" cy="300" rx="300" ry="250" fill="none" stroke="#2D6A4F" strokeWidth="2" />
          <ellipse cx="200" cy="300" rx="250" ry="200" fill="none" stroke="#2D6A4F" strokeWidth="2" />
          <ellipse cx="200" cy="300" rx="200" ry="150" fill="none" stroke="#2D6A4F" strokeWidth="2" />
          <ellipse cx="200" cy="300" rx="150" ry="100" fill="none" stroke="#2D6A4F" strokeWidth="2" />
          <ellipse cx="600" cy="300" rx="280" ry="230" fill="none" stroke="#2D6A4F" strokeWidth="2" />
          <ellipse cx="600" cy="300" rx="230" ry="180" fill="none" stroke="#2D6A4F" strokeWidth="2" />
          <ellipse cx="600" cy="300" rx="180" ry="130" fill="none" stroke="#2D6A4F" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left */}
          <div>
            <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl text-muted-foreground/30 uppercase mb-8">
              About Us
            </h2>
            <div className="relative bg-primary rounded-2xl p-8 md:p-12 aspect-[4/3] flex items-center justify-center overflow-hidden">
              <h3 className="absolute top-6 left-6 md:top-8 md:left-8 font-heading text-primary-foreground text-4xl md:text-6xl uppercase z-10">
                Boxing
              </h3>
              <img src={glovesImg} alt="Boxing Gloves" className="max-h-[80%] w-auto object-contain relative z-10" />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <p className="font-body text-foreground text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              EIKYO International® is based in Sialkot and powered by global expertise. It develops boxing, martial arts, MMA, and sports gear where enduring quality meets modern performance.
            </p>
            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
              Driven by passion and precision, every EIKYO International® product is designed to empower athletes at every level — from amateurs to professionals — ensuring maximum comfort, durability, and confidence in every movement.
            </p>

            {/* Dark card with martial arts image */}
            <div className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden aspect-video mt-8">
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
