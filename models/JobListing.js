const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobListingSchema = new Schema({
  jobLink: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  senorityLevel: {
    type: String,
    required: true,
  },
  jobFunction: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    required: true,
  },
});

module.exports = JobListing = mongoose.model("joblistings", JobListingSchema);
