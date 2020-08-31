const express = require('express');
const router = express.Router();
const passport = require('passport'); 
const keys = require("../../config/keys");
const JobListing = require("../../models/JobListing");


// Index
router.get("/", (req, res) => {
  JobListing.find()
    //might need to change the date string to date object
    .sort({ datePosted: -1 }) // newest first
    .then((jobListings) => {
      return res.json(jobListings);
    })
    .catch((err) =>
      res.status(404).json({ notjobListingsfound: "No jobListings found" })
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

module.exports = router;