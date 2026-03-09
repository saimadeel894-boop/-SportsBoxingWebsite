import glovesImg from "@/assets/boxing-gloves.png";

const CatalogueSection = () => {
  return (
    <section id="catalogue" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground uppercase mb-2 leading-none">
          Catalogue
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-10" />

        <div className="rounded-3xl overflow-hidden p-8 md:p-14 mb-8" style={{ background: "#1A1A1A" }}>
          <div className="bg-white rounded-xl shadow-2xl p-6 md:p-10 max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-500">
            <img src={glovesImg} alt="EIKYO Catalogue" className="w-full h-auto object-contain" />
            <p className="font-heading text-xl mt-4 text-foreground">EIKYO International</p>
            <p className="text-foreground/40 text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Product Catalogue 2025
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="inline-block text-sm uppercase tracking-wider bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Explore More
        </a>
      </div>
    </section>
  );
};

export default CatalogueSection;
