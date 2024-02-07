const request = require('supertest');
const assert = require('assert');
const app = require('./testserver');

describe('Unit Testing ', function() {
    it('should return index.html on GET /', function(done) {
                request(app)
                    .get('/')
                    .expect(200)
                    .end(function(err, res) {
                        if (err) return done(err);
                        assert.strictEqual(res.type, 'text/html');
                        done();
                    });
            });

    it('should return style.css on GET /style.css', function(done) {
        request(app)
            .get('/style.css')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                assert.strictEqual(res.type, 'text/css');
                done();
            });
    });
    it('should have a valid HTML structure', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // Check if the response body contains the head and body tags
                assert(res.text.includes('<head>') && res.text.includes('</head>'));
                assert(res.text.includes('<body>') && res.text.includes('</body>'));
                done();
            });
    });
});
