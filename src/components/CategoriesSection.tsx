import fighterImg from "@/assets/fighter-hero.webp";
import uniformImg from "@/assets/martial-arts-uniform.png";

const FingerprintBg = () => (
  <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
    <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <g stroke="#2D6A4F" fill="none" strokeWidth="1.5">
        <ellipse cx="600" cy="400" rx="350" ry="300" />
        <ellipse cx="600" cy="400" rx="300" ry="250" />
        <ellipse cx="600" cy="400" rx="250" ry="200" />
        <ellipse cx="600" cy="400" rx="200" ry="150" />
      </g>
    </svg>
  </div>
);

const CategoriesSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Boxing Section */}
      <div className="py-20 md:py-28 relative" style={{ background: "#F5F0E8" }}>
        <FingerprintBg />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: fighter image */}
            <div className="rounded-3xl overflow-hidden aspect-[3/4] flex items-end justify-center" style={{ background: "#1A1A1A" }}>
              <img src={fighterImg} alt="Boxing" className="h-[90%] w-auto object-contain" />
            </div>
            {/* Right: text */}
            <div>
              <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-primary uppercase mb-6 leading-none">
                Boxing
              </h2>
              <p
                className="text-foreground text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Our Boxing Gear Is Crafted To Support Every Fighter, From Training Sessions To Championship Rounds. With Durable Materials, Ergonomic Design, And Unmatched Comfort, We Make Equipment That Helps You Focus On Your Performance And Unleash Your True Power In The Ring.
              </p>
              <a
                href="#products"
                className="inline-block text-sm uppercase tracking-wider bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Martial Arts Section */}
      <div className="py-20 md:py-28 relative" style={{ background: "#F5F0E8" }}>
        <FingerprintBg />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left: text */}
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-primary uppercase mb-6 leading-none">
                Martial Arts
              </h2>
              <p
                className="text-foreground text-base md:text-lg leading-relaxed mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Martial Arts Is The Art Of Balance — Between Body, Mind, And Spirit. Our Equipment Is Designed To Provide The Protection, Flexibility, And Durability That Practitioners Need For Training And Competition. Anchored For Tradition And A Focus On Performance, Our Gear Helps You Move With Precision.
              </p>
              <a
                href="#products"
                className="inline-block text-sm uppercase tracking-wider bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Explore More
              </a>
            </div>
            {/* Right: image */}
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden aspect-[3/4] flex items-center justify-center" style={{ background: "#1A1A1A" }}>
              <img src={uniformImg} alt="Martial Arts" className="h-[70%] w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
