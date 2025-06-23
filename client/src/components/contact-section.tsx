import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import type { InsertContactRequest } from '@shared/schema';

export function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    prayerRequest: true
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Prayer Request Sent",
        description: "Your prayer request has been received. May divine blessings be with you.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        prayerRequest: true
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send prayer request. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.templeAddress'),
      content: "123 Sacred Street, Divine City\nTamil Nadu, India - 600001",
      color: "bg-orange-500"
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: "+91 98765 43210\n+91 87654 32109",
      color: "bg-pink-500"
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: "info@angalaparameshwaritrust.org\nseva@angalaparameshwaritrust.org",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: t('contact.templeTimings'),
      content: t('contact.timings.morning') + "\n" + t('contact.timings.evening'),
      color: "bg-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-red-700 mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-cinzel text-2xl font-semibold text-red-700 mb-6">
                {t('contact.visitTemple')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-10 h-10 ${info.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700">{info.title}</h4>
                      <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-yellow-100 shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-cinzel text-2xl font-semibold text-red-700 mb-6">
                  {t('contact.form.title')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-red-700 font-medium">{t('contact.form.name')}</Label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder={t('contact.form.namePlaceholder')}
                        className="border-orange-500 focus:ring-orange-500 focus:border-orange-500"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-red-700 font-medium">{t('contact.form.phone')}</Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder={t('contact.form.phonePlaceholder')}
                        className="border-orange-500 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-red-700 font-medium">{t('contact.form.email')}</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="border-orange-500 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-red-700 font-medium">{t('contact.form.prayerRequest')}</Label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={t('contact.form.prayerPlaceholder')}
                      className="border-orange-500 focus:ring-orange-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
                    size="lg"
                    disabled={contactMutation.isPending}
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    {contactMutation.isPending ? "Sending..." : t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
