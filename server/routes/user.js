var express = require('express'),
    router = express.Router(),
    users = require('../models/user'),
    mongoose = require('mongoose'),
    posts = require('../models/post'),
    bcrypt = require('bcrypt');

// Create a user
// Post api/user/create
router.post('/create', function (req, res) {
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
                    data: res_user
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

// Get the user data by email, return error code when user is not found
// Post api/user/signIn
router.post('/signIn', function (req, res) {
    if (mongoose.connection.readyState === 0) {
        res.status(500).json({
            message: 'Database connection is down', data: null
        })
        return;
    }
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
                    res.status(500).json({
                        message: 'Password Error', data: null
                    })
                }else{
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

// Get user information by id
// Get api/user/:id
router.get("/:id", function (req, res) {
    users.findById(req.params.id, (err, res_user) => {
        if(err || !res_user) {
            res.status(404).send({
                message: 'Failed to find user',
                data: []
            });
        } else {
            res.status(200).send({
                message: 'OK',
                data: res_user
            });
        }
    });
});

// respond with posts that created by User Id if a professor
// or respond with posts that favorited by User Id if a undergrad
// Get api/user/postList/:id
router.get("/postList/:id", function (req, res) {

    users.findById(req.params.id, (err, res_user) => {
        if (err || !res_user) {
            res.status(404).send({
                message: 'Failed to find the user',
                data: []
            });
        } else {
            var query = posts.find({_id: { $in: res_user.postsIds }});
            let select = req.query.select;
            if(select){
                query = query.select(JSON.parse(select));
            }
            query.exec((err, res_posts)=>{
                if (err) {
                    res.status(404).send({
                        message: 'Error on finding the posts',
                        data: err
                    });
                }else{
                    res.status(200).send({
                        message: 'OK',
                        data: res_posts
                    });
                }
            });

        }
    });
});

// Method for undergrad users to update user's postIds.
// Add a post to favorite when postId does not exist in userIds' postId list, vice versa
// Put api/user/favoriteUpdate
router.put("/favoriteUpdate", function (req, res) {
    users.findOneAndUpdate({_id:req.body.userId, postsIds:req.body.postId}, {$pull: {postsIds: req.body.postId}},  {new : true}, (err, res_user) =>{
        if (err){
            res.status(404).send({
                message: 'Failed to unfavorite',
                data: err
            });
        } else if (!res_user) {
            users.findByIdAndUpdate(req.body.userId, {$push: {postsIds: req.body.postId}},  {new : true}, (err, res_user1) => {
                if (err || !res){
                    res.status(404).send({
                        message: 'Failed to favorite',
                        data: null
                    });
                } else {
                    res.status(200).send({
                        message: 'favorite OK',
                        data: res_user1
                    });
                }
            });
        } else {
            res.status(200).send({
                message: 'unfavorite OK',
                data: res_user
            });
        }
    });
});


module.exports = router;
