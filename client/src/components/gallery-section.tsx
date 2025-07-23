import { motion, px } from "framer-motion";
import { useTranslation } from 'react-i18next';
import templeImg from '../assets/images/img.jpg'; // path should match your actual image location
import templeImg1 from '../assets/images/img1.jpg'; // path should match your actual image location
import templeImg2 from '../assets/images/img2.jpg'; // path should match your actual image location
import templeImg3 from '../assets/images/img3.jpg'; // path should match your actual image location
import templeImg4 from '../assets/images/img4.jpg'; // path should match your actual image location
import templeImg5 from '../assets/images/img5.jpg'; // path should match your actual image location
import templeImg6 from '../assets/images/img6.jpg'; // path should match your actual image location
import templeImg7 from '../assets/images/img7.jpg'; // path should match your actual image location
import templeImg8 from '../assets/images/img8.jpg'; // path should match your actual image location
import templeImg9 from '../assets/images/img9.jpg'; // path should match your actual image location
import templeImg10 from '../assets/images/img10.jpg'; // path should match your actual image location
import templeImg11 from '../assets/images/img11.jpg'; // path should match your actual image location
import templeImg12 from '../assets/images/img12.jpg'; // path should match your actual image location
import templeImg13 from '../assets/images/img13.jpg'; // path should match your actual image location
import templeImg14 from '../assets/images/img14.jpg'; // path should match your actual image location
import templeImg15 from '../assets/images/img15.jpg'; // path should match your actual image location
import templeImg16 from '../assets/images/img16.jpg'; // path should match your actual image location
import templeImg17 from '../assets/images/img17.jpg'; // path should match your actual image location
import templeImg18 from '../assets/images/img18.jpg'; // path should match your actual image location
import templeImg19 from '../assets/images/img19.jpg'; // path should match your actual image location
import templeImg20 from '../assets/images/img20.jpg'; // path should match your actual image location
import templeImg21 from '../assets/images/img21.jpg'; // path should match your actual image location
import templeImg22 from '../assets/images/img22.jpg'; // path should match your actual image location


export function GallerySection() {
  const { t } = useTranslation();

  const galleryItems = [
       {
  image: templeImg1, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg2, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg3, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg4, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg5, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg6, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg7, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg8, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg9, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg10, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg11, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg12, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg13, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg14, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg15, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg16, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg17, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg18, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
     {
  image: templeImg19, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
         {
  image: templeImg20, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
         {
  image: templeImg21, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
         {
  image: templeImg22, // replace with actual import or image path
  title: t('gallery.sacredDeity'),
  alt: "Meditating sage in orange robe with sacred threads",
  className: "w-[480px] h-[480px]"
    },
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
            className={item.className}
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
