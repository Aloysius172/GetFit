const express = require("express");
const router = express.Router();
const Regimen = require("../../models/Regimens")

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
        .then(data => res.json(data))
        .catch(err => console.log(err))


})

module.exports = router;