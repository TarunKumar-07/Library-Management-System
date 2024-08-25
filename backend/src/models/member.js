const mongoose = require("../configuration/dbConfig");

const memberSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  contactNo: String,
  addhar: String,
  sDate: String,
  eDate: String,
  membership: String,
});

const Member = mongoose.model("Member", memberSchema);
module.exports = Member;
