import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Play, Heart } from "lucide-react";
import homeImage from '../assets/images/homepageimage.jpg'; // path should match your actual image location

export function HeroSection() {
  const { t } = useTranslation();
  const subtitleLines = t('hero.subtitle', { returnObjects: true }) as string[];
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center mandala-bg pt-20">
      <div className="absolute inset-0 sacred-gradient opacity-20"></div>
      
      {/* Divine background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
             <circle cx='50' cy='50' r='40' fill='none' stroke='%23FF9933' stroke-width='1'/><circle cx='50' cy='50' r='30' fill='none' 
             stroke='%23DC2626' stroke-width='1'/><circle cx='50' cy='50' r='20' fill='none' stroke='%23F472B6' stroke-width='1'/></svg>")`,
            backgroundSize: '200px 200px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.div 
                className="text-6xl mb-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                ॐ
              </motion.div>
              <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-red-700 mb-4 leading-tight">
                {t('hero.title')}
              </h1>
            
              <div className="font-cinzel text-2xl md:text-3xl text-orange-500 mb-6 leading-snug">
              {subtitleLines.map((line, index) => (
              <div key={index}>{line}</div>
              ))}
              </div>
             
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >

            {/* Beautiful ornate Hindu temple deity statue */}
            <img 
              src={homeImage}
              alt="Sacred deity statue in ornate temple setting" 
              className="rounded-3xl shadow-2xl w-full h-auto animate-glow" 
            />
            
            {/* Floating Om symbols */}
            <motion.div 
              className="absolute -top-4 -left-4 text-3xl text-orange-500"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              ॐ
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 text-3xl"
              animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              🪷
            </motion.div>
            <motion.div 
              className="absolute top-1/2 -right-8 text-2xl text-green-600"
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              🕉️
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}