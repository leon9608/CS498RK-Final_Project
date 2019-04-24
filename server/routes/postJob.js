var express = require('express'),
    router = express.Router(),
    posts = require('../models/post'),
    mongoose = require('mongoose');
    users = require('../models/user');

//Post, api/postJob
router.post('/', function(req, res){
    var post = new posts(req.body);
    var userId = req.body.userId;

    post.
        save().
        then(res_post => {
        users.findByIdAndUpdate(userId, {$push: {postsIds: res_post._id}}, function (err, item) {
            if(err){
                res.status(404).send({
                    message: 'Failed to update the posts to the user',
                    data: []
                });
            } else {
                res.status(201).send({
                    message: 'OK',
                    data: res_post
                });
            }
        })
        }).
        catch(err => {
            console.log(err)
            res.status(404).send({
                message: 'Failed to create the job post',
                data: []
            });
        });

});

module.exports = router;
