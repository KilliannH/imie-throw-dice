var expect = require('chai').expect;

let numberOfDice , numberOfFaces;

beforeEach(function (done) {
    numberOfDice = 100;
    numberOfFaces = 2;
    done();
});

describe('Throws', function() {
    describe('Number of dice not null && not above 100', function() {
        it('should return a number > 0 and less or equal to 100', function(done) {
            expect(numberOfDice).to.be.at.least(1);
            expect(numberOfDice).not.to.be.above(100);
            done();
        });
    });
    describe('Number of faces between 2 and 100', function() {
        it('should return a number >= 2 && <= 100', function(done) {
            expect(numberOfFaces).to.be.at.least(2);
            expect(numberOfFaces).not.to.be.above(100);
            done();
        });
    });
    describe('The sum is equal to the addition of the faces from all dices', function() {
        it('should return a sum', function(done) {
            let dicesface = [];
            for(let i = 0; i < numberOfDice; i++) {
                var min = 1;
                var max = numberOfDice + 1;

                var random = parseInt(Math.random() * (+max - +min) + +min);

                dicesface.push(random);
            }

            let result = 0;
            for(let i = 0; i < dicesface.length; i++) {
                result += dicesface[i];
            }
            expect(result).to.be.a('number');
            done();
        });
    });
});
