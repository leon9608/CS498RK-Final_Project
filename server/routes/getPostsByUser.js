var express = require('express'),
    router = express.Router(),
    posts = require('../models/post'),
    mongoose = require('mongoose'),
    users = require('../models/user');

//Get, api/getPostsByUser/:id

router.get("/:id", function (req, res) {

    users.findById(req.params.id, (err, res_user) => {
        if (err || !res_user) {
            res.status(404).send({
                message: 'Failed to find the user',
                data: []
            });
        } else {
            posts.find({ _id: { $in: res_user.postsIds }}, (err, res_posts)=>{
                if (err) {
                    res.status(404).send({
                        message: 'Error on finding the posts',
                        data: []
                    });
                }else{
                    res.status(200).send({
                        message: 'OK',
                        data: res_posts
                    });
                }

            } )

        }
    });
});
module.exports = router;
