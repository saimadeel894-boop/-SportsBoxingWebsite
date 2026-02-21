const partnerLogos = [
  "Champion Sports", "FightGear Pro", "Ring Masters",
  "Combat Elite", "Power Strike", "Victory Sports"
];

const Partners = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground uppercase">
            Our Partners
          </h2>
        </div>

        {/* Scrolling marquee row */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-8 md:gap-12 animate-marquee whitespace-nowrap">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-36 h-24 md:w-44 md:h-28 bg-secondary rounded-md"
              >
                <span className="font-heading font-bold text-xs md:text-sm text-muted-foreground uppercase tracking-wider text-center px-2">
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

export default Partners;
