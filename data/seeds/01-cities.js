exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('cities').insert([
        { city: 'New York City' },
        { city: 'San Francisco' },
        { city: 'Chicago' },
        { city: 'Montreal' },
      ]);
    });
};
