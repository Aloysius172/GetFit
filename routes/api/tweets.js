const express = require("express");
const router = express.Router();
const passport = require("passport")
const validateTweetInput = require("../../validations/tweet");
const Tweet = require("../../models/Tweets")

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
        .find({ user: req.params.user_id})
        .then(tweets => res.json(tweets))
        .catch(err => res.status(400).json(err))
})

router.post("/", (req, res) => {
    console.log(req.user_id)
    console.log(req.body)
    const { isValid, errors } = validateTweetInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const newTweet = new Tweet({
        user_id:req.body.user_id,
        text: req.body.text
    });

    newTweet.save()
    .then(tweet => res.json(tweet))
}
)

module.exports = router;