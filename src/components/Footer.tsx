import logoImg from "@/assets/eikyo-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border text-foreground">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <img src={logoImg} alt="Eikyo International" className="h-10 md:h-12 w-auto mb-4" />
            <p className="text-xs md:text-sm leading-relaxed text-muted-foreground mb-4">
              Premium combat sports equipment manufacturer based in Sialkot, Pakistan.
              Empowering champions worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { letter: "F", href: "https://www.facebook.com/profile.php?id=61576976498498" },
                { letter: "I", href: "https://www.instagram.com/eikyointernational" },
                { letter: "T", href: "#" },
                { letter: "L", href: "#" },
              ].map((s) => (
                <a
                  key={s.letter}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span className="text-xs text-muted-foreground uppercase font-heading font-bold">{s.letter}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-foreground mb-4 md:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
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
            <h4 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-foreground mb-4 md:mb-5">
              Products
            </h4>
            <ul className="space-y-2.5">
              {["Boxing Equipment", "MMA Gear", "Martial Arts Uniforms", "Muay Thai", "Protective Gear"].map((link) => (
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
            <h4 className="font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-foreground mb-4 md:mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-muted-foreground">
              <li>📍 Sialkot, Punjab, Pakistan</li>
              <li>
                <a href="mailto:eikyointernational@gmail.com" className="hover:text-primary transition-colors">
                  ✉️ eikyointernational@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/923226aborede" className="hover:text-primary transition-colors">
                  📞 WhatsApp Available
                </a>
              </li>
              <li>
                <a href="https://eikyoint.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  🌐 eikyoint.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 md:py-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] md:text-xs text-muted-foreground">
            © 2026 Eikyo International. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] md:text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
