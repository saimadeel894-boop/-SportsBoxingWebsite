import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import uniformImg from "@/assets/martial-arts-uniform.png";

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary/30">
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

        {/* Product grid — 2 small left, 1 large center, 1 small right */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Left column — 2 stacked */}
          <div className="flex flex-col gap-4">
            <a href="#" className="group bg-background p-5 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square flex items-center justify-center">
                <img src={uniformImg} alt="Karate Uniform" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mt-3">Karate Uniform</h3>
              <p className="text-xs text-muted-foreground mt-1">AS-02-101</p>
            </a>
            <a href="#" className="group bg-background p-5 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square flex items-center justify-center">
                <img src={shinGuardsImg} alt="Punching Bag" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mt-3">Punching Bag</h3>
              <p className="text-xs text-muted-foreground mt-1">AS-01-4401</p>
            </a>
          </div>

          {/* Center — featured large product spanning 2 columns */}
          <a href="#" className="group bg-background p-8 text-center hover:shadow-lg transition-shadow col-span-2 flex flex-col items-center justify-center">
            <div className="flex-1 flex items-center justify-center w-full">
              <img
                src={glovesImg}
                alt="Boxing Glove"
                className="max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground uppercase tracking-wider mt-4">Boxing Glove</h3>
            <p className="text-sm text-muted-foreground mt-1">AB-858</p>
          </a>

          {/* Right column — 1 product */}
          <div className="flex flex-col gap-4">
            <a href="#" className="group bg-background p-5 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-square flex items-center justify-center">
                <img src={mmaGlovesImg} alt="MMA Shorts" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mt-3">MMA Shorts</h3>
              <p className="text-xs text-muted-foreground mt-1">AS-07-201</p>
            </a>
            <div className="bg-background p-5 flex-1" />
          </div>
        </div>

        {/* Description text below products */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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
          <div className="flex justify-center">
            <img src={headguardImg} alt="" className="w-48 md:w-64 object-contain opacity-80" />
          </div>
        </div>

        {/* Catalogue CTA image */}
        <div className="mt-12 flex justify-center">
          <a href="#" className="group">
            <img src={glovesImg} alt="View Catalogue" className="w-full max-w-md object-contain transition-transform duration-500 group-hover:scale-105" />
          </a>
        </div>

        {/* Second paragraph block */}
        <div className="mt-12 max-w-4xl mx-auto space-y-4">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Eikyo International is an emerging brand, and our products are incredibly popular in the online market
            and sports stores around the world. We take pride in the high quality of our products and the great
            value they offer to customers. We elevate sports to a higher level, as our products are endorsed by professional athletes and trainers.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            With the capacity to produce thousands of personalized sportswear items per month, we continuously
            invest in the latest technology and, more importantly, in the people who work for us. They ensure a product and service that our customers can rely on.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
