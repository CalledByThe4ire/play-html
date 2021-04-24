const moment = require('moment');
moment.locale('ru');

const formatter = 'DD MMMM[, ]HH:mm';

module.exports = (options) => moment(options.fn()).format(formatter);
