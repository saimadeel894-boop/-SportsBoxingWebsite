import logoImg from "@/assets/eikyo-logo.jpg";

const Footer = () => {
  return (
    <footer style={{ background: "#0D0D0D" }} className="text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mb-14">
          {/* Brand Column — spans 2 cols on md */}
          <div className="col-span-2 md:col-span-2 space-y-4">
            <img src={logoImg} alt="EIKYO International" className="h-20 w-20 object-contain rounded-full" />
            <p
              className="text-white/40 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              EIKYO International — Premium boxing, martial arts, MMA & sports gear manufacturer.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-heading text-base uppercase tracking-widest mb-5 text-white">Useful Links</h4>
            <ul className="space-y-2.5">
              {["Home", "About Us", "Catalogue", "Customization Guide", "Our Unique Work"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-primary transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading text-base uppercase tracking-widest mb-5 text-white">Categories</h4>
            <ul className="space-y-2.5">
              {["Boxing", "Martial Arts"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-primary transition-colors"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base uppercase tracking-widest mb-5 text-white">Contact Us</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+923341799999" className="text-white/40 text-sm hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  +923341799999
                </a>
              </li>
              <li>
                <a href="tel:+923004344401" className="text-white/40 text-sm hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  +923004344401
                </a>
              </li>
              <li>
                <a href="mailto:info@eikyo.com" className="text-white/40 text-sm hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  info@eikyo.com
                </a>
              </li>
              <li>
                <a href="mailto:sales@eikyo.com" className="text-white/40 text-sm hover:text-primary transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  sales@eikyo.com
                </a>
              </li>
              <li>
                <span className="text-white/40 text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Gulberg-3, Lahore, Pakistan
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 border-t border-white/10 text-center">
          <p
            className="text-white/30 text-xs tracking-wider"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Copyright © 2025 EIKYO International. All Rights Reserved. Design By Progressivum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
