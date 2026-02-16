const { default: mongoose } = require("mongoose");

const commentSchema = mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})
const Comment = mongoose.model("Comment", commentSchema, "comments");
module.exports = Comment;