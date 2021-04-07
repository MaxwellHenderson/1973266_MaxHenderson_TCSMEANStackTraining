const express = require("express");
const postController = require("../controllers/postCaller");

const router = express.Router();

router.get("/", postController.index);

module.exports = router;
