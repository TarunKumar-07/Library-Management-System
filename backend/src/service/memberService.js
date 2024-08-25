const Member = require("../models/member");

class MemberService {
  async createMember(
    fName,
    lName,
    contactNo,
    addhar,
    sDate,
    eDate,
    membership
  ) {
    const newMember = new Member({
      fName,
      lName,
      contactNo,
      addhar,
      sDate,
      eDate,
      membership,
    });
    return await newMember.save();
  }
}

module.exports = new MemberService();
