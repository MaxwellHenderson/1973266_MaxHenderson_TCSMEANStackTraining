const express = require("express");
const postController = require("../controllers/postController");
let uploadImage = require("../middleware/multer");
const { hasDescription } = require("../validations/validators");
const router = express.Router();

router.get("/", postController.index);

router.get("/:id", postController.show);

router.post(
  "/",
  uploadImage("posts").single("image"),
  hasDescription,
  postController.store
);

module.exports = router;
