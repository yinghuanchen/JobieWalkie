const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const User = require("../../models/User")
const Favorite = require("../../models/Favorite");
const JobListing = require("../../models/JobListing");
const jwt = require("jsonwebtoken")
const keys = require("../../config/keys")
const passport = require("passport")

// Validations
const validateRegisterInput = require("../../validation/register")
const validateLoginInput = require("../../validation/login")

// Test
router.get("/test", (req, res) => res.json({ msg: "This is the users route" }))

// Current
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email,
    })
  }
)

router.get(
  "/current/favorites",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // let favoriteJobListings = ["1"];
    // Favorite.find({ user: req.user.id },function (err, result) {
    //   console.log(result);//favoriteJobListings 
    //   let favoriteJobListings = [];
    //   result.forEach((favorite) =>{       
    //     JobListing.findById(favorite.jobListing).then((joblisting) => {
    //       //console.log(favoriteJobListings);
    //       // favoriteJobListings.push("1");
    //       favoriteJobListings.push(joblisting);
    //       // return joblisting
    //       // console.log(joblisting);
    //     });
    //   });
    //   res.json({
    //     favoriteJobListings,
    //   });
    //});
    // populate: pull the object 
    Favorite.find({ user: req.user.id}).populate('jobListing').then((listings)=>{
      return res.json(listings.map((ele) => ele.jobListing));
    })
  }
)
// JW-TODO: This route is retrieving jobListing information rather than favorites information


router.get(
  "/current/debriefs",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Debrief.find({ user: req.user.id })
      .then((debriefs) => {
        return res.json(debriefs);
      })
      .catch((err) => res.json(err));
  }
);


// Register
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body)

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // Use the validations to send the error
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      // Otherwise create a new user
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// Login
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body)

  console.log(errors);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email
  const password = req.body.password

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "Invalid credentials" });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, handle: user.handle };

        jwt.sign(
          payload,
          keys.secretOrKey,
          // Tell the key to expire in one hour
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            })
          }
        )
      } else {
        return res.status(400).json({ password: "Invalid credentials" });
      }
    })
  })
})

module.exports = router