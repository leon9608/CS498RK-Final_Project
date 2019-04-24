var express = require('express'),
    router = express.Router(),
    posts = require('../models/post'),
    mongoose = require('mongoose'),
    users = require('../models/user');


//Delete, api/deletePost/:id
router.delete('/:id', function(req, res){
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
