import glovesImg from "@/assets/boxing-gloves.png";
import headguardImg from "@/assets/headguard.png";
import shinGuardsImg from "@/assets/shin-guards.png";
import mmaGlovesImg from "@/assets/mma-gloves.png";

const OurWork = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground uppercase">
            Our Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 leading-relaxed">
            See our customers and how much they are happy with us
          </p>
        </div>

        {/* Customer work gallery — 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[glovesImg, headguardImg, shinGuardsImg, mmaGlovesImg].map((img, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden bg-background group">
              <img
                src={img}
                alt={`Customer work ${i + 1}`}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
