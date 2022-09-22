const express = require("express");
const router = express.Router();
const passport = require("passport");
const Like = require("../../models/Likes");
const validateLikeInput = require("../../validations/like")

//https://mongoosejs.com/docs/populate.html

router.get("/test", (req, res) => res.json({ msg: "This is the Like route" }));

router.get('/', (req, res) => {
    Like.find()
        .sort({ date: -1 })
        .then(likes => res.json(likes))
        .catch(err => res.status(404).json({ error: 'No likes found' }));
});


//All likes for a regimen showing up by latest createdAt
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
            regimen_id: req.body.regimen_id,
        });

        newLike.save()
            .then(like => res.json(like))
            .catch(err => console.log(err));
    });


// Delete route for like
// router.delete('/:id', (req, res) => {

//     const likeFilter = { _id: req.params.id };
//     // deletes Regimen
//     Like.findOneAndRemove(likeFilter)
//         .then(like => res.status(200).json(like))
//         .catch(() => res.status(404).json({ error: "like not found" })
//         )
// });

router.delete('/:id', (req, res) => {
    Like.findById(req.params.id)
        .then(like => {

            // if (like.ownerId.toString() !== req.user.id) {
            //     return res.status(401).json({ unauthorized: 'Only the owner can delete this like.' })
            // }

            Like.findByIdAndDelete(like.id, function (err) {
                if (err) console.log(err);
                console.log("Successful deletion.")
            })
            return res.status(200).json({ deleted: "true" })
        })
        .catch(err => res.status(404).json({ nolikeFound: "No like found with that ID" }))
})

module.exports = router;