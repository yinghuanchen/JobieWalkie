const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const Favorite = require("../../models/Favorite");
const User = require("../../models/User");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
       Favorite.findOne({
         jobListing: req.body.jobListingId,
         user: req.user.id,
       }).then((favorite) => {
           if(favorite) return res.status(400).json({msg: "You've already like this!"});
       })
       const newFavorite = new Favorite({
         jobListing: req.body.jobListingId,
         user: req.user.id,
       });
    newFavorite.save().then((newFavorite) => res.json(newFavorite));
  }
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Favorite.findOne({
      jobListing: req.body.jobListingId,
      user: req.user.id,
    })
    .then((favorite) => {
      Favorite.findByIdAndRemove(favorite.id)
        .then(() => res.json({ msg: "favorite removed" }))
        .catch((errs) => console.log(errs));
    })
    .catch((err) => res.json(err));
    
  }
);

module.exports = router;
