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
    { label: "CATALOGUE", href: "#" },
    { label: "CONTACT US", href: "#contact" },
    { label: "OUR UNIQUE WORK", href: "#", dropdown: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logoImg} alt="Eikyo International" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-heading text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors">
            <Search size={18} />
          </button>
          <span className="font-heading text-sm font-semibold tracking-wider text-foreground cursor-pointer hover:text-primary transition-colors">
            EN
          </span>
          <a
            href="#contact"
            className="font-heading font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary/90 transition-colors"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-sm font-semibold tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={14} />}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
            <Search size={18} className="text-foreground" />
            <span className="font-heading text-sm font-semibold tracking-wider text-foreground">EN</span>
            <a
              href="#contact"
              className="font-heading font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground px-5 py-2.5 hover:bg-primary/90 transition-colors ml-auto"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
