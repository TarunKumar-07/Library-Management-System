const User = require("../models/user");

class UserService {
  async createUser(user, name, password, status, admin) {
    const newUser = new User({ user, name, password, status, admin });
    return await newUser.save();
  }
}

module.exports = new UserService();
