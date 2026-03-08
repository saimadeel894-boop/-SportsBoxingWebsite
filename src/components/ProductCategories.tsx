import karateImg from "@/assets/product-karate-uniform.png";
import punchingBagImg from "@/assets/product-punching-bag.png";
import boxingGloveImg from "@/assets/product-boxing-glove.png";
import mmaImg from "@/assets/product-mma-shorts.png";

const products = [
  { name: "Karate Uniform", code: "AS-02-101", img: karateImg },
  { name: "Punching Bag", code: "AS-01-4401", img: punchingBagImg },
  { name: "Boxing Glove", code: "AB-858", img: boxingGloveImg },
  { name: "MMA Shorts", code: "AS-07-201", img: mmaImg },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary uppercase">
            Our Product
          </h2>
          <p className="font-body text-white/60 text-sm md:text-base mt-4 max-w-2xl">
            Discover our most trusted and high-performance gear — handpicked to represent the best in quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <div key={p.code} className="bg-white rounded-2xl p-4 md:p-6 flex flex-col items-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-square w-full flex items-center justify-center mb-4">
                <img src={p.img} alt={p.name} className="max-h-[80%] w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="font-body font-bold text-foreground text-sm md:text-base text-center">{p.name}</h3>
              <p className="font-body text-muted-foreground text-xs mt-1">{p.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
