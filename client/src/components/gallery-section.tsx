import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

export function GallerySection() {
  const { t } = useTranslation();

  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: t('gallery.sacredDeity'),
      alt: "Golden deity statue with intricate jewelry and decorations"
    },
    {
      image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: t('gallery.templeArchitecture'),
      alt: "Ancient temple with ornate carved pillars and traditional architecture"
    },
    {
      image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: t('gallery.festivalCelebrations'),
      alt: "Colorful Hindu festival celebration with devotees and decorations"
    },
    {
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: t('gallery.sacredLotus'),
      alt: "Golden lotus flowers floating on sacred water with divine lighting"
    },
    {
      image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: t('gallery.innerSanctum'),
      alt: "Serene temple interior with ornate decorations and divine lighting"
    },
    {
      image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
      title: t('gallery.sacredRituals'),
      alt: "Sacred ceremony with devotees offering prayers in traditional temple setting"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-yellow-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-red-700 mb-4">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('gallery.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-700/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-cinzel text-xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
