import boxerImg from "@/assets/boxer-hero.png";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
              <img
                src={boxerImg}
                alt="Eikyo International athlete"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-heading font-black text-4xl">30+</p>
              <p className="font-heading text-sm uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="font-heading text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
              About Us
            </p>
            <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase mb-6">
              Eikyo International
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Based in Sialkot, Pakistan — the global hub of sports manufacturing — Eikyo International 
              has been crafting premium combat sports equipment for over three decades. Our commitment 
              to quality, innovation, and athlete safety has made us the choice of champions worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From professional boxing gloves to martial arts uniforms, every product is manufactured 
              with precision and tested to meet international standards. We serve athletes, gyms, and 
              distributors across 50+ countries.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div>
                <p className="font-heading font-black text-2xl md:text-3xl text-primary">5K+</p>
                <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Customers</p>
              </div>
              <div>
                <p className="font-heading font-black text-2xl md:text-3xl text-primary">50+</p>
                <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Countries</p>
              </div>
              <div>
                <p className="font-heading font-black text-2xl md:text-3xl text-primary">500+</p>
                <p className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Products</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
