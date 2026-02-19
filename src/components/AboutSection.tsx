import boxerImg from "@/assets/boxer-hero.png";
import glovesImg from "@/assets/boxing-gloves.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
            About Us
          </p>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            About Us
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Image with floating product */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-secondary">
              <img
                src={boxerImg}
                alt="Eikyo International athlete"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating product accent */}
            <img
              src={glovesImg}
              alt=""
              aria-hidden="true"
              className="absolute -top-6 -right-6 w-24 md:w-28 hidden md:block drop-shadow-lg"
            />
          </div>

          {/* Right — Text content */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading font-bold text-lg text-primary uppercase tracking-wider mb-4">
              Boxing
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              Eikyo International® is based in Sialkot, Pakistan and powered by global expertise. 
              We develop boxing, martial arts, MMA, and sports gear where enduring quality meets modern performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              At Eikyo International®, we bring together global expertise and innovation to redefine 
              excellence in combat sports equipment. Our mission is simple yet powerful — to create boxing, 
              martial arts, MMA, and sports gear that blends enduring quality with modern performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              Driven by passion and precision, every Eikyo International® product is designed to empower 
              athletes at every level — from amateurs to professionals — ensuring maximum comfort, durability, 
              and confidence in every movement.
            </p>
            <a
              href="#"
              className="inline-block self-start font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
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
