import { Shield, Award, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description:
      "Every product is crafted with the finest materials and tested to meet international safety standards.",
  },
  {
    icon: Award,
    title: "30+ Years Experience",
    description:
      "Three decades of expertise in manufacturing world-class combat sports equipment.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Trusted by athletes, gyms, and distributors in over 50 countries worldwide.",
  },
  {
    icon: Zap,
    title: "Custom Manufacturing",
    description:
      "Full OEM and ODM capabilities with custom branding, colors, and specifications.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
            Why Eikyo
          </p>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            Why Choose Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-secondary rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-wider mb-3">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
