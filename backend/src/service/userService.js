const User = require("../models/user");

class UserService {
  async createUser(user, name, password, status, admin) {
    const newUser = new User({ user, name, password, status, admin });
    return await newUser.save();
  }

  async getAllUsers() {
    return await User.find();
  }
}

module.exports = new UserService();
