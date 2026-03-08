import { Shield, Truck, Palette, Layers } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Each item undergoes strict quality checks to ensure it matches the approved design.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "We ship on time, nationwide, with tracking to keep your team game-ready in style.",
  },
  {
    icon: Palette,
    title: "Unlimited Customization",
    description: "We offer endless possibilities for colors, logos, and designs — crafted to match your gym's identity and fighting style.",
  },
  {
    icon: Layers,
    title: "High-Quality Materials",
    description: "Our fightwear is crafted using premium fabrics engineered for performance, comfort, and long-lasting durability.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary uppercase">
            Why Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-body font-bold text-sm md:text-base text-foreground uppercase tracking-wider mb-3">
                {f.title}
              </h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
