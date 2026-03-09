const brands = ["PUNOK", "EIKYO", "CHAMPION", "FIGHTGEAR", "RINGMASTERS", "COMBATELITE"];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 md:mb-14">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary uppercase leading-none mb-6">
            How We Work
          </h2>
          <p
            className="text-foreground/60 text-sm md:text-base max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            At EIKYO International, we craft premium custom-fight gear for martial artists and boxers who value performance, durability, and identity. From training to competition gear, each design is tailored to reflect your discipline, strength, and unique style. From concept to delivery, we manage the entire process — making customization reliable, and stress-free.
          </p>
        </div>

        {/* Partner logos marquee */}
        <div className="relative overflow-hidden py-8 border-y border-border">
          <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-36 h-16 md:w-44 md:h-20 bg-secondary rounded-lg"
              >
                <span
                  className="font-heading text-sm md:text-lg text-foreground/30 uppercase tracking-widest"
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
