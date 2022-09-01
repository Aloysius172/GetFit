const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema(
    {
        liked: {
            type: Boolean,
            // default: false,
            require: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            // type: String,
            ref: "users",
            // required: true,
        },
        regimen_id: {
            type: Schema.Types.ObjectId,
            // type: String,
            ref: "regimens",
            // required: true,
        },

        date: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = Like = mongoose.model("Like", LikeSchema);