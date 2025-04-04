import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';

const deliveryServices = [
  { name: 'Postmates', icon: '/images/postmates.com.png', link: 'https://postmates.com/store/el-rincon-de-jorgito/5bJZ1AhOV82Z2dBj87GKJQ?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas' },
  { name: 'Clover', icon: '/images/clover.com.png', link: 'https://www.clover.com/online-ordering/el-rincon-de-jorgito-san-francisco' },
  { name: 'Seamless', icon: '/images/seamless.com.png', link: 'https://www.seamless.com/menu/el-rincon-de-jorgito-1850-cesar-chavez-st-san-francisco/7752408?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AAiGsoYk4kzdTgdq09BMOw19NfXkgOkBgAjRYGhhQQXIstO59HzzdJu_xwdLZU3X0RB0pp8n8KLT1lhCrjgupaek1giWHiZyCA%3D%3D' },
  { name: 'UberEats', icon: '/images/ubereats.com.png', link: 'https://www.ubereats.com/store/el-rincon-de-jorgito/5bJZ1AhOV82Z2dBj87GKJQ?diningMode=PICKUP&utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas' },
  { name: 'GrubHub', icon: '/images/grubhub.com.png', link: 'https://www.grubhub.com/restaurant/el-rincon-de-jorgito-1850-cesar-chavez-st-san-francisco/7752408?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true&rwg_token=AAiGsoZv0SSNlTe8JXCOU8-EMxo_ajofr0TIq3boli_KeZbSWe740rjsRbEDcTHtcIjdvf35IuSGjeCput-4S3y7bWSKwYQgyg%3D%3D' },
  { name: 'DoorDash', icon: '/images/doordash.com.png', link: 'https://www.doordash.com/store/el-rincon-de-jorgito-san-francisco-27832739/?utm_campaign=gpa&pickup=true&rwg_token=AAiGsoa7Hp33rxLAs60m5iZh8ySQtpa7-9NBqi24IdWyV0gHzGocUvM18VmRI3HwQnNFF2K3l9Z3mlvVrhpXC_q0CkklQWj9XA%3D%3D' },
];

const Navbar: React.FC = () => {
  const { language, setLanguage, translate } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-peru-red flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="font-title text-2xl font-bold text-peru-brown">{translate('appName')}</span>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage('en')}
              className={`language-toggle text-sm font-medium ${language === 'en' ? 'text-peru-red active' : 'text-peru-brown'}`}
            >
              {translate('english')}
            </button>
            <span className="text-peru-brown">|</span>
            <button
              onClick={() => setLanguage('es')}
              className={`language-toggle text-sm font-medium ${language === 'es' ? 'text-peru-red active' : 'text-peru-brown'}`}
            >
              {translate('spanish')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
