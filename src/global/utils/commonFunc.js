
export const getUrlParams = (key) => {
    const queryStringArr = window.location.search.substring(1).split('&');
    for (let i = 0; i < queryStringArr.length; i++) {
        const item = queryStringArr[i];
        if (item.indexOf(key) >= 0) {
            return item.split('=')[1];
        }
    }
    return '';
}

export const getCookie = (key) => {
    const arr = document.cookie.split(';');
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item.indexOf(key) >= 0) {
            return item.split('=')[1];
        }
    }
    return '';
}

export const setCookie = (key, value, expires) => {
    if (expires) {
        const exp = new Date();
        exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000);
        document.cookie = `${key}=${value};expires=${exp.toGMTString()}`;
        return;
    }
    document.cookie = `${key}=${value}`;
}

export const addOrReplaceUrlParams = (key, value) => {
    const queryStringArr = window.location.search.substring(1).split('&');
    const newQueryString = queryStringArr.reduce((result, item, index, arr) => {
        if (item.indexOf(`${key}=`) >= 0) {
            console.log(result, item, index, arr)
            return `${result}&${key}=${value}`;
        } else if (index === arr.length - 1) {
            return `${result}&${item}&${key}=${value}`;
        }
        return `${result}&${item}`;
    }, '');
    return window.location.href.replace(window.location.search, `?${newQueryString.substring(1)}`);
}

export const changeLanguage = (lang) => {
    window.location.replace(addOrReplaceUrlParams('locale', lang));
}