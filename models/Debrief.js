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
      ref: "companys",
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    interviewDate: {
      type: Date,
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
      type: Number,
      required: true,
    },
    comments: {
      type: String,
      required: true,
    },  
    likeCount: {
      type: Number,  
      default: 0, 
    }    
  },
  {
    timestamps: true,
  }
);


// DebriefSchema.statics = {
//   get: function (_id) {
//     return this.findById(_id).exec();
//   }
// }

// DebriefSchema.statics.get = function get (_id, cb) {
//   return this.findById(_id).exec(cb);
// };

module.exports = Debrief = mongoose.model("debriefs", DebriefSchema);
