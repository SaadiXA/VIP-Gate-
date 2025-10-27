import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import ContactPage from './pages/ContactPage';
import BackToTopButton from './components/BackToTopButton';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="text-gray-200 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route path="/destinations/:destinationId" element={<DestinationDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <BackToTopButton />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;