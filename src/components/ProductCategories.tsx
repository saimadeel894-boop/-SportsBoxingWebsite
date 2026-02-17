import categoryBoxing from "@/assets/category-boxing.png";
import categoryMma from "@/assets/category-mma.png";
import categoryMartialArts from "@/assets/category-martial-arts.png";
import categoryTraining from "@/assets/category-training.png";

const categories = [
  { name: "Boxing", desc: "Gloves, bags, pads & protective gear", image: categoryBoxing },
  { name: "MMA", desc: "Fight shorts, gloves & shin guards", image: categoryMma },
  { name: "Martial Arts", desc: "Uniforms, belts & training equipment", image: categoryMartialArts },
  { name: "Training Gear", desc: "Ropes, wraps & fitness accessories", image: categoryTraining },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
            Our Collections
          </p>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            Product Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent group-hover:from-foreground/80 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-heading font-bold text-xl md:text-2xl text-background uppercase tracking-wider">
                  {cat.name}
                </h3>
                <p className="text-background/70 text-sm mt-1 mb-2">{cat.desc}</p>
                <span className="font-heading text-sm text-primary uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Products →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
