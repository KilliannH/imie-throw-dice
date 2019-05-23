var expect = require('chai').expect;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askThrow() {
    return new Promise((resolve) => {
        rl.question('Enter one or more throw with the synthax xdY : ', (data) => { resolve(data) })
    })
}

let throws = [];

let fetchData = () => {
    return new Promise((resolve, reject) => {
        return askThrow().then((data) => {
                console.log(`You typed : ${data}.`);
                rl.close();

                let throwSpliced = [];

                if(data.includes(' ')) {
                    throwSpliced = data.split(' ');

                    for (let i = 0; i < throwSpliced.length; i++) {
                        if (throwSpliced[i].includes('d')) {
                            throws.push({
                                nb_dices: parseInt(throwSpliced[i].split('d')[0]),
                                nb_faces: parseInt(throwSpliced[i].split('d')[1])
                            });
                        }
                    }
                } else {
                    if(data.includes('d')) {
                        throws.push({
                            nb_dices: parseInt(data.split('d')[0]),
                            nb_faces: parseInt(data.split('d')[1])
                        })
                    }
                }

                console.log(throws);

                resolve();
        });
    });
};

before(() => {
    return new Promise((resolve, reject) => {
        fetchData().then(() => resolve());
    });
});

 describe('Entries', function() {
     describe('Ensure inputs are integers', function () {
         it('should return an integer > 0', function () {
             expect(throws).to.be.instanceOf(Array);
             expect(throws).to.have.length.above(0);

             for(let i = 0; i < throws.length; i++) {
                 expect(throws[i]).to.be.an('object');
                 expect(throws[i].nb_dices).to.be.a('number');
                 expect(throws[i].nb_dices).to.be.above(0);

                 expect(throws[i].nb_faces).to.be.a('number');
                 expect(throws[i].nb_faces).to.be.above(0);
             }
         });
     });
 });

 describe('Throws', function () {
     describe('Number of dice not null && not above 100', function () {
         it('should return a number > 0 and less or equal to 100', function () {
             for(let i = 0; i < throws.length; i++) {
                 expect(throws[i].nb_dices).to.be.at.least(1);
                 expect(throws[i].nb_dices).not.to.be.above(100);
             }
         });
     });
     describe('Number of faces between 2 and 100', function () {
         it('should return a number >= 2 && <= 100', function () {
             for(let i = 0; i < throws.length; i++) {
                 expect(throws[i].nb_faces).to.be.at.least(2);
                 expect(throws[i].nb_faces).not.to.be.above(100);
             }
         });
     });
     describe('The sum is equal to the addition of the faces from all dices', function () {
         it('should return a sum', function () {

             for (let i = 0; i < throws; i++) {
                 let dicesface = [];
                 for(let j = 0; j < throws[i].nb_dices; j++) {
                     var min = 1;
                     var max = throws[i].nb_faces + 1;
                     var random = parseInt(Math.random() * (+max - +min) + +min);
                     dicesface.push(random);
                 }

                let result = 0;
                for (let j = 0; j < dicesface.length; j++) {
                 result += dicesface[j];
                }

                throws[i].dices_face = dicesface;
                throws[i].result = result;
                 expect(max).to.be.a('number');
                 expect(result).to.be.a('number');
             }
             expect(throws).to.be.an('array');
         });
     });
 });
