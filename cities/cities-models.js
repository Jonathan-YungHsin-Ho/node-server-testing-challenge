const db = require('../data/db-config');

module.exports = {
  add,
  remove,
  getAll,
};

async function add(city) {
  return db('cities')
    .insert(city, 'id')
    .then(ids =>
      db('cities')
        .where({ id: ids[0] })
        .first(),
    );
}

async function remove(id) {
  return null;
}

function getAll() {
  return db('cities');
}
