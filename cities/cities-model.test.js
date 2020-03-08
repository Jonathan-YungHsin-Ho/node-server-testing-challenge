const Cities = require('./cities-models');
const db = require('../data/db-config');

describe('cities model', () => {
  beforeEach(async () => {
    await db('cities').truncate();
  });

  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('add()', () => {
    it('should increases database length by 1', async () => {
      const records = await db('cities');
      expect(records).toHaveLength(0);

      await Cities.add({ city: 'Brooklyn' });

      const cities = await db('cities');
      expect(cities).toHaveLength(1);
    });

    it('should add city to database', async () => {
      await Cities.add({ city: 'Brooklyn' });

      const cities = await db('cities');
      expect(cities[0]).toHaveProperty('city');
    });

    it('should add specific city to database', async () => {
      const city = await Cities.add({ city: 'Brooklyn' });

      expect(city.city).toBe('Brooklyn');
    });
  });

  describe('remove()', () => {
    it('should remove an added city', async () => {
      const records = await db('cities').insert({ city: 'Brooklyn' }, 'id');
      expect(records).toHaveLength(1);

      await Cities.remove(1);

      const cities = await db('cities');
      expect(cities).toHaveLength(0);
    });

    it('should show number of cities deleted', async () => {
      await Cities.add({ city: 'Brooklyn' });

      const deleted = await Cities.remove(1);
      expect(deleted).toBe(1);
    });
  });
});
