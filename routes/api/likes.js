const express = require("express");
const router = express.Router();
const passport = require("passport");
const Like = require("../../models/Likes");
const validateLikeInput = require("../../validations/like")

router.get("/test", (req, res) => res.json({ msg: "This is the Like route" }));

router.get('/', (req, res) => {
    Like.find()
        .sort({ date: -1 })
        .then(likes => res.json(likes))
        .catch(err => res.status(404).json({ error: 'No likes found' }));
});


//All like for a regimen showing up by latest createdAt
router.get('/:regimen_id', (req, res) => {
    Vote.find({ regimen_id: req.params.regimen_id })
        .sort({ createdAt: -1 })
        .then(likes => res.json(likes))
        .catch(err =>
            res.status(404).json({ error: 'No likes found from that regimen' }
            )
        );
});



//Specific Like with id 
router.get('/:id', (req, res) => {
    const filter = { _id: req.params.id };

    Like.findOne(filter)
        .then(like => {
            if (like) {
                return res.json(like)
            } else {
                return res.json({ error: "The Like was not found" }).status(404)
            }
        })
        .catch(() => res.status(404).json({ error: "The Like was not found" }))
})

router.post('/', (req, res) => {
    // passport.authenticate("jwt", { session: false }),
        // const { isValid, errors } = validateLikeInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }

        const newLike = new Like({
            user_id: req.body.user_id,
            voted: req.body.voted,
            crawl_id: req.body.crawl_id,
        });

        newLike
            .save()
            .then(like => res.json(like));
    });


// Delete route for like
router.delete('/:id', (req, res) => {

    const likeFilter = { _id: req.params.id };
    // deletes Regimen
    Like.findOneAndRemove(likeFilter)
        .then(like => res.status(200).json(like))
        .catch(() => res.status(404).json({ error: "like not found" })
        )
});

module.exports = router;