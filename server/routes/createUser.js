var express = require('express'),
    router = express.Router(),
    users = require('../models/user'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

//Post, api/postJob
router.post('/', function (req, res) {
    if (mongoose.connection.readyState === 0) {
        res.status(500).json({
            message: 'Database connection is down', data: null
        })
        return;
    }

    var user = new users(req.body);
    bcrypt.hash(req.body.password, 10, function (err,   hash) {
        if(err){
            res.status(400).send({
                message: 'Password encoding error',
                data: []
            });
        } else{
            user.password = hash;
            user.save().then(res_user => {
                res.status(201).send({
                    message: 'OK',
                    data: res_user._id
                });
            }).catch(err => {
                res.status(404).send({
                    message: 'Failed to create user',
                    data: []
                });
            });
        }
    })
});

module.exports = router;
