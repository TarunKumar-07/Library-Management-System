const User = require("../models/user");

class UserService {
  async createUser(user, name, password, status, admin) {
    const newUser = new User({ user, name, password, status, admin });
    return await newUser.save();
  }

  async getAllUsers() {
    return await User.find();
  }

  async getLoginUser(name, password) {
    // Find user by name
    const user = await User.findOne({ name: name });

    // Check if user exists
    if (!user) {
      throw new Error("User not found");
    }

    // Compare plain text passwords (not recommended for production)
    if (user.password !== password) {
      throw new Error("Invalid password");
    }

    return user;
  }
}

module.exports = new UserService();
