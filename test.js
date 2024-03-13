const request = require('supertest');
const assert = require('assert');
const app = require('./testserver');

describe('GET /', () => {
  test('It should respond with status code 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It should respond with HTML content', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toContain('text/html');
  });
});

describe('GET /style.css', () => {
  test('It should respond with status code 200', async () => {
    const response = await request(app).get('/style.css');
    expect(response.statusCode).toBe(200);
  });

  test('It should respond with CSS content', async () => {
    const response = await request(app).get('/style.css');
    expect(response.headers['content-type']).toContain('text/css');
  });
});
