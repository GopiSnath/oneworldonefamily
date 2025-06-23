import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { key: 'home', section: 'home' },
    { key: 'about', section: 'about' },
    { key: 'gallery', section: 'gallery' },
    { key: 'events', section: 'events' },
    { key: 'donate', section: 'donate' }
  ];

  const services = [
    'dailyDarshan',
    'specialPujas', 
    'weddingServices',
    'spiritualCounseling',
    'communityKitchen'
  ];

  const socialLinks = [
    { icon: Facebook, color: 'hover:bg-pink-500' },
    { icon: Twitter, color: 'hover:bg-pink-500' },
    { icon: Instagram, color: 'hover:bg-pink-500' },
    { icon: Youtube, color: 'hover:bg-pink-500' }
  ];

  return (
    <>
      <footer className="bg-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-xl">
                  ॐ
                </div>
                <h3 className="font-cinzel text-xl font-bold">{t('hero.subtitle')}</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                {t('footer.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-cinzel text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-white/80 hover:text-orange-400 transition-colors"
                    >
                      {t(`nav.${link.key}`)}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-cinzel text-lg font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/80 hover:text-orange-400 transition-colors cursor-pointer">
                      {t(`footer.servicesList.${service}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-cinzel text-lg font-semibold mb-4">{t('footer.connect')}</h4>
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center ${social.color} transition-colors`}
                  >
                    <social.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
              <p className="text-white/80 text-sm">
                {t('footer.followUs')}
              </p>
            </motion.div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0 }}
      >
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors p-0"
          size="icon"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      </motion.div>
    </>
  );
}
