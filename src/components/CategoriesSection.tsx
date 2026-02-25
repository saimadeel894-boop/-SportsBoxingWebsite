import categoryBoxing from "@/assets/category-boxing.png";
import categoryMartialArts from "@/assets/category-martial-arts.png";
import glovesImg from "@/assets/boxing-gloves.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import headguardImg from "@/assets/headguard.png";

const CategoriesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase tracking-wider">
            Our Categories
          </h2>
        </div>

        {/* Categories preview grid — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <a href="#" className="group relative aspect-[4/3] overflow-hidden bg-secondary rounded-lg">
            <img src={categoryBoxing} alt="Boxing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
            <h3 className="absolute bottom-6 left-6 font-heading font-black text-2xl md:text-3xl text-background uppercase">Boxing</h3>
          </a>
          <a href="#" className="group relative aspect-[4/3] overflow-hidden bg-secondary rounded-lg">
            <img src={categoryMartialArts} alt="Martial Arts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
            <h3 className="absolute bottom-6 left-6 font-heading font-black text-2xl md:text-3xl text-background uppercase">Martial Arts</h3>
          </a>
        </div>

        {/* === Category Detail: Boxing === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={glovesImg} alt="Boxing gloves" className="w-full object-contain bg-secondary rounded-lg p-6" style={{ mixBlendMode: "multiply" }} />
              <img src={headguardImg} alt="Headguard" className="w-full object-contain bg-secondary rounded-lg p-6" style={{ mixBlendMode: "multiply" }} />
            </div>
          </div>
          <div>
            <div className="w-10 h-1 bg-primary mb-5" />
            <h3 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground uppercase mb-6">
              Boxing
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              Our boxing gear is crafted to support every fighter, from training sessions to championship rounds.
              With durable materials, ergonomic design, and unmatched comfort, we make equipment that helps you
              focus on your performance and unleash your true power in the ring.
            </p>
            <a
              href="#"
              className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary/90 transition-colors"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* === Category Detail: Martial Arts — reversed === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img src={mmaGlovesImg} alt="MMA gloves" className="w-full object-contain bg-secondary rounded-lg p-6" style={{ mixBlendMode: "multiply" }} />
              <img src={categoryMartialArts} alt="Martial Arts" className="w-full object-cover bg-secondary rounded-lg" />
            </div>
          </div>
          <div className="lg:order-1">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h3 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground uppercase mb-6">
              Martial Arts
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              Martial arts is the art of balance — between body, mind, and spirit. Our martial arts equipment
              is designed to provide the protection, flexibility, and durability that practitioners need for
              training and competition. Built with respect for tradition and a focus on performance, our gear supports every move with precision.
            </p>
            <a
              href="#"
              className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary/90 transition-colors"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* === Category Detail: Our Catalogue === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <img src={glovesImg} alt="Our Catalogue" className="w-full h-full object-contain p-8" style={{ mixBlendMode: "multiply" }} />
            </div>
          </div>
          <div>
            <div className="w-10 h-1 bg-primary mb-5" />
            <h3 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-foreground uppercase mb-6">
              Our Catalogue
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm md:text-base">
              Step into the ring with confidence and power. Our Martial Arts & Boxing Collection is built
              for champions — combining precision craftsmanship, durable materials, and ergonomic designs
              to deliver unmatched performance and protection.
            </p>
            <a
              href="#"
              className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary/90 transition-colors"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
