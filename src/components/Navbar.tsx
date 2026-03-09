import { Search, ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "@/assets/eikyo-logo.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "ABOUT US", href: "#about" },
    { label: "PRODUCTS", href: "#products", dropdown: true },
    { label: "CATALOGUE", href: "#catalogue" },
    { label: "CONTACT US", href: "#contact" },
    { label: "OUR UNIQUE WORK", href: "#our-work", dropdown: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-3 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <img src={logoImg} alt="EIKYO International" className="h-10 md:h-12 w-10 md:w-12 object-contain rounded-full" />
        </a>

        {/* Center nav links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[13px] font-semibold tracking-[0.08em] text-foreground hover:text-primary transition-colors flex items-center gap-1 uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={13} strokeWidth={2.5} />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-5">
          <button className="text-foreground hover:text-primary transition-colors">
            <Search size={18} />
          </button>
          <span
            className="text-sm font-semibold tracking-wider text-foreground cursor-pointer hover:text-primary transition-colors uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            EN
          </span>
          <a
            href="#contact"
            className="text-sm uppercase tracking-wider bg-primary text-white px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors font-semibold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            GET QUOTE
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-1 uppercase"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
            <Search size={18} className="text-foreground" />
            <span className="text-sm font-semibold tracking-wider text-foreground uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>EN</span>
            <a
              href="#contact"
              className="text-sm uppercase tracking-wider bg-primary text-white px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors ml-auto font-semibold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              GET QUOTE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
