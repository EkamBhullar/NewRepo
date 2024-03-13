const request = require('supertest');
const app = require('./testserver');
const { expect } = require('chai'); // Use Chai for assertions

describe('Unit Testing with Mocha and Chai', () => {
    it('should return index.html on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).to.equal(200);
        expect(response.type).to.equal('text/html');
    });

    // Add more test cases as needed
});
