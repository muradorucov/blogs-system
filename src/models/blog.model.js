const { default: mongoose } = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  images: [
    {
      type: String
    }
  ]
}, {
  timestamps: true
});

const Blog = mongoose.model("Blog", blogSchema,"blogs");
module.exports = Blog;