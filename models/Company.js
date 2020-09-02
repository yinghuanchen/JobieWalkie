const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true, 
  },
  companyLink: {
    type: String,
    required: true,
  }, 
  companyImg: {
    type: String,
    required: true,
  }, 
});

module.exports = Company = mongoose.model("companys", CompanySchema);
