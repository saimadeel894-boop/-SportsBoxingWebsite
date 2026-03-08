import glovesImg from "@/assets/boxing-gloves.png";

const CatalogueSection = () => {
  return (
    <section id="catalogue" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground uppercase mb-2">
          Catalogue
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden p-8 md:p-16 mb-8">
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-500">
            <img src={glovesImg} alt="EIKYO Catalogue" className="w-full h-auto object-contain" />
            <p className="font-heading text-xl mt-4 text-foreground">EIKYO International</p>
            <p className="font-body text-muted-foreground text-sm">Product Catalogue 2026</p>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default CatalogueSection;
