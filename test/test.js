var expect = require('chai').expect;
const readline = require('readline');

let numberOfDice , numberOfFaces;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askDice() {
    return new Promise((resolve) => {
        rl.question('Number of dice(s) ? ', (dices) => { resolve(dices) })
    })
}

function askFace(dice) {
    return new Promise((resolve) => {
        rl.question('Number of face(s) ? ', (faces) => { resolve([dice, faces]) })
    })
}

let fetchData = () => {
    return new Promise((resolve, reject) => {
        return askDice().then((res) => {
            askFace(res).then((res) => {
                console.log(`You typed ${res[0]} dice(s) and ${res[1]} face(s).`);

                numberOfDice = parseInt(res[0]);
                numberOfFaces = parseInt(res[1]);

                rl.close();
                resolve();
            });
        });
    });
};

beforeEach(() => {
    return new Promise((resolve, reject) => {
        fetchData().then(() => resolve());
    });
});

 describe('Throws', function () {
     describe('Number of dice not null && not above 100', function () {
         it('should return a number > 0 and less or equal to 100', function () {
             expect(numberOfDice).to.be.at.least(1);
             expect(numberOfDice).not.to.be.above(100);
         });
     });
     /*describe('Number of faces between 2 and 100', function () {
         it('should return a number >= 2 && <= 100', function () {
             expect(numberOfFaces).to.be.at.least(2);
             expect(numberOfFaces).not.to.be.above(100);
             done();
         });
     });
     describe('The sum is equal to the addition of the faces from all dices', function () {
         it('should return a sum', function () {
             let dicesface = [];
             for (let i = 0; i < numberOfDice; i++) {
                 var min = 1;
                 var max = numberOfDice + 1;
                 var random = parseInt(Math.random() * (+max - +min) + +min);

                 dicesface.push(random);
             }

             let result = 0;
             for (let i = 0; i < dicesface.length; i++) {
                 result += dicesface[i];
             }
             expect(result).to.be.a('number');
         });
     });*/
 });
