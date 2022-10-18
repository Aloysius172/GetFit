const express = require("express");
const router = express.Router();
const passport = require("passport")
const validateTweetInput = require("../../validations/tweet");
const Tweet = require("../../models/Tweets");
const Regimen = require("../../models/Regimens");

router.get("/test", (req, res) => {
    res.json({ msg: "This is the tweet route"});
});

router.get("/", (req,res) => {
    Tweet.find()
    .sort({ date: -1 }) // sort newest
    .then(tweets => res.json(tweets))
    .catch(err => res.status(400).json(err));
});

router.get("/user/:user_id", (req, res) => {
    
    Tweet
        .find({ user_id: req.params.user_id})
        .then(tweets => res.json(tweets))
        .catch(err => res.status(400).json(err))
})

router.get("/regimen/:regimen_id", (req, res) => {
    Tweet.find({ regimen_id: req.params.regimen_id})
        .then(tweets => res.json(tweets))
        .catch((err) => 
            res.status(404).json({ nocommentsfound: "No comments found for the specified regimen"})
        );
});

router.post("/", (req, res) => {
    console.log(req.user_id)
    console.log(req.body)
    const { isValid, errors } = validateTweetInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const newTweet = new Tweet({
        user_id: req.body.user_id,
        commentCreatorName: req.body.commentCreatorName,
        regimen_id: req.body.regimen_id,
        regimenTitle: req.body.regimenTitle,
        regimenCreator_id: req.body.regimenCreator_id,
        regimenCreatorName: req.body.regimenCreatorName, 
        text: req.body.text
    });

    newTweet.save()
    .then(tweet => res.json(tweet))
});

router.patch("/:id", (req, res) => {

    const { isValid, errors } = validateTweetInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors);
    }

    Tweet.findById(req.params.id)
        .then(tweet => {
            tweet.user_id = req.body.user_id,
            tweet.commentCreatorName = req.body.commentCreatorName,
            tweet.regimen_id = req.body.regimen_id,
            tweet.regimenTitle = req.body.regimenTitle,
            tweet.regimenCreator_id = req.body.regimenCreator_id,
            tweet.regimenCreatorName = req.body.regimenCreatorName, 
            tweet.text = req.body.text
    });

    return tweet.save()
    .then(tweet => res.json(tweet))
});

router.delete('/:id', (req, res) => {
    Tweet.findById(req.params.id)
        .then(tweet => {
            Tweet.findByIdAndDelete(tweet.id, function (err) {
                if (err) console.log(err);
                console.log("Successful deletion.")
            })
            return res.status(200).json({ deleted: "true" })
        })
        .catch(err => res.status(404).json({ noregimenFound: "No comment found with that ID" }))
});


module.exports = router;