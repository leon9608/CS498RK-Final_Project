var express = require('express'),
    router = express.Router(),
    posts = require('../models/post'),
    mongoose = require('mongoose');

// Get api/posts
router.get('/', function(req, res){
    //Default list
    var query = posts.find({});

    //Search with where
    let whereClause = req.query.where;
    if(whereClause){
        query = posts.find(JSON.parse(whereClause));
    }

    //Sort
    let sortClause = req.query.sort;
    if(sortClause){
        query = query.sort(JSON.parse(sortClause));
    }

    //display only certain parameters
    query.
        select('jobName description contactName dateCreated').
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

//Get api/posts/:id
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

module.exports = router;
