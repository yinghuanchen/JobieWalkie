const mongoose = require("mongoose");
const Debrief = require("./Debrief");
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

LikeSchema.post('save', function (doc, next) {
    Debrief.findByIdAndUpdate(
      { _id: doc.debrief },
      {
        $inc: {
          likeCount: 1,
        },
      },
      function (error, debrief) {
        if (error) return next(error);
        next();
      }
    );
});

// LikeSchema.pre("deleteOne", { document: false, query: true }, function ( doc, next) {
//   console.log("in remove");
//   Debrief.findByIdAndUpdate(
//     { _id: doc.debrief },
//     {
//       $inc: {
//         likeCount: -1,
//       },
//     },
//     function (error, debrief) {
//       if (error) return next(error);
//       next();
//     }
//   );
// });


module.exports = Like = mongoose.model("likes", LikeSchema);
