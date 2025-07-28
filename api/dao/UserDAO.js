const User = require("../models/User");

class UserDAO {
  constructor() {
    this.model = User;
  }

  async create(req, res) {
    try {
      const document = new this.model(req.body);
            
      await document.save();
      res.status(201).json(document);
    } catch (error) {
      res.status(500).json({ message: `Error creating document: ${error.message}` });
    }
  }

  async getAll(req, res) {
    try {
      const items = await this.model.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: `Error fetching documents: ${error.message}` });
    }
  }
}

module.exports = UserDAO;