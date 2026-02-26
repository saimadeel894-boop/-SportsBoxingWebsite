import { MessageSquare, PenTool, CheckCircle, Shield, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consultation",
    description: "We learn about your team's needs — styles, colours, logos, and customisation — while offering expert guidance.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Customisation",
    description: "Using advanced tools, we create unique designs with personalised names, logos, and artwork. Digital mockups are shared for approval.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Approval & Production",
    description: "Once approved, we use premium materials and advanced printing techniques to craft vibrant, durable sportswear.",
  },
  {
    icon: Shield,
    number: "04",
    title: "Quality Assurance",
    description: "Every item undergoes rigorous quality checks to ensure it meets the approved design and our exacting standards.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Delivery",
    description: "We ship on time, worldwide, with full tracking so your team stays game-ready in style.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-14 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-heading text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
            Our Process
          </p>
          <h2 className="font-heading font-black text-2xl md:text-4xl lg:text-5xl text-foreground uppercase">
            How We Work
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-3 md:mt-4 leading-relaxed text-sm">
            At Eikyo International, we craft premium custom fightwear for martial artists and boxers who value
            performance, durability, and identity. From concept to delivery, we manage every step — making the
            process seamless, reliable, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`bg-card border border-border rounded-lg p-4 md:p-6 text-center group hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300 ${
                idx === steps.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <step.icon className="w-4 h-4 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-[10px] md:text-sm text-foreground uppercase tracking-wider mb-2 md:mb-3">
                {step.title}
              </h3>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
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
