
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
    const { href, protocol, host, pathname, search, hash } = window.location;
    if (!search) {
        return protocol + '//' + host + pathname + `?${key}=${value}` + hash;
    }
    const queryStringArr = search.substring(1).split('&');
    let replaced = false;
    const newQueryString = queryStringArr.reduce((result, item, index, arr) => {
        if (item.indexOf(`${key}=`) >= 0) {
            replaced = true;
            result += `&${key}=${value}`;
        } else if (index === arr.length - 1 && !replaced) {
            result += `&${item}&${key}=${value}`;
        } else {
            result += `&${item}`;
        }
        return result;
    }, '');
    return href.replace(search, `?${newQueryString.substring(1)}`);
}

export const changeLanguage = (lang) => {
    window.location.replace(addOrReplaceUrlParams('locale', lang));
}