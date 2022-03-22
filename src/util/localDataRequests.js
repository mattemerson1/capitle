const capitals_data = require('../data/capitals_data.json');

const keyFilter = (key) => (item) => (item.key === key);

module.exports = {
  keyFilter,
  capitals_data
}