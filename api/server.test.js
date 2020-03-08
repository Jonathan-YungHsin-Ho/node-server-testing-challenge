const request = require('supertest');

const server = require('./server');

describe('GET /', () => {
  // should return http 200 ok
  it('should return http 200 status code', () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  // should return json
  it('should return json', () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });

  // should return object with message property with value 'Hello world from Node Server Testing Challenge!'
  it('should return { message }', () => {
    return request(server)
      .get('/')
      .then(res => {
        expect(res.body).toEqual({
          message: 'Hello world from Node Server Testing Challenge!',
        });
      });
  });
});

describe('GET /cities', () => {
  // should return http 200 ok
  it('should return http 200 status code', async () => {
    const response = await request(server).get('/cities');

    expect(response.status).toBe(200);
  });

  // should return json
  it('should return json', async () => {
    const response = await request(server).get('/cities');

    expect(response.type).toMatch(/json/i);
  });

  // should return array of city objects
  it('should return array of city objects', async () => {
    const response = await request(server).get('/cities');

    if (response.body.length > 0) {
      expect(response.body[0]).toHaveProperty('city');
    }
  });
});
