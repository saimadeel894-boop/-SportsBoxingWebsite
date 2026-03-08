import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";
import uniformImg from "@/assets/martial-arts-uniform.png";
import trainingRopeImg from "@/assets/training-rope.png";

const images = [glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg, uniformImg, trainingRopeImg];

const OurWork = () => {
  return (
    <section id="our-work" className="py-20 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary uppercase">
            Our Work
          </h2>
          <p className="font-body text-white/60 text-sm md:text-base mt-4 max-w-xl mx-auto">
            See Our Customers and how much they are happy with Us
          </p>
        </div>

        {/* Horizontal scrolling row */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-5 px-5">
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-64 md:w-72 aspect-[4/3] rounded-2xl overflow-hidden bg-[#2A2A2A] group">
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
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default OurWork;
