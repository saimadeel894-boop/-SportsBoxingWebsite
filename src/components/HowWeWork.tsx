import { MessageSquare, PenTool, CheckCircle, Shield, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "We understand your team's needs, including styles, colors, logos, and customization, while offering expert guidance.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Customization",
    description: "Using advanced tools, we create unique designs with personalized names, logos, and artwork. Digital mockups are shared for approval.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Approval & Production",
    description: "After approval, we use premium materials and advanced printing techniques to create vibrant, durable sportswear.",
  },
  {
    icon: Shield,
    number: "04",
    title: "Quality Assurance",
    description: "Each item undergoes strict quality checks to ensure it matches the approved design.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Delivery",
    description: "We ship on time, nationwide, with tracking to keep your team game-ready in style.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-heading text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
            Our Process
          </p>
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed text-sm md:text-base">
            At Eikyo International, we craft premium custom fightwear for martial artists and boxers who value
            performance, durability, and identity. From concept to delivery, we manage the entire process — making it seamless, reliable, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-background rounded-lg p-6 text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
