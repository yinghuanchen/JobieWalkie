const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const keys = require("../../config/keys");
const JobListing = require("../../models/JobListing");
const Company = require("../../models/Company");


// Index
router.get("/", (req, res) => {
  JobListing.find()
    //might need to change the date string to date object
    .sort({ datePosted: -1 }) // newest first
    .then((jobListings) => {
      return res.send(jobListings);
    })
    .catch((err) =>
      res.status(404).json({ nojobListingsfound: "No jobListings found" })
    );
});
   

// Show 
router.get("/:id", (req, res) => {
  JobListing.findById(req.params.id)
    .then((jobListing) => res.json(jobListing))
    .catch((err) =>
      res
        .status(404)
        .json({ nojobListingfound: "No jobListing found with that ID" })
    );
});


// get company id
router.get("/:id/companyId", (req, res) => {
  JobListing.findById(req.params.id)
    .then((jobListing) => {
      Company.findOne({ name: jobListing.companyName })
      .then((company) => res.json(company.id))
      .catch((err) => {
        const newCompany = new Company({
          name: jobListing.companyName,
          companyLink: "",
          companyImg: "",
        });
        newCompany
          .save()
          .then((newCompany) => res.json(newCompany.id))
          .catch((err) => console.log(err));
      })
    })
    .catch((err) =>
      res
        .status(404)
        .json({ nojobListingfound: "No jobListing found with that ID" })
    );
});

module.exports = router;