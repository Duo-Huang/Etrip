// import axios from 'axios';

// class Deferred {
//     promise;
//     resolve;
//     reject;
//     constructor() {
//         this._promise = new Promise((_resolve, _reject) => {
//             this.resolve = _resolve;
//             this.reject = _reject;
//         })
//     }

//     resolve(arg) {
//         this.resolve(arg);
//     }

//     reject(arg) {
//         this.reject(arg);
//     }
// }

// export class Http {
//     xhr;
//     globalConfig;

//     constructor({ baseUrl, timeout, mask }) {
//         this.globalConfig = { baseUrl, timeout, mask }
//         this.xhr = axios.create({
//             baseURL: baseUrl,
//             timeout
//         });
//     }

//     fetch({
//         url, method,
//         params = '',
//         baseUrl = '',
//         headers = {},
//         timeout = this.globalConfig.timeout,
//         mask = this.globalConfig.mask
//     }) {
//         this.xhr()
//     }


// }