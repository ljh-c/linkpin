require('dotenv').config();
const request = require('supertest');

const server = require('../api/server');

describe('server', () => {
  it('should use the testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  it('should return 200 OK', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });

  it('should return a JSON object', async () => {
    const res = await request(server).get('/');
    expect(res.type).toMatch(/json/i);
  });
});
