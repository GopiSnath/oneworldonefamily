import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Event } from '@shared/schema';

export function EventsSection() {
  const { t, i18n } = useTranslation();
  
  const { data: events, isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  if (isLoading) {
    return (
      <section id="events" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-20 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-red-700 mb-4">
            {t('events.title')}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('events.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events?.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-yellow-50 hover:shadow-xl transition-shadow duration-300 border-2 border-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{event.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-700">{event.date.split(' ')[0]}</div>
                      <div className="text-sm text-gray-600">{event.date.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>
                  <h3 className="font-cinzel text-xl font-semibold text-red-700 mb-2">
                    {i18n.language === 'ta' && event.titleTa ? event.titleTa : event.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {i18n.language === 'ta' && event.descriptionTa ? event.descriptionTa : event.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
