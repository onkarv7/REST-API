const mongoose = require("mongoose");

// create schema
// hot the object look like (structure) for cluster (model) in mongo DB

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

// export the model > model name is postsModel and schema is postSchema
// we can see model postsModel in DB
module.exports = mongoose.model("postsModel", postSchema);
