const bcrypt = require("bcrypt");

const User = require("../models/user");

module.exports = {
  createUser: async (args) => {
    try {
      const user = User.find({ email: args?.userInput?.email });
      if (user) {
        throw new Error("User Already exist with same Email!");
      }
      const hashedPassword = bcrypt.hash(args?.userInput?.password, 12);
      const newUser = new User({
        email: args?.userInput?.email,
        password: hashedPassword,
      });
      const result = newUser.save();
      return { ...result?._doc, password: "" };
    } catch (err) {
      throw err;
    }
  },
};
