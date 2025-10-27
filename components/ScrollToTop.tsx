import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Since AOS is loaded via a script tag in index.html, we declare it globally
declare const AOS: any;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This will run on every route change
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }

    // A short delay before refreshing AOS ensures the new content is in the DOM.
    const timer = setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 100);

    return () => clearTimeout(timer);

  }, [pathname]);

  return null;
};

export default ScrollToTop;