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
    description: "Each item undergoes strict quality checks to ensure it matches the approved design.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "We ship on time, worldwide, with full tracking so your team stays game-ready in style.",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary uppercase mb-6">
            How We Work
          </h2>
          <p className="font-body text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed">
            At EIKYO International, we craft premium custom-fight gear for martial artists and boxers who value performance, durability, and identity. From training to competition gear, each design is tailored to reflect your discipline, strength, and unique style. From concept to delivery, we manage the entire process — making customization reliable, and stress-free.
          </p>
        </div>

        {/* Partner logos marquee */}
        <div className="relative overflow-hidden mb-16 py-6 border-y border-border">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center w-32 h-16 md:w-44 md:h-20 bg-secondary rounded-md">
                <span className="font-heading text-sm md:text-lg text-muted-foreground uppercase tracking-wider">
                  {["PUNOK", "EIKYO", "Champion", "FightGear", "RingMasters", "CombatElite"][i]}
                </span>
              </div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0 flex items-center justify-center w-32 h-16 md:w-44 md:h-20 bg-secondary rounded-md">
                <span className="font-heading text-sm md:text-lg text-muted-foreground uppercase tracking-wider">
                  {["PUNOK", "EIKYO", "Champion", "FightGear", "RingMasters", "CombatElite"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              <div className="font-heading text-primary/10 text-8xl absolute -top-10 left-0 pointer-events-none select-none">
                0{index + 1}
              </div>
              <div className="relative z-10 pt-4 border-t border-border mt-2">
                <h3 className="font-body font-bold text-sm md:text-base text-foreground uppercase tracking-wider mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
