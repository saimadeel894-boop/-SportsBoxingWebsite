import logoImg from "@/assets/eikyo-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img src={logoImg} alt="EIKYO International" className="h-12 w-auto object-contain" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              EIKYO International is a leading manufacturer and exporter of boxing equipment, martial arts, MMA, and Muay Thai gear.
            </p>
            <div className="flex gap-3">
              {[
                { label: "FB", href: "https://www.facebook.com/profile.php?id=61576976498498" },
                { label: "IG", href: "https://www.instagram.com/eikyointernational" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-heading text-[10px] font-bold text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Catalogue", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest mb-6 text-foreground">Products</h4>
            <ul className="space-y-3">
              {["Boxing Equipment", "Martial Arts", "MMA", "Muay Thai", "Training Gear"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-black text-xs uppercase tracking-widest mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-muted-foreground text-sm">Sialkot, Pakistan</p>
              </li>
              <li>
                <a href="mailto:eikyointernational@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  eikyointernational@gmail.com
                </a>
              </li>
              <li>
                <a href="https://eikyoint.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  www.eikyoint.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-[11px] uppercase tracking-widest font-heading font-bold">
            © 2026 EIKYO International. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-[11px] uppercase tracking-widest font-heading font-bold hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground text-[11px] uppercase tracking-widest font-heading font-bold hover:text-foreground transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
