let Sequelize = require('sequelize');

//Connect to Postgres
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/imie-throw-dice-db');

//Let's checkout connection
sequelize
    .authenticate()
    .then(() => {
        //console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const Throws = sequelize.define('throws', {

    nb_faces: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    nb_dices: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    result: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    dices_face: {
        type: Array(Sequelize.BIGINT),
        allowNull: false,
    },
    thrown_by: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    date: {
        type: Sequelize.BIGINT
    }

}, {timestamps: false});

module.exports = Throws;
