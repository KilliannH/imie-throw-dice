var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());
app.use(cors());

//Connect to Postgre
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

//Init model (in this same file because it's a simple single page app)
const Throw = sequelize.define('throws', {

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

/////////////// For THROWS ///////////////

/// DEFAULT GET HERE ///
app.get('/api/throws', function (req, res) {

    Throw.findAll().then(throws => {
        res.json(throws)
    })
});

/// GET THROW BY ID ///
app.get('/api/throws/:id', function (req, res) {

    Throw.find({
        where: {
            id: req.params.id
        }
    }).then((data) => data ? res.json(data) : res.status(404).json({error: 'unknown throw'}))
});

/// POST NEW TROW ///
app.post('/api/throws/', function (req, res) {

    Throw.create({
        nb_faces: req.body.nb_faces,
        nb_dices: req.body.nb_dices,
        thrown_by: req.body.thrown_by,
        date: req.body.date

    }).then((newThrow) => res.json(newThrow))
});

/// UPDATE THROW ///
app.put('/api/throws/:id', function (req, res) {

    Throw.find({
        where: {
            id: req.params.id
        }

    }).then((data) => {
        if(data){
            data.updateAttributes({
                nb_faces: req.body.nb_faces,
                nb_dices: req.body.nb_dices,
                thrown_by: req.body.thrown_by,
                date: req.body.date

            }).then(function(throwUpdated) {
                res.json(throwUpdated)
            })
        } else
            res.status(404).json({error: "unknown throw"})
    })
});

/// DELETE THROW ///
app.delete('/api/throws/:id', function (req, res) {

    Throw.destroy({
        where: {
            id: req.params.id
        }
    }).then((deleteThrow) => deleteThrow ? res.json(deleteThrow) : res.status(404).json({error: 'unknown throw'}))
});

app.listen(3000);
console.log('Running on port 3000...');
