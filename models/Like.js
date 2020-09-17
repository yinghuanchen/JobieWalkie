const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users", 
        },
        debrief: {
            type: Schema.Types.ObjectId,
            ref: "debriefs",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Like = mongoose.model("likes", LikeSchema);
