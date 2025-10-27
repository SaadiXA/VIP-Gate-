import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import VipGateLogo from './VipGateLogo';

const LanguageToggle: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    // The label shows the language to switch TO.
    const buttonLabel = language === 'en' ? 'AR' : 'EN';
    const ariaLabel = language === 'en' ? 'Switch to Arabic' : 'Switch to English';

    return (
        <button
            onClick={toggleLanguage}
            className="bg-gray-700/50 hover:bg-gray-600/50 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-base flex items-center justify-center w-16 h-9"
            aria-label={ariaLabel}
        >
            {buttonLabel}
        </button>
    );
};

const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/destinations', label: t('nav.destinations') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const activeLinkStyle = {
    color: 'var(--gold)',
  };

  return (
    <header className="bg-glass sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <VipGateLogo className="h-10 sm:h-12" />
            </NavLink>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="text-gray-300 hover:text-[var(--gold)] px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 relative group"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--gold)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </NavLink>
            ))}
          </nav>
          
          <div className="flex items-center">
            <LanguageToggle />
            <div className="md:hidden ms-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-glass border-t border-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:bg-gray-700/50 hover:text-white block px-3 py-2 rounded-md text-xl font-medium"
               style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
