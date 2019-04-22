var express = require('express'),
    router = express.Router(),
    posts = require('../models/post'),
    mongoose = require('mongoose');

//Post, api/postJob
router.post('/', function(req, res){
    var post = new posts(req.body);
    //TODO: need to update new post id to the corresponding user
    var userId = req.body.userId;

    post.
        save().
        then(res_post => {
            res.status(201).send({
                message: 'OK',
                data: res_post
            });
        }).
        catch(err => {
            res.status(404).send({
                message: 'Faile to create user',
                data: []
            });
        });

});

module.exports = router;
