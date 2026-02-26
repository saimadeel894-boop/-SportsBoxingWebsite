const ContactForm = () => {
  return (
    <section id="contact" className="py-14 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left — CTA text */}
          <div className="flex flex-col justify-center">
            <p className="font-heading text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
              Get Started
            </p>
            <h2 className="font-heading font-black text-2xl md:text-4xl lg:text-5xl text-foreground uppercase mb-4 md:mb-6">
              Get in Touch With Us
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Whether you are a distributor, gym owner, or a brand looking for premium sports
              equipment, Eikyo International is your trusted manufacturing partner. Reach out
              and let us bring your vision to life.
            </p>
          </div>

          {/* Right — Form */}
          <form className="space-y-3 md:space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 md:py-3.5 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 md:py-3.5 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 md:py-3.5 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full px-4 py-3 md:py-3.5 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-3 md:py-3.5 hover:bg-primary/90 transition-colors w-full"
            >
              Leave Us a Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
