const db = require('../data/db-config');

module.exports = {
  add,
  remove,
  getAll,
};

async function add(city) {
  return null;
}

async function remove(id) {
  return null;
}

function getAll() {
  return db('cities');
}
