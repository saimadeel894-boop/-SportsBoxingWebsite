import { MessageSquare, PenTool, CheckCircle, Shield, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We understand your team's needs, including styles, colors, logos, and customization, while offering expert guidance.",
  },
  {
    icon: PenTool,
    title: "Design & Customization",
    description: "Using advanced tools, we create unique designs with personalized names, logos, and artwork. Digital mockups are shared for approval.",
  },
  {
    icon: CheckCircle,
    title: "Approval & Production",
    description: "After approval, we use premium materials and advanced printing techniques to create vibrant, durable sportswear.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Each item undergoes strict quality checks to ensure it matches the approved design and our exacting standards.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "We ship on time, worldwide, with full tracking so your team stays game-ready in style.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-16 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <h2
            className="font-black text-3xl md:text-5xl lg:text-7xl text-primary uppercase leading-[1.1]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            How<br />We Work
          </h2>
          <p className="text-foreground max-w-4xl mx-auto mt-6 md:mt-8 leading-relaxed text-sm md:text-base">
            At Eikyo International, we craft premium custom fightwear for martial artists and boxers who value
            performance, durability, and identity. From training apparel to competition gear, each design is tailored
            to reflect your discipline, strength, and unique style. From concept to delivery, we manage the entire
            process — making it seamless, reliable, and stress-free. Here's our approach.
          </p>
        </div>

        {/* Steps grid — 3 columns on desktop, then 2 below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-card border border-border rounded-lg p-6 md:p-8 text-center group hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-5 rounded-full bg-primary flex items-center justify-center">
                <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-sm md:text-base text-foreground uppercase tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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
