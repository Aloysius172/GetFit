const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema(
    {
        liked: {
            type: Boolean,
            default: false,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        regimen_id: {
            type: Schema.Types.ObjectId,
            ref: "Regimen",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Like = mongoose.model("Like", LikeSchema);