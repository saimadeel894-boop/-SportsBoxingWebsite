import glovesImg from "@/assets/boxing-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-14 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Top row: Logo + About Us heading + decorative gloves */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center mb-10 md:mb-16">
          {/* Left: Logo — hidden on mobile to save space */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-center gap-4">
            <img
              src={logoImg}
              alt="Eikyo International"
              className="w-32 md:w-56 object-contain"
            />
          </div>

          {/* Center: About Us heading */}
          <div className="lg:col-span-4 text-center">
            <h2 className="font-heading font-black text-2xl md:text-5xl lg:text-6xl text-foreground uppercase">
              About Us
            </h2>
            <p className="font-heading font-bold text-sm md:text-xl text-primary uppercase tracking-wider mt-2 md:mt-3">
              Combat Sports Excellence
            </p>
          </div>

          {/* Right: decorative product image — hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-4 justify-center">
            <img
              src={glovesImg}
              alt=""
              aria-hidden="true"
              className="w-28 md:w-48 object-contain opacity-80"
            />
          </div>
        </div>

        {/* Description text */}
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
            Eikyo International® is headquartered in Sialkot, Pakistan, and powered by global expertise.
            We specialise in manufacturing premium boxing, martial arts, MMA, and sports gear where
            enduring quality meets modern performance.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-lg">
            Driven by passion and precision, every Eikyo International® product is designed to empower
            athletes at every level — from beginners to elite professionals — ensuring maximum comfort,
            durability, and confidence in every movement.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-8 md:mt-10">
          <a
            href="#"
            className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3.5 md:px-10 md:py-4 hover:bg-primary/90 transition-colors"
          >
            Know About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
