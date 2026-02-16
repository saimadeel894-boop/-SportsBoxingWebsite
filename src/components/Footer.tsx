import logoImg from "@/assets/eikyo-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 border-t border-background/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logoImg} alt="Eikyo International" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-background/60">
              Premium combat sports equipment manufacturer based in Sialkot, Pakistan. 
              Serving champions worldwide since 1990.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-background mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Products", "Catalogue", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-background mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {["Boxing Equipment", "MMA Gear", "Martial Arts Uniforms", "Training Equipment", "Protective Gear"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-background mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>Sialkot, Pakistan</li>
              <li>info@eikyointernational.com</li>
              <li>+92 000 0000000</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © 2026 Eikyo International. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-background/40 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
