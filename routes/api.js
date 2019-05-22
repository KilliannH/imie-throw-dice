let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

const config = require('../config');

const authCheck = require('../authCheck');

let Throws = require('../models/throws');
let Users = require('../models/users');

///////////////For Users ///////////////

// Add new user //

router.post('/users/signUp', (req, res) => {
    console.log(req.body.email);
    Users.count({ where: {email: req.body.email}}).then(user => {
        //console.log(user)
        if(user >=1) {
            return res.status(409)
            //error 409 means conflict, 422 means process issues.
            //Use wathever you want.
                .json({message: 'email already exist'});
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({error: err});
                } else {
                    console.log(hash);
                    Users.create({
                        email: req.body.email,
                        password: hash

                    }).then((user) => res.json(user));
                }
            });
        }
    })
});

router.post('/users/login', (req, res) => {

    Users.count({ where: {email: req.body.email}}).then(userCount => {

        //We want to check first if there is one user on the array here

        if(userCount < 1) { //if not, the username is incorrect

            return res.status(401).json({message: 'Auth failed'});
        }

        Users.findOne({ where: {email: req.body.email}}).then(user => {

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err) {
                    return res.status(401).json({message: 'Auth failed'});
                }
                if(result) {
                    const token = jwt.sign({
                        email: user.email,
                        id: user.id
                    }, config.secret, { //The super secret key i choose !! :p
                        expiresIn: "1h"
                    });

                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    });
                }

                res.status(401).json({message: 'Auth failed'});

            });
        });
    });
});

router.delete('/users/:id', (req, res) => {
    Users.destroy({
        where: {
            id: req.params.id
        }
    }).then((user) => user ? res.status(200).json(user) : res.status(404).json({error: 'unknown user'}))
}); //status 200 is the default message when the request is successful

///////////////For Throws ///////////////

router.get('/throws', authCheck, function (req, res) {

    Throws.findAll().then(throws => {
        res.json(throws)
    })
});

router.get('/throws/:id', authCheck, function (req, res) {

    Throws.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => data ? res.json(data) : res.status(404).json({error: 'unknown throw'}))
});

router.post('/throws/', function (req, res) {

    Throws.create({
        nb_faces: req.body.nb_faces,
        nb_dices: req.body.nb_dices,
        result: req.body.result,
        dices_face: req.body.dices_face,
        thrown_by: req.body.thrown_by,
        date: req.body.date
    }).then((newThrow) => res.json(newThrow))
});

/// UPDATE THROW ///
router.put('/api/throws/:id', authCheck, function (req, res) {

    Throws.findOne({
        where: {
            id: req.params.id
        }

    }).then((data) => {
        if(data){
            data.updateAttributes({
                nb_faces: req.body.nb_faces,
                nb_dices: req.body.nb_dices,
                result: req.body.result,
                dices_face: req.body.dices_face,
                thrown_by: req.body.thrown_by,
                date: req.body.date

            }).then(function(throwUpdated) {
                res.json(throwUpdated)
            })
        } else
            res.status(404).json({error: "unknown throw"})
    })
});

router.delete('/throws/:id', authCheck, function (req, res) {

    Throws.destroy({
        where: {
            id: req.params.id
        }
    }).then((deleteThrow) => deleteThrow ? res.json(deleteThrow) : res.status(404).json({error: 'unknown throw'}))
});

module.exports = router;
