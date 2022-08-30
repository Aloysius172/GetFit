const express = require("express");
const router = express.Router();
const Exercise = require("../../models/Exercise")

router.get("/test", (req, res) => res.json({ msg: "This is the exercise route" }));

router.post('/create', (req, res) => {

    const newExercise = new Exercise({
        difficulty: req.body.difficulty,
        muscle: req.body.muscle,
        tpyeOfExercise: req.body.tpyeOfExercise,
        description: req.body.description,
        assisted: req.body.assisted,
        name: req.body.name

    });
    newExercise.save()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
})

module.exports = router;