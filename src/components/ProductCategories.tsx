import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";

const products = [
  { name: "Boxing Glove", code: "AB-858", image: glovesImg, featured: true },
  { name: "Head Guard", code: "AS-02-101", image: headguardImg, featured: false },
  { name: "Shin Guard", code: "AS-01-4401", image: shinGuardsImg, featured: false },
  { name: "MMA Gloves", code: "AS-07-201", image: mmaGlovesImg, featured: false },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
            Our Collections
          </p>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            Our Product
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            Discover our most trusted and high-performance gear — handpicked to represent the best in quality and innovation.
          </p>
        </div>

        {/* Product grid — featured large item + smaller items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column — 2 stacked small products */}
          <div className="flex flex-col gap-6">
            {products.filter(p => !p.featured).slice(0, 2).map((p) => (
              <a key={p.name} href="#" className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.code}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Center — featured large product */}
          <a href="#" className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow lg:row-span-1">
            <div className="aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-wider">{products[0].name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{products[0].code}</p>
            </div>
          </a>

          {/* Right column — 2 stacked small products */}
          <div className="flex flex-col gap-6">
            {products.filter(p => !p.featured).slice(1, 3).map((p) => (
              <a key={p.name} href="#" className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.code}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Description text below products */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            Thanks to our exceptional quality and competitive prices, we have the privilege of creating 
            significant value for our customers. Athletes and sports professionals promote our products, 
            driving perfection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
