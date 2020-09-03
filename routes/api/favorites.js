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
         jobListing: req.body.jobListingId,
         user: req.user,
       });
    newFavorite.save().then((newFavorite) => res.json(newFavorite.jobListing));
  }
)

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Favorite.findById(req.params.id)
    //   .then((favorte) )
    // const favoriteId = ;
    // Favorite.findByIdAndRemove(req.params.id)
    //   .then(() => res.json(favoriteId))
    //   .catch((errs) => console.log(errs)); 
    Favorite.findOneAndDelete({
      user: req.user.id,
      jobListing: req.body.jobListingId,
    }).then(()=> res.json({msg: "remove favorite!"}))
    .catch((err) => console.log(err)); 
  }
)

// router.delete(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     // Favorite.findById(req.params.id)
//     //   .then((favorte) )
//     const favoriteId = req.params.id;
//     Favorite.findByIdAndRemove(req.params.id)
//       .then(() => res.json(favoriteId))
//       .catch((errs) => console.log(errs));
//   }
// );


module.exports = router;
