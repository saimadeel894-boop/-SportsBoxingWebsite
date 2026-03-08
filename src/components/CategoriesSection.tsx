import fighterImg from "@/assets/fighter-hero.webp";
import uniformImg from "@/assets/martial-arts-uniform.png";

const CategoriesSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Boxing Section */}
      <div className="py-20 md:py-32 bg-[#F5F0EB] relative">
        {/* Fingerprint pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <ellipse cx="400" cy="300" rx="350" ry="280" fill="none" stroke="#2D6A4F" strokeWidth="2" />
            <ellipse cx="400" cy="300" rx="300" ry="230" fill="none" stroke="#2D6A4F" strokeWidth="2" />
            <ellipse cx="400" cy="300" rx="250" ry="180" fill="none" stroke="#2D6A4F" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: fighter image */}
            <div className="bg-[#1A1A1A] rounded-3xl overflow-hidden aspect-[3/4] flex items-end justify-center">
              <img src={fighterImg} alt="Boxing" className="h-[90%] w-auto object-contain" />
            </div>
            {/* Right: text */}
            <div>
              <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary uppercase mb-6">Boxing</h2>
              <p className="font-body text-foreground text-base md:text-lg leading-relaxed mb-8">
                Our Boxing Gear Is Crafted To Support Every Fighter, From Training Sessions To Championship Rounds. With Durable Materials, Ergonomic Design, And Unmatched Comfort, We Make Equipment That Helps You Focus On Your Performance And Unleash Your True Power In The Ring.
              </p>
              <a href="#products" className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Martial Arts Section */}
      <div className="py-20 md:py-32 bg-[#F5F0EB] relative">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <ellipse cx="400" cy="300" rx="350" ry="280" fill="none" stroke="#2D6A4F" strokeWidth="2" />
            <ellipse cx="400" cy="300" rx="300" ry="230" fill="none" stroke="#2D6A4F" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: text */}
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl text-primary uppercase mb-6">Martial Arts</h2>
              <p className="font-body text-foreground text-base md:text-lg leading-relaxed mb-8">
                Our Martial Arts Gear Is Designed For Precision, Discipline, And Comfort. Whether You're Practicing Judo, Karate, Or Taekwondo, Every Piece Is Built To Support Your Training Journey With Premium Materials And Expert Craftsmanship.
              </p>
              <a href="#products" className="inline-block font-body font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
                Explore More
              </a>
            </div>
            {/* Right: image */}
            <div className="order-1 lg:order-2 bg-[#1A1A1A] rounded-3xl overflow-hidden aspect-[3/4] flex items-center justify-center">
              <img src={uniformImg} alt="Martial Arts" className="h-[70%] w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
