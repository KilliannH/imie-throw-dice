
var expect = require('chai').expect;

describe('Throws', function() {
    let numberOfDice = 2;
    let numberOfFaces = 2;
    describe('Number of dice not null', function() {
        it('should return an error if number of dice is less or equal to 0', function() {
            expect(numberOfDice).to.be.at.least(1);
        });
    });
    describe('Number of faces not null', function() {
        it('should return an error if number of faces is less or equal to 0', function() {
            expect(numberOfFaces).to.be.at.least(1);
        });
    });
});
