// const express = require("express");
// const router = express.Router();
// const passport = require("passport");
// const keys = require("../../config/keys");
// const Company = require("../../models/Company");

// // Index
// router.get("/", (req, res) => {
//   Company.find()
//     //might need to change the date string to date object
//     .then((companies) => {
//       return res.json(companies);
//     })
//     .catch((err) =>
//       res.status(404).json({ notcompaniesfound: "No companies found" })
//     );
// });
// // Search 


// // Show
// router.get("/:id", (req, res) => {
//   Company.findById(req.params.id)
//     .then((company) => res.json(company))
//     .catch((err) =>
//       res.status(404).json({ nojcompanyfound: "No company found with that ID" })
//     );
// });

// module.exports = router;
