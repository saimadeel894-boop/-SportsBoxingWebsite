import categoryBoxing from "@/assets/category-boxing.png";
import categoryMma from "@/assets/category-mma.png";
import categoryMartialArts from "@/assets/category-martial-arts.png";
import categoryTraining from "@/assets/category-training.png";

const categories = [
  { name: "Boxing", image: categoryBoxing },
  { name: "MMA", image: categoryMma },
  { name: "Martial Arts", image: categoryMartialArts },
  { name: "Training Gear", image: categoryTraining },
];

const ProductCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
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
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-background uppercase tracking-wider">
                    {cat.name}
                  </h3>
                  <span className="font-heading text-sm text-background/80 uppercase tracking-wider group-hover:text-primary transition-colors">
                    View Products →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
