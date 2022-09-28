const express = require("express");
const router = express.Router();
const Regimen = require("../../models/Regimens");
const passport = require("passport");
const Users = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "This is the regimen route" }));
// user_id



router.get("/", (req, res) => {
    Regimen.find()
        // .sort({ date: -1 }) // sort newest
        .then(regimen => res.json(regimen))
        .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    Regimen
        .findById(req.params.id)
        .then(regimen => res.json(regimen))
        .catch(err => res.status(400).json(err));
})

router.post('/', (req, res) => {
    
    const newRegimen = new Regimen({
        user_id: req.body.user_id,
        creator: req.body.creator,
        title: req.body.title,
        description: req.body.description,
        exercise_ids: req.body.exercise_ids
    });
    newRegimen.save()
        .then(regimen => res.json(regimen))
        .catch(err => console.log(err))


})

// router.delete('/:id',
//     (req, res) => {
//         debugger;
//         Regimen.findByIdAndDelete(regimen.id).catch((err) => res.status(404).json({ noRegimenFound: "No regimen found in the database with that ID" }));
//         res.json({ success: true })
// });


router.delete('/:id', (req, res) => {
    Regimen.findById(req.params.id)
        .then(regimen => {

            // if (regimen.ownerId.toString() !== req.user.id) {
            //     return res.status(401).json({ unauthorized: 'Only the owner can delete this regimen.' })
            // }

            Regimen.findByIdAndDelete(regimen.id, function (err) {
                if (err) console.log(err);
                console.log("Successful deletion.")
            })
            return res.status(200).json({ deleted: "true" })
        })
        .catch(err => res.status(404).json({ noregimenFound: "No regimen found with that ID" }))
})


router.patch('/:id',
    (req, res) => {
        Regimen.findById(req.params.id)
            .then(regimen => {
                regimen.user_id = req.body.user_id;
                regimen.creator = req.body.creator;
                regimen.title = req.body.title;
                regimen.description =  req.body.description;
                regimen.exercise_ids = req.body.exercise_ids;

                return regimen.save()
                    .then(regimen => res.json(regimen)).catch(err => console.log(err))
            })
                .catch(err => res.status(404).json( { noRegimenFound: "No regimen found in the database with that ID"} ))
});

// router.post('/like-regimen', (req, res) => {
//     Users.findOne({ _id: req.body.userId, likedRegimens: { $in: [req.body.regimenId] } }).then(async user => {
//         if (!user) {
//             await Users.updateOne({ _id: req.body.userId }, {
//                 $push: {
//                     likedRegimens: req.body.regimenId
//                 }
//             });
//             await Regimens.updateOne({ _id: req.body.regimenId }, {
//                 $inc: {
//                     likes: 1
//                 }
//             });
//             res.status(200).json({ message: 'Added To Liked' });
//         } else {
//             await Users.updateOne({ _id: req.body.userId }, {
//                 $pull: {
//                     likedRegimens: req.body.regimenId
//                 }
//             });
//             await Regimens.updateOne({ _id: req.body.regimenId }, {
//                 $inc: {
//                     likes: -1
//                 }
//             })
//             res.status(200).json({ message: 'Removed from liked' })
//         }
//     })
// });



module.exports = router;