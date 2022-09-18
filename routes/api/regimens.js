const express = require("express");
const router = express.Router();
const Regimen = require("../../models/Regimens");
const passport = require("passport");

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

router.delete('/:id', passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Regimen.findOneAndDelete({id: req.params.id}).catch((err) => res.status(404).json({ noRegimenFound: "No regimen found in the database with that ID" }));

        res.json({ success: true })
});

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



module.exports = router;