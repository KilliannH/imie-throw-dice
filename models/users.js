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

const Users = sequelize.define('users', {

    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }

}, {timestamps: false});

module.exports = Users;
