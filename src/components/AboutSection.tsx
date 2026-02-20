import glovesImg from "@/assets/boxing-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Top row: Logo + About Us heading + year/boxing label */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Logo */}
          <div className="lg:col-span-4 flex justify-center">
            <img
              src={logoImg}
              alt="Eikyo International"
              className="w-40 md:w-56 object-contain"
            />
          </div>

          {/* Center: About Us heading */}
          <div className="lg:col-span-4 text-center">
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-foreground uppercase">
              About Us
            </h2>
            <p className="font-heading font-bold text-lg md:text-xl text-primary uppercase tracking-wider mt-3">
              Boxing
            </p>
          </div>

          {/* Right: decorative product image */}
          <div className="lg:col-span-4 flex justify-center">
            <img
              src={glovesImg}
              alt=""
              aria-hidden="true"
              className="w-36 md:w-48 object-contain opacity-80"
            />
          </div>
        </div>

        {/* Description text */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Eikyo International® is based in Sialkot, Pakistan and powered by global expertise. 
            It develops boxing, martial arts, MMA, and sports gear where enduring quality meets modern performance.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Driven by passion and precision, every Eikyo International® product is designed to empower athletes 
            at every level — from amateurs to professionals — ensuring maximum comfort, durability, and confidence 
            in every movement.
          </p>
        </div>

        {/* Catalogue CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-colors"
          >
            Know About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
