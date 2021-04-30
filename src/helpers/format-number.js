module.exports = (options) =>
  options
    .fn()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');
