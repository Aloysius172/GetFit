const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.muscle = validText(data.muscle) ? data.muscle : '';
    data.difficulty = validText(data.difficulty) ? data.difficulty : '';
    data.tpyeOfExercise = validText(data.tpyeOfExercise) ? data.tpyeOfExercise : '';
    data.description = validText(data.description) ? data.description : '';
    data.assisted = validText(data.assisted) ? data.assisted : '';
    data.name = validText(data.name) ? data.name : '';


    if (Validator.isEmpty(data.muscle)) {
        errors.muscle = 'muscle field is required';
    }

    if (Validator.isEmpty(data.difficulty)) {
        errors.difficulty = 'difficulty field is required';
    }
    if (Validator.isEmpty(data.tpyeOfExercise)) {
        errors.tpyeOfExercise = 'tpyeOfExercise field is required';
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'description field is required';
    }
    if (Validator.isEmpty(data.assisted)) {
        errors.assisted = 'assisted field is required';
    }

    if (Validator.isEmpty(data.name)) {
        errors.name = 'name field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}