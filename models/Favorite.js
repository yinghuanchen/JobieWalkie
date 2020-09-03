const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    jobListing: {
      type: Schema.Types.ObjectId,
      ref: "joblistings",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Favorite = mongoose.model("favorites", FavoriteSchema);
