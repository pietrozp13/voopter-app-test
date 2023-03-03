import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './langs/pt-BR.json';
import enUS from './langs/en-US.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'pt',
  fallbackLng: 'pt',
  resources: {
    en: enUS,
    pt: ptBR,
    ptBR: ptBR,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
  cleanCode: true,
});

export default i18n;
