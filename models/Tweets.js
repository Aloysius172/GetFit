const mongoose = require("mongoose");
const { schema } = require("./User");
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    commentCreatorName: {
        type: String,
        require: true
    },
    regimen_id: {
        type: Schema.Types.ObjectId,
        // type: String,
        ref: "regimens",
        // required: true,
    },
    regimenCreator_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    regimenCreatorName: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

const Tweet = mongoose.model("tweet", TweetSchema);

module.exports = Tweet;