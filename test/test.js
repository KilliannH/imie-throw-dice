var assert = require('assert');
describe('Math', function() {
    describe('Test1', function() {
        it('should return 3*3', function() {
            assert.equal(3*3, 9);
        });
    });
    describe('Test2', function() {
        it('should return (3-4) * 8', function() {
            assert.equal((3-4) * 8, -8);
        });
    });
});
