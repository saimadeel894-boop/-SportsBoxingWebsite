import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground uppercase mb-10 leading-tight">
          Get in touch with us.<br />We're here
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label
                className="text-xs font-bold uppercase tracking-wider text-foreground/40"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-xs font-bold uppercase tracking-wider text-foreground/40"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-xs font-bold uppercase tracking-wider text-foreground/40"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="text-xs font-bold uppercase tracking-wider text-foreground/40"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Message
            </label>
            <textarea
              placeholder="How can we help you?"
              rows={5}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary resize-none transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            />
          </div>

          <button
            type="submit"
            className="uppercase tracking-wider bg-primary text-white px-8 py-3.5 rounded-md hover:bg-primary/90 transition-all duration-300 flex items-center gap-2 text-sm font-semibold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            LEAVE US A MESSAGE <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
