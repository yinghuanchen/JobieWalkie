const express = require("express")
const router = express.Router()
const passport = require("passport")
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")
const Favorite = require("../../models/Favorite")
const User = require("../../models/User")

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
       Favorite.findOne({
         jobListing: req.body.jobListing,
         user: req.user,
       }).then((favorite) => {
           if(favorite) return res.status(400).json({msg: "You've already like this!"});
       })
       const newFavorite = new Favorite({
         jobListing: req.body.jobListing,
         user: req.user,
       });
    newFavorite.save().then((newFavorite) => res.json(newFavorite))
  }
)

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Favorite.findByIdAndRemove(req.params.id)
      .then(() => res.json({ msg: "favorite removed" }))
      .catch((errs) => console.log(errs))
  }
)


module.exports = router;
