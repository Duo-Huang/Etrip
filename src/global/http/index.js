/* eslint-disable */
import axios from 'axios';
import * as apis from './apis';

class Deferred {
    constructor() {
        this.promise = new Promise((_resolve, _reject) => {
            this.resolve = _resolve;
            this.reject = _reject;
        })
    }

    resolve(arg) {
        this.resolve(arg);
    }

    reject(arg) {
        this.reject(arg);
    }
}

export default class Http {
    constructor({ baseUrl, timeout = 60000, mask = false }) {
        this.globalConfig = { baseUrl, timeout, mask }
        this.xhr = axios.create({
            baseURL: baseUrl,
            timeout
        });
        this.apis = apis;
    }

    fetch({
        url,
        method = 'get',
        params,
        data,
        baseUrl,
        headers,
        timeout = this.globalConfig.timeout,
        mask = this.globalConfig.mask
    }) {
        const config = { ...{ timeout, mask }, ...arguments[0] };
        const { mask: isShowMask, ...reqConfig } = config;
        if (isShowMask) {
            // TODO: show mask loading...
        }
        const defer = new Deferred();
        this.xhr(reqConfig).then((response) => {
            if (isShowMask) {
                // TODO: hide mask loading
            }
            if (response.status === 200) {
                defer.resolve(response);
            } else {
                // 待处理
            }
        }).catch((err) => {
            defer.reject(err);
        });

        return defer.promise;
    }

    formmatUrl(urlSchema, params) {
        let url = urlSchema;
        for (const key in params) {
            url = url.replace(`:${key}`, params[key]);
        }
        return url;
    }

}