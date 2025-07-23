import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/ui/language-toggle";

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const subtitleLines = t('hero.subtitle', { returnObjects: true }) as string[];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: 'home', section: 'home' },
    { key: 'about', section: 'about' },
    { key: 'gallery', section: 'gallery' },
    { key: 'events', section: 'events' },
    { key: 'donate', section: 'donate' },
    { key: 'contact', section: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 border-b-2 border-orange-500 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-3 py-2">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg animate-glow">
              ॐ
            </div>
            <div className="font-cinzel text-xs md:text-sm text-orange-500 mb-1 leading-snug">
              {subtitleLines.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="text-red-700 hover:text-orange-500 transition-colors font-normal text-sm relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-700 text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-3 pb-3 border-t border-orange-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-3 pt-3">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="text-red-700 hover:text-orange-500 transition-colors font-normal text-sm text-left"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <div className="pt-2">
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}