import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ta' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex items-center space-x-2 bg-yellow-100 rounded-full p-2">
      <Button
        variant={i18n.language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => i18n.changeLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          i18n.language === 'en' 
            ? 'bg-orange-500 text-white hover:bg-red-600' 
            : 'text-red-700 hover:bg-orange-500 hover:text-white'
        }`}
      >
        EN
      </Button>
      <Button
        variant={i18n.language === 'ta' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => i18n.changeLanguage('ta')}
        className={`px-3 py-1 rounded-full text-sm font-medium ${
          i18n.language === 'ta' 
            ? 'bg-orange-500 text-white hover:bg-red-600' 
            : 'text-red-700 hover:bg-orange-500 hover:text-white'
        }`}
      >
        த
      </Button>
    </div>
  );
}
