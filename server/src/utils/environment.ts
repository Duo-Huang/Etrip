import dotenv from 'dotenv';
import fs from 'fs';
import logger from './logger';

const envFile = `.env.${process.env.NODE_ENV}`;
if (fs.existsSync(envFile)) {
    logger.debug(`Using ${envFile} file to supply config environment variables`);
    dotenv.config({ path: envFile });
} else {
    logger.error(`${envFile} file not found`);
}

export const MONGODB_URI = process.env['MONGODB_URI'];

if (!MONGODB_URI) {
    logger.error('No mongo connection string. Set MONGODB_URI environment variable.');
    process.exit(1);
}