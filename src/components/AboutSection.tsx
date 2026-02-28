import glovesImg from "@/assets/boxing-gloves.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Two-column layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left side: About Us heading + Boxing card */}
          <div>
            <h2
              className="font-black text-4xl md:text-6xl lg:text-8xl text-foreground leading-[0.95] mb-6 md:mb-10"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              About Us
            </h2>

            {/* Red Boxing card with gloves image */}
            <div className="relative bg-primary rounded-3xl overflow-hidden aspect-[4/3] flex items-end justify-center">
              <h3
                className="absolute top-6 left-6 md:top-8 md:left-8 font-black text-3xl md:text-5xl text-primary-foreground uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Boxing
              </h3>
              <img
                src={glovesImg}
                alt="Boxing Gloves"
                className="w-[60%] md:w-[55%] object-contain relative z-[1]"
              />
            </div>
          </div>

          {/* Right side: Brand description text */}
          <div className="flex flex-col justify-start pt-0 lg:pt-16">
            <p className="text-foreground text-base md:text-xl lg:text-2xl leading-relaxed font-medium mb-6 md:mb-8">
              <span className="text-primary font-bold">EIKYO International®</span> is based in Wiesbaden and powered by global expertise. It develops boxing, martial arts,
              MMA, and sports gear where enduring quality meets modern performance.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 md:mb-10">
              Driven by passion and precision, every EIKYO International® product is designed to empower athletes
              at every level — from amateurs to professionals — ensuring maximum comfort, durability, and
              confidence in every movement. Our commitment to superior craftsmanship and cutting-edge materials reflects our dedication to performance without compromise.
            </p>
            <a
              href="#"
              className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3.5 md:px-10 md:py-4 hover:bg-primary/90 transition-colors self-start"
            >
              Know About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
