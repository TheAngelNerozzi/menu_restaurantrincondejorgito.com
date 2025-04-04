import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const Footer: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <footer className="bg-peru-brown text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-title text-2xl font-bold">{translate('appName')}</h2>
            <p className="mt-2 text-peru-beige/80">{translate('tagline')}</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-semibold mb-2">{translate('contact')}</h3>
              <p className="text-sm text-peru-beige/80">(415) 609-5160</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{translate('location')}</h3>
              <p className="text-sm text-peru-beige/80">1850 Cesar Chavez St</p>
              <p className="text-sm text-peru-beige/80">San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-peru-beige/20 mt-8 pt-8 text-center">
          <p className="text-sm text-peru-beige/60">{translate('footer')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
