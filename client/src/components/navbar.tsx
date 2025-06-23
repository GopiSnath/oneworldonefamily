import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "@/components/ui/language-toggle";

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl animate-glow">
              ॐ
            </div>
            <h1 className="font-cinzel text-2xl text-red-700 font-bold">
              {t('hero.subtitle')}
            </h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="text-red-700 hover:text-orange-500 transition-colors font-medium relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-red-700 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-orange-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className="text-red-700 hover:text-orange-500 transition-colors font-medium text-left"
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
