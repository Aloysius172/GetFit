const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegimenSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },

    creator: {
        type: String,
        required: true
    },

    title: {
        type: String,
      required: true
    },

    description: {
        type: String,
        required: true
    },

    exercise_ids: {
        type: Array,
        required: true
    }
});


//create postman on raw data type (json)


module.exports = Regimen = mongoose.model('regimens', RegimenSchema);