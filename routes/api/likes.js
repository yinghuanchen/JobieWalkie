const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const Like = require("../../models/Like");
const Debrief = require("../../models/Debrief");
const User = require("../../models/User");

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Like.findOne({
            debrief: req.body.debriefId,
            user: req.user,
        }).then((like) => {
            if (like) return res.status(400).json({ msg: "You've already like this!" });
        })
        const newLike = new Like({
            debrief: req.body.debriefId,
            user: req.user,
        });
        newLike.save().then((newLike) => res.json(newLike.debrief)).catch((err) => console.log(err));;
    }
)

router.delete(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {  

        Like.findOneAndDelete({
            user: req.user.id,
            debrief: req.body.debriefId,
        }).then((like) => {
            Debrief.findByIdAndUpdate(
              { _id: like.debrief },
              {
                $inc: {
                  likeCount: -1,
                },
              },
              { new: true }
            )
              .then((debrief) => res.json(debrief))
              .catch((err) => console.log(err));
        })
            .catch((err) => console.log(err));
    }
)

module.exports = router;