import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import templeImg from '../assets/images/image.jpg'; // path should match your actual image location


export function AboutSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: '🕉️',
      color: 'bg-orange-500',
      title: t('about.foundation.title'),
      description: t('about.foundation.description')
    },
    {
      icon: '🪷',
      color: 'bg-pink-500',
      title: t('about.mission.title'),
      description: t('about.mission.description')
    },
    {
      icon: '🔱',
      color: 'bg-green-500',
      title: t('about.service.title'),
      description: t('about.service.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-red-700 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Beautiful temple architecture details */}
            <img 
              src={templeImg} 
              alt="Intricate temple architecture with carved pillars and ornate details" 
               className="w-[800px] h-[700px]" 
            />
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center text-white text-xl flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-cinzel text-xl font-semibold text-red-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
