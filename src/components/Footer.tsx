import logoImg from "@/assets/eikyo-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <img src={logoImg} alt="Eikyo International" className="h-10 md:h-12 w-auto mb-3 md:mb-4" />
            <p className="text-xs md:text-sm leading-relaxed text-muted-foreground mb-3 md:mb-4">
              Premium combat sports equipment manufacturer based in Sialkot, Pakistan.
              Empowering champions worldwide.
            </p>
            <div className="flex gap-2 md:gap-3">
              {["facebook", "instagram", "twitter", "linkedin"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                  <span className="text-[10px] md:text-xs text-muted-foreground uppercase font-heading font-bold">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-foreground mb-3 md:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {["Home", "About Us", "Products", "Catalogue", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-foreground mb-3 md:mb-5">
              Products
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {["Boxing Equipment", "MMA Gear", "Martial Arts Uniforms", "Training Equipment", "Protective Gear"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-foreground mb-3 md:mb-5">
              Contact
            </h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-muted-foreground">
              <li>📍 Sialkot, Pakistan</li>
              <li>✉️ info@eikyointernational.com</li>
              <li>📞 +92 000 0000000</li>
              <li>💬 WhatsApp Available</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-[10px] md:text-xs text-muted-foreground">
            © 2026 Eikyo International. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
