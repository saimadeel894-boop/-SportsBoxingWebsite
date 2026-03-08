import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground uppercase mb-12">
          Get in touch with us.<br />We're here
        </h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-body"
              />
            </div>
            <div className="space-y-2">
              <label className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-body"
              />
            </div>
            <div className="space-y-2">
              <label className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number (Optional)</label>
              <input
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors font-body"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-body text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              placeholder="How can we help you?"
              rows={5}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-border text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary resize-none transition-colors font-body"
            />
          </div>

          <button
            type="submit"
            className="font-heading text-base uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
          >
            Leave Us A Message <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
