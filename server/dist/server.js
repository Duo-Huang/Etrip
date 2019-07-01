"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chalk_1 = __importDefault(require("chalk"));
const config = __importStar(require("./config"));
const router_1 = __importDefault(require("./router"));
const commonFunc_1 = require("./utils/commonFunc");
const app = express_1.default();
app.use(config.BASE_URL, router_1.default);
app.listen(config.PORT, () => {
    commonFunc_1.log(chalk_1.default.green, 'Server is runing at ', config.PORT, ' !');
});
//# sourceMappingURL=server.js.map