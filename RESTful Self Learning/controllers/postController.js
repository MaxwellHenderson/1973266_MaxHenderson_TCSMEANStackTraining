const validationHandler = require("../validations/validationHandler");
let Post = require("../models/post");

exports.index = async (req, res) => {
  try {
    let posts = await Post.find().sort({ createdAt: -1 });
    res.send(posts);
  } catch (err) {
    next(err);
  }
};

exports.show = async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id,
    });
  } catch (err) {
    next(err);
  }
};

exports.store = async (req, res, next) => {
  try {
    validationHandler(req);
    let post = new Post();
    post.description = req.body.description;
    post.image = req.file.filename;
    post = await post.save();

    res.send(post);
  } catch (err) {
    next(err);
  }
};
