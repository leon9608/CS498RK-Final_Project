var express = require('express'),
    router = express.Router(),
    posts = require('../models/post'),
    mongoose = require('mongoose'),
    users = require('../models/user');

// Respond with a list of posts
// Get api/posts
router.get('/', function(req, res){
    var query = posts.find({});

    let whereClause = req.query.where;
    if(whereClause){
        query = posts.find(JSON.parse(whereClause));
    }

    let sortClause = req.query.sort;
    if(sortClause){
        query = query.sort(JSON.parse(sortClause));
    }

    query.
        exec((err, res_posts) => {
        if(err) {
            res.status(500).send({
                message: 'Server Error, failed to retrive posts',
                data: []
            });
        } else {
            res.status(200).send({
                message: 'OK',
                data: res_posts
            });
        }
    });
});

// Response with a post detail by post id
// Get api/posts/:id
router.get("/:id", function(req, res){
    posts.findById(req.params.id, (err, res_post) => {
        if(err || !res_post) {
            res.status(404).send({
                message: 'Failed to retrive post',
                data: []
            });
        } else {
            res.status(200).send({
                message: 'OK',
                data: res_post
            });
        }
    });
});

// Create a new post in the database, professor only
// Post api/posts/add
router.post('/add', function(req, res){
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

// Delete specific post by post id, only for professor
// Delete api/posts/delete/:id
router.delete('/delete/:id', function(req, res){
    posts.findByIdAndDelete(req.params.id, (err, res_post) => {
        console.log(err)
        console.log(res_post)
        if(err || !res_post){
            res.status(404).send({
                message: 'Failed'
            });
        } else {
            users.findOneAndUpdate({postsIds:res_post._id},{$pull: {postsIds: res_post._id}}, function(err, item){
                console.log(err)
                console.log(item)
                res.status(200).send({
                    message: 'Success'
                });
            })
        }
    });
});


module.exports = router;
