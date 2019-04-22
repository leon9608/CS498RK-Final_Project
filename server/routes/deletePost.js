var express = require('express'),
    router = express.Router(),
    posts = require('../models/post'),
    mongoose = require('mongoose');

//Delete, api/deletePost/:id
router.delete('/:id', function(req, res){
    posts.findByIdAndDelete(req.params.id, (err, res_post) => {
        if(err || !res_post){
            res.status(404).send({
                message: 'Failed'
            });
        } else {
            //TODO: remove the post id from the user's postsIds list
            res.status(200).send({
                message: 'Success'
            });
        }
    });
});
module.exports = router;
