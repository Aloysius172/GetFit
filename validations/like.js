const Validator = require('validator');
const validText = require('./valid-text');
// const mongoose = require('mongoose');

module.exports = function validateLikeInput(data) {
    let errors = {};

    data.user_id = validText(data.user_id) ? data.user_id : '';
    data.regimen_id = validText(data.regimen_id) ? data.regimen_id : '';


    if (!Validator.isValidObjectId(data.user_id)) {
        errors.user_id = 'Invalid User ID'
    }

    if (!Validator.isValidObjectId(data.regimen_id)) {
        errors.regimen_id = 'Invalid Regimen ID'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};