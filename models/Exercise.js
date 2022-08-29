const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({

    muscle: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        required: true
    },

    tpyeOfExercise: {
        type: String,
        require: true
    },

    description: {
        type: String,
        required: true
    },

    assisted: {
        type: Boolean,
        require: true
    },

    name: {
        type: String,
        require: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Exercise = mongoose.model('exercises', ExerciseSchema);
