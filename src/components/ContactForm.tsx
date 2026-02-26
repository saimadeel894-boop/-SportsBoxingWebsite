const ContactForm = () => {
  return (
    <section id="contact" className="py-16 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section header */}
        <div className="mb-8 md:mb-12">
          <p className="font-heading text-xs md:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-2">
            Get Started
          </p>
          <h2
            className="font-black text-2xl md:text-4xl lg:text-5xl text-foreground leading-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Get in touch with us. We're here to assist you.
          </h2>
        </div>

        {/* Form — 3 inputs in row, textarea below, left-aligned CTA */}
        <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground text-sm md:text-base focus:outline-none focus:border-primary resize-none transition-colors"
          />
          <button
            type="submit"
            className="font-heading font-bold text-sm uppercase tracking-wider bg-primary text-primary-foreground px-8 py-4 md:px-10 md:py-5 hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            Leave Us a Message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
