const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <p className="font-heading text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
          Get Started
        </p>
        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl uppercase mb-4">
          Ready to Equip Your Champions?
        </h2>
        <p className="text-background/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you're a distributor, gym owner, or brand looking for premium sports equipment, 
          Eikyo International is your trusted manufacturing partner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors"
          >
            Request Catalogue
          </a>
          <a
            href="#"
            className="inline-block font-heading font-bold text-sm uppercase tracking-wider border-2 border-background text-background px-8 py-3 hover:bg-background hover:text-foreground transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
