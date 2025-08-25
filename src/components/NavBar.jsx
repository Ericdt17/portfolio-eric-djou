import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, changeLanguage, isFrench, t } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = isFrench ? "en" : "fr";
    changeLanguage(newLanguage);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-lg" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Eric Djou</span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav - centered */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 items-center"
            >
              {t(`nav.${item.name.toLowerCase()}`)}
            </a>
          ))}
        </div>

        {/* Theme Toggle and Language Toggle - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300"
            aria-label={`Switch to ${isFrench ? "English" : "French"}`}
          >
            {isFrench ? "EN" : "FR"}
          </button>
        </div>

        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${item.name.toLowerCase()}`)}
              </a>
            ))}

            {/* Theme Toggle and Language Toggle - Mobile */}
            <div className="flex flex-col space-y-4 items-center">
              <ThemeToggle />
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {isFrench ? "Switch to English" : "Passer en Français"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
