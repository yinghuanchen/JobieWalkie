const express = require("express");
const router = express.Router();
const passport = require("passport");
const keys = require("../../config/keys");
const Company = require("../../models/Company");
const Debrief = require("../../models/Debrief");


//var matches = aString.match(new RegExp(pattern));

// Index
router.get("/", (req, res) => {
  const queryName = new RegExp(req.body.name); //{name: querysting}
  if (queryName) {
    Company.find({ name: queryName })
      //might need to change the date string to date object
      .then((companies) => {
        return res.json(companies);
      })
      .catch((err) =>
        res.status(404).json({ noCompaniesFound: "No companies found" })
      );
  } else {
    Company.find()
      //might need to change the date string to date object
      .then((companies) => {
        return res.json(companies);
      })
      .catch((err) =>
        res.status(404).json({ noCompaniesFound: "No companies found" })
      );
  }
});


// Show
router.get("/:id", (req, res) => {
  Company.findById(req.params.id)
    .then((company) => res.json(company))
    .catch((err) =>
      res.status(404).json({ noCompanyFound: "No company found with that ID" })
    );
});

// show debriefs 
router.get(
  "/:id/debriefs",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {

    Debrief.find({ company: req.params.id })
      .then((debriefs) => {
        return res.json(debriefs);
      })
      .catch((err) => res.json(err));
  }
);


module.exports = router;
