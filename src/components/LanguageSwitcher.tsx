
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white rounded-full shadow-lg p-2 flex gap-2">
      <button 
        onClick={() => changeLanguage('en')} 
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${i18n.language === 'en' ? 'bg-primary text-white' : 'bg-gray-100'}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('es')} 
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${i18n.language === 'es' ? 'bg-primary text-white' : 'bg-gray-100'}`}
      >
        ES
      </button>
      <button 
        onClick={() => changeLanguage('fr')} 
        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${i18n.language === 'fr' ? 'bg-primary text-white' : 'bg-gray-100'}`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
