import { Palette, Shield, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Unlimited Customisation",
    description:
      "We offer endless possibilities for colours, logos, and designs — crafted to match your gym's identity and fighting style.",
  },
  {
    icon: Shield,
    title: "High-Quality Materials",
    description:
      "Our fightwear is crafted using premium fabrics engineered for performance, comfort, and long-lasting durability.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description:
      "We help showcase your gym or team's identity through bold, standout designs that unite fighters and coaches alike.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Our dedicated team supports you at every stage — from design consultation to final delivery and beyond.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="font-black text-3xl md:text-5xl lg:text-7xl text-primary uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Why Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card border border-border rounded-lg p-5 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <f.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-xs md:text-base text-foreground uppercase tracking-wider mb-2 md:mb-3">
                {f.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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
