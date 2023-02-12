import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  en: () => require('./Locales/en.json'),
  vi: () => require('./Locales/vi.json'),
};

export const translate = memoize(
  (key: string, config?: any) => i18n.t(key, config),
  (key: string, config: any) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  const fallback = {languageTag: 'en'};
  const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;
  //@ts-ignore
  translate.cache.clear();
  //@ts-ignore
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};
