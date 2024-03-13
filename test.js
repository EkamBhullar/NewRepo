const request = require('supertest');
const assert = require('assert');
const app = require('./testserver');

describe('GET /', () => {
  test('It should respond with status code 200',  () => {
    const response =  request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('It should respond with HTML content', () => {
    const response =  request(app).get('/');
    expect(response.headers['content-type']).toContain('text/html');
  });
});


