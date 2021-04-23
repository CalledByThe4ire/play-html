const date = require('helper-date');

// moment.locale('ru');

// module.exports = (options) => moment().format();
module.exports = (options) => date(options.fn(this));
