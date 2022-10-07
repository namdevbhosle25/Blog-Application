const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); 
//Create todo list schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 25,
    required: true,
  },
  email: {
    type: String,
    maxLength: 50,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


//Export as Module
module.exports = mongoose.model("users", userSchema);

module.exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error("Hashing failed", error);
  }
};