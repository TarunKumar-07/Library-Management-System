const memberService = require("../service/memberService");

class MemberController {
  async createMember(req, res) {
    try {
      const { fName, lName, contactNo, addhar, sDate, eDate, membership } =
        req.body;
      const saveMember = await memberService.createMember(
        fName,
        lName,
        contactNo,
        addhar,
        sDate,
        eDate,
        membership
      );
      res.json(saveMember);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllMembers(req, res) {
    try {
      const members = await memberService.getAllMembers();
      res.json(members);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new MemberController();
