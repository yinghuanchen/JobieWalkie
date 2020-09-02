const express = require("express");
const router = express.Router();
const passport = require("passport");
const keys = require("../../config/keys");
const Company = require("../../models/Company");
const e = require("express");


//var matches = aString.match(new RegExp(pattern));

// Search 
router.post("/", (req, res) => {
  // debugger; 
  //const queryName = new RegExp(req.body.name);
  const queryName = req.body.name;
  if (queryName) {
    Company.find({ name: { $regex: queryName, $options: "i" } })
      //might need to change the date string to date object
      .then((companies) => {
        return res.json(companies);
      })
      .catch((err) =>
        res.status(404).json({ noCompaniesFound: "No companies found" })
      );
  } else {
    res.json({ noCompaniesFound: "No companies found" });
  }
});

// Index
router.get("/", (res, req) => {
    Company.find()
      .sort({ name: 1 })
      .then((companies) => {
        return res.json(companies);
      })
      .catch((err) =>
        res.status(404).json({ noCompaniesFound: "No companies found" })
      );
})

// Hi I would like to go to another breakout room but I think we can
// 't 
// me toooo
// I solve the case sensitivity problem we can work on css so my search bar wont disappear
// nice. yeah the search bar still flies away And the position for dropdown is so weird 
// Show
router.get("/:id", (req, res) => {
  Company.findById(req.params.id)
    .then((company) => res.json(company))
    .catch((err) =>
      res.status(404).json({ noCompanyFound: "No company found with that ID" })
    );
});

module.exports = router;
