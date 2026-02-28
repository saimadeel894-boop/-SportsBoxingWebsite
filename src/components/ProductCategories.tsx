import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import trainingRopeImg from "@/assets/training-rope.png";

const ProductCategories = () => {
  return (
    <section id="products" className="py-14 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading font-black text-2xl md:text-4xl lg:text-5xl text-foreground uppercase">
            Our Product
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-3 md:mt-4 leading-relaxed text-sm">
            Discover our most trusted and high- performance gear — handpicked to represent the best in quality and innovation.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Left column — 2 stacked */}
          <div className="flex flex-col gap-3 md:gap-4">
            <a href="#" className="group bg-card border border-border p-3 md:p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="aspect-square flex items-center justify-center">
                <img src={uniformImg} alt="Karate Uniform" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-[10px] md:text-sm text-foreground uppercase tracking-wider mt-2 md:mt-3">Karate Uniform</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">AS-02-101</p>
            </a>
            <a href="#" className="group bg-card border border-border p-3 md:p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="aspect-square flex items-center justify-center">
                <img src={shinGuardsImg} alt="Shin Guards" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-[10px] md:text-sm text-foreground uppercase tracking-wider mt-2 md:mt-3">Punching bag</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">AS-01-4401</p>
            </a>
          </div>

          {/* Center — featured large product spanning 2 columns */}
          <a href="#" className="group bg-card border border-border p-4 md:p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 col-span-2 flex flex-col items-center justify-center">
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={glovesImg}
                alt="Boxing Glove"
                className="max-h-[180px] md:max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-heading font-bold text-sm md:text-2xl text-foreground uppercase tracking-wider mt-3 md:mt-4">Boxing Glove</h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1">AB-858</p>
            <span className="inline-block mt-2 md:mt-3 text-[10px] md:text-xs font-heading font-semibold text-primary uppercase tracking-wider">Best Seller</span>
          </a>

          {/* Right column — 2 stacked */}
          <div className="flex flex-col gap-3 md:gap-4">
            <a href="#" className="group bg-card border border-border p-3 md:p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="aspect-square flex items-center justify-center">
                <img src={mmaGlovesImg} alt="MMA Shorts" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-[10px] md:text-sm text-foreground uppercase tracking-wider mt-2 md:mt-3">MMA Shorts</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">AS-07-201</p>
            </a>
            <a href="#" className="group bg-card border border-border p-3 md:p-5 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="aspect-square flex items-center justify-center">
                <img src={headguardImg} alt="Head Guard" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-[10px] md:text-sm text-foreground uppercase tracking-wider mt-2 md:mt-3">Head Guard</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">AS-07-202</p>
            </a>
          </div>
        </div>

        {/* Description text below products */}
        <div className="mt-10 md:mt-16 space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Thanks to our exceptional quality and competitive prices, we have the privilege of creating significant value for our customers. Athletes and sports professionals promote our products, driving perfection.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            The business strategy of EIKYO International is simple: produce a high-quality product quickly and efficiently with meticulous
            attention to detail, while providing exceptional customer service. We deliver worldwide, proving that technological advancements in business have made the world a much smaller place.
          </p>
        </div>

        {/* Second paragraph block */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm">
            EIKYO International is a rapidly growing brand with strong demand across online marketplaces and
            sports retailers worldwide. We are committed to producing the finest combat sports equipment,
            endorsed by professional athletes, coaches, and gym owners who trust our quality.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            With the capacity to produce thousands of personalised sportswear items per month, we continuously
            invest in cutting-edge technology and, most importantly, in the skilled craftsmen who ensure every
            product meets the highest standards of quality and durability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
