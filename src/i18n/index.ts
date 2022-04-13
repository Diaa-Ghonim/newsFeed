import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {ar} from './ar';
import {en} from './en';

const resources = {ar, en};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: 'ar',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
