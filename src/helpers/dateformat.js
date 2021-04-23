const moment = require('moment');
moment.locale('ru');

const formatter = "DD YYYY[, ]HH:mm";

module.exports = (options) => moment(date.trim()).format(formatter);
