const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//populate method to retrieve info
//https://mongoosejs.com/docs/populate.html
const LikeSchema = new Schema(
    {   
        user_id: {
            type: Schema.Types.ObjectId,
            type: String,
            ref: "users",
            required: true,
        },
        regimen_id: {
            type: Schema.Types.ObjectId,
            type: String,
            ref: "regimens",
            required: true,
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = Like = mongoose.model("Like", LikeSchema);