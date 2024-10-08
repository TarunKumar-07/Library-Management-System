const userService = require("../service/userService");

class UserController {
  async createUser(req, res) {
    try {
      const { user, name, password, status, admin } = req.body;
      const saveUser = await userService.createUser(
        user,
        name,
        password,
        status,
        admin
      );
      res.json(saveUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getLoginUser(req, res) {
    try {
      const { name, password } = req.body;
      const user = await userService.getLoginUser(name, password);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
