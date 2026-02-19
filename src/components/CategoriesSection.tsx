import categoryBoxing from "@/assets/category-boxing.png";
import categoryMartialArts from "@/assets/category-martial-arts.png";

const categories = [
  {
    name: "Boxing",
    description:
      "Our boxing gear is crafted to support every fighter, from training sessions to championship rounds. With durable materials, ergonomic design, and unmatched comfort, we make equipment that helps you focus on your performance.",
    image: categoryBoxing,
    href: "#",
  },
  {
    name: "Martial Arts",
    description:
      "Martial arts is the art of balance — between body, mind, and spirit. Our martial arts equipment is designed to provide the protection, flexibility, and durability that practitioners need for training and competition.",
    image: categoryMartialArts,
    href: "#",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
            Our Specialties
          </p>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            Our Categories
          </h2>
        </div>

        <div className="space-y-16">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground uppercase mb-4">
                  {cat.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
                  {cat.description}
                </p>
                <a
                  href={cat.href}
                  className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
                >
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
