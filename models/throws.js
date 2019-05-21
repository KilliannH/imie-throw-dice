let Sequelize = require('sequelize');

//Connect to Postgres
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/imie-throw-dice-db');

//Let's checkout connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const Throws = sequelize.define('throws', {

    nb_faces: {
        type: Sequelize.BIGINT
    },
    nb_dices: {
        type: Sequelize.BIGINT
    },
    thrown_by: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.BIGINT
    }

}, {timestamps: false});

module.exports = Throws;
