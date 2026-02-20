import { Palette, Shield, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Unlimited Customization",
    description:
      "We offer endless possibilities for colors, logos, and designs—crafted to match your gym's identity and fighting style.",
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
      "Our dedicated team supports you at every stage—from design consultation to final delivery.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            Why Us
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
