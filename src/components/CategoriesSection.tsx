import categoryBoxing from "@/assets/category-boxing.png";
import categoryMartialArts from "@/assets/category-martial-arts.png";
import glovesImg from "@/assets/boxing-gloves.png";
import logoImg from "@/assets/eikyo-logo.jpg";

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

        {/* Categories grid — 2 columns like reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
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

        {/* Category detail: Boxing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <img src={categoryBoxing} alt="Boxing equipment" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground uppercase mb-4">
              Boxing
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              Our boxing gear is crafted to support every fighter, from training sessions to championship rounds. 
              With durable materials, ergonomic design, and unmatched comfort, we make equipment that helps you 
              focus on your performance and unleash your true power in the ring.
            </p>
            <a
              href="#"
              className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Category detail: Martial Arts — reversed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="lg:order-2">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <img src={categoryMartialArts} alt="Martial Arts equipment" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:order-1">
            <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground uppercase mb-4">
              Martial Arts
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              Martial arts is the art of balance — between body, mind, and spirit. Our martial arts equipment 
              is designed to provide the protection, flexibility, and durability that practitioners need for 
              training and competition. Built with respect for tradition and a focus on performance.
            </p>
            <a
              href="#"
              className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Explore More
            </a>
          </div>
        </div>

        {/* Category detail: Our Catalogue — like reference */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
              <img src={glovesImg} alt="Our Catalogue" className="w-full h-full object-contain p-8 bg-muted" />
            </div>
          </div>
          <div>
            <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground uppercase mb-4">
              Our Catalogue
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              Step into the ring with confidence and power. Our Martial Arts & Boxing Collection is built 
              for champions — combining precision craftsmanship, durable materials, and ergonomic designs 
              to deliver unmatched performance and protection.
            </p>
            <a
              href="#"
              className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
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
