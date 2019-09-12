import log4js from 'log4js';
import path from 'path';
import { Request, Response } from 'express';

const isProd = process.env.NODE_ENV === 'production';

const logFileName = 'etrip';

log4js.configure({
    appenders: {
        console: {
            type: 'console',
        },
        log_file: {
            type: 'file',
            filename: path.resolve(process.cwd(), `logs/full/${logFileName}.log`),
            maxLogSize: 20971520, // 文件最大存储空间（byte），当文件内容超过文件存储空间会自动生成一个文件test.log.1的序列自增长的文件
            backups: 3, // default value = 5.当文件内容超过文件存储空间时，备份文件的数量
            // compress : true,//default false.是否以压缩的形式保存新文件,默认false。如果true，则新增的日志文件会保存在gz的压缩文件内，并且生成后将不被替换，false会被替换掉
            encoding: 'utf-8',
        },
        data_file: {
            type: 'dateFile',
            filename: path.resolve(process.cwd(), `logs/date/${logFileName}`),
            alwaysIncludePattern: true, // （默认为false） - 将模式包含在当前日志文件的名称以及备份中
            daysToKeep: 10, // 时间文件 保存多少天，距离当前天daysToKeep以前的log将被删除
            // compress : true, //（默认为false） - 在滚动期间压缩备份文件（备份文件将具有.gz扩展名）
            pattern: '-yyyy-MM-dd-hh.log', // （可选，默认为.yyyy-MM-dd） - 用于确定何时滚动日志的模式。格式:.yyyy-MM-dd-hh:mm:ss.log
            encoding: 'utf-8',
        },
        error_file: {
            type: 'dateFile',
            filename: path.resolve(process.cwd(), `logs/error/${logFileName}`),
            alwaysIncludePattern: true, // （默认为false） - 将模式包含在当前日志文件的名称以及备份中
            daysToKeep: 10, // 时间文件 保存多少天，距离当前天daysToKeep以前的log将被删除
            // compress : true, //（默认为false） - 在滚动期间压缩备份文件（备份文件将具有.gz扩展名）
            pattern: '_yyyy-MM-dd.log', // （可选，默认为.yyyy-MM-dd） - 用于确定何时滚动日志的模式。格式:.yyyy-MM-dd-hh:mm:ss.log
            encoding: 'utf-8', // default "utf-8"，文件的编码
            // compress: true, //是否压缩
        }
    },
    categories: {
        default: { appenders: ['data_file', 'console', 'log_file'], level: 'info' }, // 默认log类型，输出到控制台 log文件 log日期文件 且等级大于info即可
        production: { appenders: ['data_file'], level: 'warn' },  // 生产环境 log类型 只输出到按日期命名的文件，且只输出警告以上的log
        devlopment: { appenders: ['console'], level: 'debug' }, // 开发环境  输出到控制台
        debug: { appenders: ['console', 'log_file'], level: 'debug' }, // 调试环境 输出到log文件和控制台
        error_log: { appenders: ['error_file'], level: 'error' } // error 等级log 单独输出到error文件中 任何环境的errorlog 将都以日期文件单独记录
    }
});

const logger = isProd ? log4js.getLogger('production') : log4js.getLogger('debug');

export const registerApiLogger = (req: Request, res: Response, next: () => void) => {
    const options = {
        method: req.method,
        url: req.url,
        status: res.statusCode,
        query: req.query,
        body: req.body,
    };
    if (!isProd) {
        logger.info(options);
    }
    next();
};

export default logger;
