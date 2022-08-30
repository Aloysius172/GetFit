const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegimenSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        require: true
    }

    // exercise: [
        
    // ]
});

module.exports = Regimen = mongoose.model('regimens', RegimenSchema);