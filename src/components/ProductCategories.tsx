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
    <section id="products" className="py-20 md:py-28" style={{ background: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 md:mb-14">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary uppercase leading-none">
            Our Product
          </h2>
          <p
            className="text-white/50 text-sm md:text-base mt-4 max-w-2xl"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Discover our most trusted and high-performance gear — handpicked to represent the best in quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p) => (
            <div
              key={p.code}
              className="bg-white rounded-2xl p-5 md:p-6 flex flex-col items-center group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="aspect-square w-full flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-[80%] w-auto object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"
                />
              </div>
              <h3
                className="font-bold text-foreground text-sm md:text-base text-center transition-colors duration-300 group-hover:text-primary"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {p.name}
              </h3>
              <p
                className="text-foreground/40 text-xs mt-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {p.code}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
