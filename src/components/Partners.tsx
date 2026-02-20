const partnerNames = [
  "Champion Sports", "FightGear Pro", "Ring Masters", 
  "Combat Elite", "Power Strike", "Victory Sports"
];

const Partners = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground uppercase">
            Our Partners
          </h2>
        </div>

        {/* Partner logos marquee-style row */}
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {partnerNames.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center w-28 h-16 md:w-36 md:h-20 bg-secondary rounded-md"
            >
              <span className="font-heading font-bold text-xs md:text-sm text-muted-foreground uppercase tracking-wider text-center px-2">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
