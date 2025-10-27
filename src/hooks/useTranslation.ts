import { useLanguage } from '../context/LanguageContext';
import { translations } from '../constants/translations';

// A simple recursive key accessor
const get = (obj: any, path: string): string => {
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) return path; // Return key path if not found
  }
  return result;
};


export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const translationSet = translations[language] || translations.en;
    return get(translationSet, key);
  };

  return { t, language };
};
