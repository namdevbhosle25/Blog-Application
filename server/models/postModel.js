const mongoose = require("mongoose");

//Create todo list schema
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [String],
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Export as Module
module.exports = mongoose.model("posts", postSchema);
