const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DebriefSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      // 'users is the db table name'
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    interviewDate: {
      type: String,
      required: true,
    },
    interviewStage: {
      type: String,
      required: true,
    },
    interviewSummary: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Debrief = mongoose.model("debriefs", DebriefSchema);
