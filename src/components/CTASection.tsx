const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl uppercase mb-4">
          Ready to Equip Your Champions?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're a distributor, gym owner, or brand looking for premium sports equipment,
          Eikyo International is your trusted manufacturing partner.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-block font-heading font-bold text-sm uppercase tracking-wider bg-background text-foreground px-10 py-4 hover:bg-background/90 transition-colors"
          >
            Request Catalogue
          </a>
          <a
            href="#contact"
            className="inline-block font-heading font-bold text-sm uppercase tracking-wider border-2 border-primary-foreground text-primary-foreground px-10 py-4 hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
