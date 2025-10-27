import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

// Placeholder logos for demonstration
const partners = [
  { name: 'Four Seasons', logo: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> },
  { name: 'Ritz-Carlton', logo: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path> },
  { name: 'St. Regis', logo: <path d="M22 12h-4l-3-9L9 21H5l3-9-6 9H1"></path> },
  { name: 'Aman', logo: <circle cx="12" cy="12" r="10"></circle> },
  { name: 'Belmond', logo: <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path> },
  { name: 'Rosewood', logo: <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9 M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4 M4 9h16"></path> }
];

const Partners: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">{t('partners.title')}</h2>
                    <p className="mt-2 text-3xl font-brand text-[#E0B841]">{t('partners.subtitle')}</p>
                </div>
                <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8 md:gap-x-16">
                        {partners.map((partner) => (
                            <div key={partner.name} className="group flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" title={partner.name}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto text-gray-400 group-hover:text-[#E0B841] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                    {partner.logo}
                                </svg>
                                <span className="ms-3 text-2xl font-brand text-gray-400 group-hover:text-[#E0B841] transition-colors duration-300">{partner.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;