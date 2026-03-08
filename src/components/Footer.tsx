import logoImg from "@/assets/eikyo-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img src={logoImg} alt="EIKYO International" className="h-14 w-auto object-contain rounded-full" />
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              EIKYO International — Premium boxing, martial arts, MMA & sports gear manufacturer.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-widest mb-6 text-white">Useful Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Catalogue", "Customization Guide", "Our Unique Work"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-white/50 text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-widest mb-6 text-white">Categories</h4>
            <ul className="space-y-3">
              {["Boxing", "Martial Arts"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-white/50 text-sm hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg uppercase tracking-widest mb-6 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="font-body text-white/50 text-sm">Sialkot, Pakistan</li>
              <li>
                <a href="mailto:eikyointernational@gmail.com" className="font-body text-white/50 text-sm hover:text-primary transition-colors">
                  eikyointernational@gmail.com
                </a>
              </li>
              <li>
                <a href="https://eikyoint.com" target="_blank" rel="noopener noreferrer" className="font-body text-white/50 text-sm hover:text-primary transition-colors">
                  www.eikyoint.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="font-body text-white/30 text-xs uppercase tracking-widest">
            © 2026 EIKYO International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
