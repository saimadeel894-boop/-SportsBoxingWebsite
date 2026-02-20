import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            Our Product
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Discover our most trusted and high-performance gear — handpicked to represent the best in quality and innovation.
          </p>
        </div>

        {/* Product grid — matches reference: 2 small left, 1 large center, 2 small right */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {/* Left column — 2 stacked */}
          <div className="flex flex-col gap-5">
            <a href="#" className="group bg-background p-6 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square flex items-center justify-center">
                <img src={headguardImg} alt="Karate Uniform" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mt-4">Karate Uniform</h3>
              <p className="text-xs text-muted-foreground mt-1">AS-02-101</p>
            </a>
            <a href="#" className="group bg-background p-6 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square flex items-center justify-center">
                <img src={shinGuardsImg} alt="Punching Bag" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mt-4">Punching Bag</h3>
              <p className="text-xs text-muted-foreground mt-1">AS-01-4401</p>
            </a>
          </div>

          {/* Center — featured large product spanning 2 columns */}
          <a href="#" className="group bg-background p-8 text-center hover:shadow-lg transition-shadow lg:col-span-2 flex flex-col items-center justify-center">
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={glovesImg}
                alt="Boxing Glove"
                className="max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground uppercase tracking-wider mt-4">Boxing Glove</h3>
            <p className="text-sm text-muted-foreground mt-1">AB-858</p>
          </a>

          {/* Right column — 2 stacked */}
          <div className="flex flex-col gap-5">
            <a href="#" className="group bg-background p-6 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square flex items-center justify-center">
                <img src={mmaGlovesImg} alt="MMA Shorts" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mt-4">MMA Shorts</h3>
              <p className="text-xs text-muted-foreground mt-1">AS-07-201</p>
            </a>
            <div className="bg-background p-6 flex-1" />
          </div>
        </div>

        {/* Description text below products — matching reference */}
        <div className="mt-16 max-w-4xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
            Thanks to our exceptional quality and competitive prices, we have the privilege of creating 
            significant value for our customers. Athletes and sports professionals promote our products, 
            driving perfection.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            The business strategy of Eikyo International is simple: produce a high-quality product quickly 
            and efficiently with meticulous attention to detail, while providing exceptional customer service. 
            We deliver worldwide, proving that technological advancements in business have made the world a much smaller place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
