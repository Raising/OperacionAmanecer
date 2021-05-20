import Vue from 'vue';
import VueI18n, { LocaleMessages, LocaleMessageObject } from 'vue-i18n';
import { ENUM } from '@COMMONS/constants';
import cookie from '../main/cookie';

Vue.use(VueI18n);

function loadCommonLocale(): LocaleMessages {
  const messages: LocaleMessages = {};
  // Initialization from core translations
  const localesCore = require.context('@COMMONS/definitions/translations', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  localesCore.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = localesCore(key);
    }
  });

  return messages;
}

let commonsLocale = loadCommonLocale();
let defaultLanguaje = cookie.get('i18next') || process.env.VUE_APP_I18N_LOCALE;

const i18nInstance = new VueI18n({
  locale: defaultLanguaje || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: [...new Set([...Object.keys(commonsLocale), ...Object.keys(commonsLocale)])].reduce(
    (acc: { [location: string]: any }, location) => {
      acc[location] = Object.assign({}, commonsLocale[location]);
      return acc;
    },
    {},
  ),
  silentTranslationWarn: true,
});
export default i18nInstance;

const initTranslations = (context: any, initialLoadContent: any) => {};

export { initTranslations };
