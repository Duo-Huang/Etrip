"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = (color, ...args) => {
    const str = args.reduce((result, item) => {
        return result += item;
    }, '');
    console.log(color(str));
};
//# sourceMappingURL=commonFunc.js.map