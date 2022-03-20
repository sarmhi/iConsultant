const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const dotenv = require('dotenv');

dotenv.config();

const formatOut = bformat({ outputMode: 'short' });


const log = bunyan.createLogger({
    name: process.env.APP_NAME,
    stream: formatOut,
    level: process.env.LOG_LEVEL
})