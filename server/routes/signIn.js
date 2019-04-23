var express = require('express'),
    router = express.Router(),
    users = require('../models/user'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

//Post, api/signIn
router.post('/', function (req, res) {
    if (mongoose.connection.readyState === 0) {
        res.status(500).json({
            message: 'Database connection is down', data: null
        })
        return;
    }
    console.log(req)
    users.findOne({email: req.body.email}).exec().then(function (item) {
        console.log(item)
        if (item === null) {
            res.status(404).json({
                message: 'User not found',
                data: null
            });
        } else {
            bcrypt.compare(req.body.password, item.password, function (err, result) {
                if(err){

                }else{
                    console.log(result)
                    if(result === true){
                        res.status(200).json({
                            message: "OK",
                            data: item,
                        });
                    } else{
                        res.status(401).json({
                            message: "Wrong password",
                            data: null,
                        });
                    }
                }
            })
        }
    }).catch(
        (error) => {
            console.log(error)
            if (error) {
                res.status(500).json({
                    message: 'Server error', data: null
                })
            }
        }
    )
});

module.exports = router;
