import { getUrlParams, getCookie, setCookie } from '../utils/commonFunc';

const supportLanguage = ['zh', 'en'];
const defaultLanguage = 'zh';

const getLanguage = (key) => {
    window.urlParams || (window.urlParams = {});
    const languageInUrl = getUrlParams(key);
    const languageInCookie = getCookie(key);
    if (languageInUrl) {
        window.urlParams.lang = languageInUrl;
    } else if (languageInCookie) {
        window.urlParams.lang = languageInCookie;
    } else {
        const lang = (navigator.browserLanguage || navigator.language).toLowerCase();
        for (let i = 0; i < supportLanguage.length; i++) {
            if (lang.indexOf(supportLanguage[i]) >= 0) {
                window.urlParams.lang = supportLanguage[i];
                break;
            }
        }
    }

    if (supportLanguage.includes(window.urlParams.lang)) {
        setCookie(key, window.urlParams.lang);
        return window.urlParams.lang;
    }
    setCookie(key, defaultLanguage);
    return defaultLanguage;
}

export default getLanguage;

