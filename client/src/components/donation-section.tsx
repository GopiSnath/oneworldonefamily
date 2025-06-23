import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Donation } from '@shared/schema';

export function DonationSection() {
  const { t, i18n } = useTranslation();
  
  const { data: donations, isLoading } = useQuery<Donation[]>({
    queryKey: ['/api/donations'],
  });

  if (isLoading) {
    return (
      <section id="donate" className="py-20 bg-yellow-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-8">
                  <div className="h-20 bg-gray-200 rounded mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-16 bg-gray-200 rounded mb-6"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="donate" className="py-20 bg-yellow-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-red-700 mb-4">
            {t('donate.title')}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('donate.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donations?.map((donation, index) => {
            const progressPercentage = (donation.currentAmount / donation.targetAmount) * 100;
            const bgColorMap: Record<string, string> = {
              '🏛️': 'bg-orange-500',
              '🪷': 'bg-pink-500',
              '🍽️': 'bg-green-500'
            };

            return (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 ${bgColorMap[donation.icon] || 'bg-orange-500'} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl text-white`}>
                        {donation.icon}
                      </div>
                      <h3 className="font-cinzel text-xl font-semibold text-red-700 mb-2">
                        {i18n.language === 'ta' && donation.categoryTa ? donation.categoryTa : donation.category}
                      </h3>
                      <p className="text-gray-700">
                        {i18n.language === 'ta' && donation.descriptionTa ? donation.descriptionTa : donation.description}
                      </p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{t('donate.progress')}</span>
                        <span>₹{donation.currentAmount.toLocaleString()} / ₹{donation.targetAmount.toLocaleString()}</span>
                      </div>
                      <Progress 
                        value={progressPercentage} 
                        className="h-2"
                      />
                    </div>
                    
                    <Button 
                      className="w-full py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors"
                      size="lg"
                    >
                      {t('donate.contributeNow')}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
