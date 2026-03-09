import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import trainingRopeImg from "@/assets/training-rope.png";

const images = [glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg, uniformImg, trainingRopeImg];

const OurWork = () => {
  return (
    <section id="our-work" className="py-20 md:py-28" style={{ background: "#1A1212" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary uppercase leading-none">
            Our Work
          </h2>
          <p
            className="text-white/50 text-sm md:text-base mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            See Our Customer how much they are happy with Us
          </p>
        </div>

        {/* Horizontal scrolling row */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 md:w-72 aspect-[4/3] rounded-2xl overflow-hidden group"
              style={{ background: "#2A2020" }}
            >
              <img
                src={img}
                alt={`Customer work ${i + 1}`}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default OurWork;
