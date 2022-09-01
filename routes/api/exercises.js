const express = require("express");
const router = express.Router();
const Exercise = require("../../models/Exercise");
const exercise = require("../../validations/exercise");
const validateExerciseInput = require("../../validations/exercise");


router.get("/test", (req, res) => res.json({ msg: "This is the exercise route" }));

router.get("/", (req, res) => {
    Exercise.find()
        // .sort({ date: -1 }) // sort newest
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    // debugger
    Exercise
    .findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json(err));
})

router.post('/create', (req, res) => {

    const newExercise = new Exercise({
        difficulty: req.body.difficulty,
        muscle: req.body.muscle,
        typeOfExercise: req.body.typeOfExercise,
        description: req.body.description,
        assisted: req.body.assisted,
        name: req.body.name,
        video_id: req.body.video_id,
        equipment: req.body.equipment

    });
    newExercise.save()
        .then(data => res.json(data))
        .catch(err => console.log(err))
})

// router.get('/:id', (req, res) => {
//     Exercise.findById(req.params.id)
//         .then(exercise => res.json(exercise))
// })

module.exports = router;